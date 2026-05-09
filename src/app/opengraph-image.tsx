import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Powerflow Chiropractic — #1 Chiropractor in Mississauga";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          background: "#1a1a1a",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Top brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#b73026",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 900,
            }}
          >
            P
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "0.04em" }}>
              POWERFLOW
            </div>
            <div style={{ fontSize: 13, color: "#f2a93b", fontWeight: 700, letterSpacing: "0.32em", marginTop: 4 }}>
              CHIROPRACTIC
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 28,
              color: "#f2a93b",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            VOTED #1 IN MISSISSAUGA · 2019–2026
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "white",
            }}
          >
            You don&apos;t have to{" "}
            <span style={{ color: "#f2a93b" }}>live in pain.</span>
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.75)", lineHeight: 1.3, maxWidth: 950 }}>
            Free spinal check-up with Dr. Sandy Bhasin — 24 years of practice, 300,000+ adjustments in Mississauga.
          </div>
        </div>

        {/* Decorative blur */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 380,
            height: 380,
            borderRadius: 999,
            background: "#b73026",
            opacity: 0.35,
            filter: "blur(80px)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
