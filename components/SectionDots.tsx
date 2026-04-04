"use client";

type Props = {
  total: number;
  current: number;
  onDotClick?: (idx: number) => void;
  color?: string;
  activeColor?: string;
  position?: "right" | "bottom";
};

/**
 * SectionDots
 *
 * Dot-based section indicator. Click a dot to jump directly to that section.
 * Can be placed on the right side (vertical stack) or bottom (horizontal row).
 */
export default function SectionDots({
  total,
  current,
  onDotClick,
  color = "rgba(255,255,255,0.3)",
  activeColor = "rgba(255,255,255,1)",
  position = "right",
}: Props) {
  const isVertical = position === "right";

  return (
    <div
      aria-label="Section navigation"
      style={{
        position: "absolute",
        zIndex: 30,
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        ...(isVertical
          ? { right: 24, top: "50%", transform: "translateY(-50%)" }
          : { bottom: 28, left: "50%", transform: "translateX(-50%)" }),
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          aria-label={`Go to section ${i + 1}`}
          onClick={() => onDotClick?.(i)}
          style={{
            width: i === current ? 8 : 6,
            height: i === current ? 8 : 6,
            borderRadius: "50%",
            border: "none",
            padding: 0,
            cursor: onDotClick ? "pointer" : "default",
            backgroundColor: i === current ? activeColor : color,
            transition: "all 0.3s ease",
            outline: "none",
          }}
        />
      ))}
    </div>
  );
}