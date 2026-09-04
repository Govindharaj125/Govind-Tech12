import React, { useEffect, useRef } from "react";

export default function CursorAnimation() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Only run on devices with a mouse/fine pointer
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHoveringInteractive = false;
    let isMouseDown = false;
    let rafId = null;

    const handleMouseMove = (e) => {
      try {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${mouseX - 100}px, ${mouseY - 100}px, 0)`;
        }

        // Safely check if hovering over an interactive element (buttons, links, inputs)
        const target = e.target;
        const el = target instanceof Element ? target : (target && target.parentElement instanceof Element ? target.parentElement : null);
        const isInteractive = Boolean(
          el && typeof el.closest === "function" && (
            el.closest("button") ||
            el.closest("a") ||
            el.closest("input") ||
            el.closest("textarea") ||
            el.closest("select") ||
            el.closest(".cursor-pointer")
          )
        );
        isHoveringInteractive = isInteractive;
      } catch {
        // Prevent any mousemove error from bubbling
      }
    };

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    // Smooth lerp loop for the trailing ring
    const render = () => {
      try {
        // Lerp factor
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;

        if (ringRef.current) {
          const scale = isMouseDown ? 0.75 : isHoveringInteractive ? 1.6 : 1;
          const opacity = isHoveringInteractive ? 0.9 : 0.6;
          ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0) scale(${scale})`;
          ringRef.current.style.opacity = opacity;
        }

        rafId = requestAnimationFrame(render);
      } catch {
        // Prevent uncaught RAF exceptions
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Soft ambient aura following mouse in empty space */}
      <div
        ref={glowRef}
        className="w-[200px] h-[200px] rounded-full bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-pink-400/10 blur-2xl transition-opacity duration-300 opacity-70 pointer-events-none fixed top-0 left-0"
        style={{ willChange: "transform" }}
      />

      {/* Trailing smooth ring */}
      <div
        ref={ringRef}
        className="w-9 h-9 rounded-full border border-blue-500/60 pointer-events-none fixed top-0 left-0 transition-transform duration-75 ease-out shadow-[0_0_12px_rgba(59,130,246,0.25)]"
        style={{ willChange: "transform, opacity" }}
      />

      {/* Pinpoint dot directly on cursor */}
      <div
        ref={dotRef}
        className="w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-gradient-to-r from-blue-600 to-pink-500 pointer-events-none fixed top-0 left-0 shadow-[0_0_6px_rgba(236,72,153,0.8)]"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
