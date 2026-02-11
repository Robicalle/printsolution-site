"use client";

import { useEffect } from "react";

const COLORS = [
  "#06B6D4", "#0BA5C4", "#1094B4", "#1E83A4",
  "#3B6E9E", "#6A4E9A", "#9B2F96", "#C41E8C",
  "#D42A6E", "#E44B4B", "#EE7A2A", "#F5A623",
  "#F7C018", "#F9DA0E", "#FDE700", "#FFE500",
];

export default function CmykCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Create cursor dot
    const dot = document.createElement("div");
    Object.assign(dot.style, {
      position: "fixed", width: "14px", height: "14px",
      background: "#1e3a5f", borderRadius: "50%",
      pointerEvents: "none", zIndex: "99999",
      boxShadow: "0 0 8px rgba(30,58,95,0.5)",
      transition: "opacity 0.3s", opacity: "0",
    });
    document.body.appendChild(dot);

    // Create trail dots
    const trails: { el: HTMLDivElement; x: number; y: number }[] = [];
    COLORS.forEach((color) => {
      const t = document.createElement("div");
      Object.assign(t.style, {
        position: "fixed", width: "10px", height: "10px",
        background: color, borderRadius: "50%",
        pointerEvents: "none", zIndex: "99998",
        boxShadow: `0 0 6px ${color}80`,
        transition: "opacity 0.3s", opacity: "0",
      });
      document.body.appendChild(t);
      trails.push({ el: t, x: 0, y: 0 });
    });

    let mx = 0, my = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.opacity = "1";
      trails.forEach((t) => (t.el.style.opacity = "1"));
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      trails.forEach((t) => (t.el.style.opacity = "0"));
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    // Hide default cursor
    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    let raf: number;
    const animate = () => {
      dot.style.left = mx - 7 + "px";
      dot.style.top = my - 7 + "px";

      let x = mx, y = my;
      trails.forEach((t, i) => {
        const speed = 0.35 - i * 0.018;
        t.x += (x - t.x) * speed;
        t.y += (y - t.y) * speed;
        const size = 10 - i * 0.4;
        t.el.style.left = t.x - size / 2 + "px";
        t.el.style.top = t.y - size / 2 + "px";
        t.el.style.width = size + "px";
        t.el.style.height = size + "px";
        x = t.x;
        y = t.y;
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      style.remove();
      dot.remove();
      trails.forEach((t) => t.el.remove());
    };
  }, []);

  return null;
}
