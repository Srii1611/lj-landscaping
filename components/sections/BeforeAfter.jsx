"use client";
import { useRef, useEffect } from "react";

export default function BeforeAfter() {
  const frameRef = useRef(null);
  const afterRef = useRef(null);
  const handleRef = useRef(null);
  const dragging = useRef(false);

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

  return (
    <div style={{ maxWidth: "760px", margin: "30px auto 0" }}>
      <div className="ba-frame" ref={frameRef}>
        <div className="ba-layer ba-before">
          <span className="ba-label">Before</span>
        </div>
        <div className="ba-layer ba-after" ref={afterRef}>
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
      <p style={{ textAlign: "center", marginTop: "16px", fontSize: "14px", color: "rgba(28,27,23,0.6)" }}>
        Patchy, weedy turf &rarr; lush, striped, healthy lawn.
      </p>
    </div>
  );
}
