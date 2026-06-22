"use client";
import { useRef, useEffect, useState } from "react";

const SETS = [
  { before: "/ba-1-before.webp", after: "/ba-1-after.webp", caption: "Bare, patchy front yard → lush, striped lawn." },
  { before: "/ba-2-before.webp", after: "/ba-2-after.webp", caption: "Drought-browned turf → deep green revival." },
  { before: "/ba-3-before.webp", after: "/ba-3-after.webp", caption: "New-construction dirt lot → established lawn." },
  { before: "/ba-4-before.webp", after: "/ba-4-after.webp", caption: "Grub-damaged backyard → smooth, healthy turf." },
  { before: "/ba-5-before.webp", after: "/ba-5-after.webp", caption: "Weedy & overgrown → clean-cut and striped." },
];

export default function BeforeAfter() {
  const frameRef = useRef(null);
  const afterRef = useRef(null);
  const handleRef = useRef(null);
  const dragging = useRef(false);
  const [index, setIndex] = useState(0);

  // Reset the reveal to the middle whenever the project set changes.
  useEffect(() => {
    if (afterRef.current) afterRef.current.style.clipPath = "inset(0 0 0 50%)";
    if (handleRef.current) handleRef.current.style.left = "50%";
  }, [index]);

  useEffect(() => {
    const frame = frameRef.current;
    const after = afterRef.current;
    const handle = handleRef.current;
    if (!frame || !after || !handle) return;

    const setPos = (clientX) => {
      const rect = frame.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(2, Math.min(98, pct));
      after.style.clipPath = `inset(0 0 0 ${pct}%)`;
      handle.style.left = pct + "%";
    };

    const start = (clientX) => { dragging.current = true; setPos(clientX); };
    const end = () => { dragging.current = false; };
    const move = (clientX) => { if (dragging.current) setPos(clientX); };

    const onMouseDown = (e) => start(e.clientX);
    const onMouseMove = (e) => move(e.clientX);
    const onTouchStart = (e) => start(e.touches[0].clientX);
    const onTouchMove = (e) => move(e.touches[0].clientX);

    frame.addEventListener("mousedown", onMouseDown);
    frame.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);

    return () => {
      frame.removeEventListener("mousedown", onMouseDown);
      frame.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchend", end);
    };
  }, []);

  const go = (dir) => setIndex((i) => (i + dir + SETS.length) % SETS.length);
  const set = SETS[index];

  return (
    <div style={{ maxWidth: "900px", margin: "30px auto 0" }}>
      <div style={{ position: "relative" }}>
        <div className="ba-frame" ref={frameRef}>
          <div
            className="ba-layer ba-before"
            style={{ backgroundImage: `url(${set.before})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <span className="ba-label">Before</span>
          </div>
          <div
            className="ba-layer ba-after"
            ref={afterRef}
            style={{ backgroundImage: `url(${set.after})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <span className="ba-label">After</span>
          </div>
          <div className="ba-handle" ref={handleRef}>
            <div className="ba-knob">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Project navigation */}
        <button className="ba-nav ba-nav-prev" onClick={() => go(-1)} aria-label="Previous project" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="ba-nav ba-nav-next" onClick={() => go(1)} aria-label="Next project" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <p style={{ textAlign: "center", marginTop: "16px", fontSize: "14px", color: "rgba(28,27,23,0.6)" }}>
        {set.caption}
      </p>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "14px" }}>
        {SETS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Project ${i + 1} of ${SETS.length}`}
            type="button"
            style={{
              width: i === index ? "24px" : "8px",
              height: "8px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all .25s ease",
              background: i === index ? "#1f3d2b" : "rgba(31,61,43,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
