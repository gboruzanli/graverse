export function GraverseMark({ compact = false, size: sizeOverride }: { compact?: boolean; size?: number }) {
  const size = sizeOverride ?? (compact ? 300 : 42);

  return (
    <span className="mark" aria-label="Graverse Lab">
      <span
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: "#000",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="/brand/graverse-logo-spiral-v5.jpeg"
          alt=""
          aria-hidden="true"
          width={size}
          height={size}
          style={{ width: "88%", height: "88%", objectFit: "contain" }}
        />
      </span>
    </span>
  );
}
