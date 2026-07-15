import { ImageResponse } from "next/og";

export const alt =
  "TAXCCOUNTS — Tax & Accounting Professionals for NRIs & Cross-Border Tax";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#02172A",
          backgroundImage:
            "radial-gradient(ellipse at top left, rgba(11,91,160,0.4), transparent 55%), radial-gradient(ellipse at bottom right, rgba(197,165,90,0.18), transparent 60%)",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 22,
            letterSpacing: "0.3em",
            color: "#C5A55A",
            textTransform: "uppercase",
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
          }}
        >
          <div style={{ width: 48, height: 2, backgroundColor: "#C5A55A" }} />
          Tax & Accounting Professionals · Cross-Border
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            fontFamily: "Arial, sans-serif",
            display: "flex",
          }}
        >
          TA
          <span style={{ color: "#E8D5A0", fontStyle: "italic" }}>X</span>
          CCOUNTS
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: "rgba(255,255,255,0.75)",
            fontStyle: "italic",
            display: "flex",
          }}
        >
          Empowering Businesses Beyond Borders.
        </div>

        <div
          style={{
            marginTop: 48,
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            fontFamily: "Arial, sans-serif",
            display: "flex",
          }}
        >
          India · USA · UK · Canada · UAE · Australia · New Zealand · Singapore
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
