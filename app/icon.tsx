import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
        color: "#08080b",
        fontSize: 17,
        fontWeight: 700,
        letterSpacing: -1,
      }}
    >
      AS
    </div>,
    { ...size },
  );
}
