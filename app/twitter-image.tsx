import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Sai Naw Main (Lwant) – Full-Stack Developer Portfolio";
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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1e293b 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1e3a5f 0%, transparent 50%)",
        }}
      >
        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Sai Naw Main
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: "28px",
              color: "#60a5fa",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Full-Stack Developer
          </p>

          {/* Tech stack */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            {["Next.js", "React", "TypeScript", "AI"].map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  padding: "6px 16px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
