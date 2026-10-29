"use client";

import { useCallback, useRef, useState } from "react";

export default function BeforeAfter() {
  const [split, setSplit] = useState(52);
  const stageRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (event) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const onPointerMove = (event) => {
    if (!dragging.current) return;
    updateFromClientX(event.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div className="svc-visual svc-ba svc-ba-photos">
      <div
        ref={stageRef}
        className="svc-ba-stage"
        role="slider"
        tabIndex={0}
        aria-label="Comparer avant et après la refonte"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(split)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") setSplit((value) => Math.max(0, value - 5));
          if (event.key === "ArrowRight") setSplit((value) => Math.min(100, value + 5));
        }}
      >
        <img
          className="svc-ba-img svc-ba-img-after"
          src="/projects/privateevents-apres.webp"
          alt=""
          draggable={false}
        />
        <div
          className="svc-ba-before-wrap"
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
        >
          <img
            className="svc-ba-img svc-ba-img-before"
            src="/projects/privateevents-avant.webp"
            alt=""
            draggable={false}
          />
        </div>
        <span className="svc-ba-badge svc-ba-badge-before">Avant</span>
        <span className="svc-ba-badge svc-ba-badge-after">Après</span>
        <div className="svc-ba-line" style={{ left: `${split}%` }} aria-hidden="true">
          <span className="svc-ba-handle" />
        </div>
      </div>
    </div>
  );
}
