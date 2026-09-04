import React, { useEffect, useRef } from "react";

// Safe cross-browser rounded rectangle drawer
function drawRoundRect(ctx, x, y, width, height, radius) {
  if (!Number.isFinite(x) || !Number.isFinite(y) || width <= 0 || height <= 0) return;
  const r = Math.max(0, Math.min(radius || 0, width / 2, height / 2));
  ctx.beginPath();
  if (typeof ctx.roundRect === "function") {
    try {
      ctx.roundRect(x, y, width, height, r);
      return;
    } catch {
      // Fallback if roundRect throws on certain platforms
    }
  }
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export default function Hero3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId;

    let width = Math.max(300, canvas.parentElement?.clientWidth || 400);
    let height = Math.max(300, canvas.parentElement?.clientHeight || 520);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(300, canvas.parentElement.clientWidth || 400);
      height = Math.max(300, canvas.parentElement.clientHeight || 520);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // 3D Geometry: Geodesic Sphere / Icosahedron Vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const baseVertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ].map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [x / len, y / len, z / len];
    });

    // Edges connecting vertices with distance <= 1.15
    const edges = [];
    for (let i = 0; i < baseVertices.length; i++) {
      for (let j = i + 1; j < baseVertices.length; j++) {
        const dx = baseVertices[i][0] - baseVertices[j][0];
        const dy = baseVertices[i][1] - baseVertices[j][1];
        const dz = baseVertices[i][2] - baseVertices[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.15) {
          edges.push([i, j]);
        }
      }
    }

    // 3D Particles
    const PARTICLE_COUNT = 48;
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 450,
        y: (Math.random() - 0.5) * 450,
        z: (Math.random() - 0.5) * 450,
        size: Math.random() * 2.5 + 1.2,
        speed: (Math.random() * 0.004) + 0.002,
        phase: Math.random() * Math.PI * 2,
        colorType: i % 3 // 0: blue, 1: indigo, 2: red
      });
    }

    // Satellite Technology Nodes
    const satellites = [
      { label: "AI CORE", angle: 0, dist: 160, speed: 0.012, color: "#EF4444" },
      { label: "CLOUD", angle: (Math.PI * 2) / 4, dist: 175, speed: -0.009, color: "#2563EB" },
      { label: "NEURAL", angle: (Math.PI * 4) / 4, dist: 165, speed: 0.01, color: "#6366F1" },
      { label: "API ARCH", angle: (Math.PI * 6) / 4, dist: 180, speed: -0.011, color: "#3B82F6" }
    ];

    let rotX = 0.2;
    let rotY = 0.3;
    let targetRotX = 0.2;
    let targetRotY = 0.3;
    let time = 0;

    const onMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (Number.isFinite(x) && Number.isFinite(y)) {
        targetRotY = Math.max(-1.5, Math.min(1.5, x * 1.5));
        targetRotX = Math.max(-1.2, Math.min(1.2, -y * 1.2));
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Animation Loop
    const render = () => {
      try {
        time += 0.015;
        rotX += (targetRotX - rotX) * 0.05;
        rotY += (targetRotY - rotY) * 0.05;

        const autoRotY = rotY + time * 0.4;
        const autoRotX = rotX + Math.sin(time * 0.5) * 0.15;

        ctx.clearRect(0, 0, width, height);

        const cx = width / 2;
        const cy = height / 2 + Math.sin(time) * 10; // gentle float
        const radius = Math.max(60, Math.min(width, height) * 0.26);

        // Outer radial glow
        const glowRadius = Math.max(20, radius * 2.2);
        const glowGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, glowRadius);
        glowGrad.addColorStop(0, "rgba(37, 99, 235, 0.18)");
        glowGrad.addColorStop(0.5, "rgba(99, 102, 241, 0.08)");
        glowGrad.addColorStop(1, "transparent");
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Project 3D vector helper safely
        const project = (x, y, z) => {
          // Rotate Y
          const cosY = Math.cos(autoRotY);
          const sinY = Math.sin(autoRotY);
          const x1 = x * cosY + z * sinY;
          const z1 = -x * sinY + z * cosY;

          // Rotate X
          const cosX = Math.cos(autoRotX);
          const sinX = Math.sin(autoRotX);
          const y2 = y * cosX - z1 * sinX;
          const z2 = y * sinX + z1 * cosX;

          // Perspective with safe bounds
          const fov = 420;
          const denom = fov + z2;
          const scale = denom > 30 ? fov / denom : 0.06;
          const clampedScale = Math.max(0.06, Math.min(3, scale));
          return {
            x: cx + x1 * clampedScale,
            y: cy + y2 * clampedScale,
            z: z2,
            scale: clampedScale
          };
        };

        // Draw background particles
        particles.forEach((p) => {
          p.z += Math.cos(time + p.phase) * 0.5;
          p.y += Math.sin(time + p.phase) * 0.3;
          const proj = project(p.x, p.y, p.z);
          const particleRadius = Math.max(0.5, p.size * proj.scale);
          if (proj.scale > 0 && Number.isFinite(proj.x) && Number.isFinite(proj.y)) {
            ctx.beginPath();
            ctx.arc(proj.x, proj.y, particleRadius, 0, Math.PI * 2);
            if (p.colorType === 0) {
              ctx.fillStyle = `rgba(37, 99, 235, ${Math.min(0.6, 0.4 * proj.scale)})`;
            } else if (p.colorType === 1) {
              ctx.fillStyle = `rgba(99, 102, 241, ${Math.min(0.6, 0.4 * proj.scale)})`;
            } else {
              ctx.fillStyle = `rgba(239, 68, 68, ${Math.min(0.6, 0.35 * proj.scale)})`;
            }
            ctx.fill();
          }
        });

        // Calculate 3D sphere vertices
        const projVertices = baseVertices.map(([vx, vy, vz]) => {
          return project(vx * radius, vy * radius, vz * radius);
        });

        // Inner Glowing Core
        const coreRadius = Math.max(10, radius * 0.65);
        const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreRadius);
        coreGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        coreGrad.addColorStop(0.3, "rgba(99, 102, 241, 0.6)");
        coreGrad.addColorStop(0.7, "rgba(37, 99, 235, 0.3)");
        coreGrad.addColorStop(1, "rgba(239, 68, 68, 0.05)");
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw 3D Edges
        edges.forEach(([i, j]) => {
          const p1 = projVertices[i];
          const p2 = projVertices[j];
          if (!p1 || !p2 || !Number.isFinite(p1.x) || !Number.isFinite(p2.x)) return;
          const avgZ = (p1.z + p2.z) / 2;
          const alpha = Math.max(0.12, Math.min(0.85, (avgZ + radius) / (radius * 2)));

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          // Edge gradient from Blue to Indigo/Red
          const edgeGrad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          edgeGrad.addColorStop(0, `rgba(37, 99, 235, ${alpha * 0.8})`);
          edgeGrad.addColorStop(0.5, `rgba(99, 102, 241, ${alpha * 0.9})`);
          edgeGrad.addColorStop(1, `rgba(239, 68, 68, ${alpha * 0.7})`);

          ctx.strokeStyle = edgeGrad;
          ctx.lineWidth = Math.max(0.5, 1.3 * ((p1.scale + p2.scale) / 2));
          ctx.stroke();
        });

        // Draw Vertices Nodes
        projVertices.forEach((p, idx) => {
          if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) return;
          const nodeSize = Math.max(1, 3.5 * p.scale);
          ctx.beginPath();
          ctx.arc(p.x, p.y, nodeSize, 0, Math.PI * 2);
          ctx.fillStyle = idx % 2 === 0 ? "#2563EB" : "#EF4444";
          ctx.fill();

          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 1;
          ctx.stroke();
        });

        // Render Orbiting Satellites with Labels
        satellites.forEach((sat) => {
          sat.angle += sat.speed;
          const sx = Math.cos(sat.angle) * sat.dist;
          const sz = Math.sin(sat.angle) * sat.dist;
          const sy = Math.sin(sat.angle * 2) * 35;

          const proj = project(sx, sy, sz);
          if (!Number.isFinite(proj.x) || !Number.isFinite(proj.y)) return;

          // Connector line to center
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(proj.x, proj.y);
          ctx.strokeStyle = `rgba(148, 163, 184, ${Math.min(0.5, 0.25 * proj.scale)})`;
          ctx.setLineDash([3, 3]);
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.setLineDash([]);

          // Satellite Node
          const nodeRadius = Math.max(1.5, 4.5 * proj.scale);
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, nodeRadius, 0, Math.PI * 2);
          ctx.fillStyle = sat.color;
          ctx.fill();
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Label Pill
          const pillWidth = Math.max(40, 68 * proj.scale);
          const pillHeight = Math.max(14, 22 * proj.scale);
          const px = proj.x - pillWidth / 2;
          const py = proj.y - pillHeight - (8 * proj.scale);

          ctx.fillStyle = "rgba(17, 24, 39, 0.88)";
          ctx.strokeStyle = "rgba(226, 232, 240, 0.4)";
          ctx.lineWidth = 1;

          // Safe rounded rect
          drawRoundRect(ctx, px, py, pillWidth, pillHeight, 4 * proj.scale);
          ctx.fill();
          ctx.stroke();

          const fontSize = Math.max(9, Math.round(10 * proj.scale));
          ctx.font = `600 ${fontSize}px Inter, sans-serif`;
          ctx.fillStyle = "#F8FAFC";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(sat.label, proj.x, py + pillHeight / 2);
        });

        animationFrameId = requestAnimationFrame(render);
      } catch (err) {
        console.error("Hero3DCanvas rendering error caught:", err);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="hero-3d-container" className="relative w-full h-[420px] md:h-[500px] lg:h-[560px] flex items-center justify-center select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing"
      />
      
      {/* Depth badge below visual - visible on desktop view */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm text-xs text-slate-600 font-medium">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Interactive Neural Mesh • 60 FPS Engine</span>
      </div>
    </div>
  );
}
