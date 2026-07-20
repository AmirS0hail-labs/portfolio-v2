import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#08080b",
        backgroundImage:
          "radial-gradient(circle at 12% 18%, rgba(96,165,250,0.22), transparent 42%), radial-gradient(circle at 88% 85%, rgba(167,139,250,0.22), transparent 42%)",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 20,
            background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
          }}
        />
        <div
          style={{ fontSize: 30, color: "#a1a1aa" }}
        >{`${site.name} · ${site.location}`}</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.02,
          fontWeight: 700,
          fontSize: 116,
          letterSpacing: -4,
        }}
      >
        <span style={{ color: "#60a5fa" }}>Full-Stack</span>
        <span style={{ color: "#a78bfa" }}>Software</span>
        <span style={{ color: "#ededed" }}>Engineer</span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ fontSize: 28, color: "#a1a1aa" }}>
          Rails · React · Next.js · PostgreSQL · AWS
        </div>
        <div style={{ fontSize: 26, color: "#71717a" }}>
          linkedin.com/in/amir-sohail5
        </div>
      </div>
    </div>,
    { ...size },
  );
}
