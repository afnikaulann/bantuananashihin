"use client";

import { useEffect, useState } from "react";

export default function Confetti() {
  const [pieces, setPieces] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
    color: string;
    size: number;
  }>>([]);

  useEffect(() => {
    const colors = ["#0d6e4f", "#1a8a5f", "#c9a227", "#e0b840", "#094d36", "#d4af37"];
    const newPieces: Array<{
      id: number;
      left: number;
      delay: number;
      duration: number;
      color: string;
      size: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 8,
      });
    }

    setPieces(newPieces);

    const timer = setTimeout(() => {
      setPieces([]);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size * 1.4}px`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            borderRadius: "2px",
          }}
        />
      ))}
    </>
  );
}
