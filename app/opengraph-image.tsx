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
        background: "#151A12",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          borderBottom: "2px solid #B5C1A8",
          paddingBottom: 24,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 20,
            border: "1px solid #EDE4D42E",
            background: "#4A3F34",
          }}
        />
        <div
          style={{ fontSize: 30, color: "#B5C1A8" }}
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
        <span style={{ color: "#D17650" }}>Full-Stack</span>
        <span style={{ color: "#EDE4D4" }}>Software</span>
        <span style={{ color: "#EDE4D4" }}>Engineer</span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ fontSize: 28, color: "#EDE4D4" }}>
          Rails · React · Next.js · PostgreSQL · AWS
        </div>
        <div style={{ fontSize: 26, color: "#B5C1A8" }}>
          linkedin.com/in/amir-sohail5
        </div>
      </div>
    </div>,
    { ...size },
  );
}
