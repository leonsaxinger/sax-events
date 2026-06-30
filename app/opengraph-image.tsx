import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "SAX-Events — Next Generation Partying";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "app/icon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0B",
          backgroundImage:
            "radial-gradient(ellipse 70% 70% at 50% 35%, rgba(224,33,138,0.45), transparent 70%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={180} height={180} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#FAFAFA",
              lineHeight: 1,
            }}
          >
            NEXT GENERATION
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#E0218A",
              lineHeight: 1.05,
            }}
          >
            PARTYING
          </div>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#A1A1AA",
            letterSpacing: 2,
          }}
        >
          SAX-EVENTS · sax-events.at
        </div>
      </div>
    ),
    { ...size }
  );
}
