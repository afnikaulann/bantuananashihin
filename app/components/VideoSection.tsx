"use client";

import { useEffect } from "react";

export default function VideoSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1a3c2a] mb-2">
          Cuplikan Video
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#0d6e4f] to-transparent mx-auto mb-4" />
        <p className="text-center text-[#1a3c2a]/60 mb-10">
          Saksikan kisah nyata penerima bantuan uang ghoib
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="tiktok-embed-container mx-auto" style={{ maxWidth: "100%", width: "100%" }}>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@derrysulaiman"
              data-video-id="7300000000000000000"
              style={{ maxWidth: "100%", width: "100%", height: "580px" }}
            >
              <section></section>
            </blockquote>
          </div>

          <div className="tiktok-embed-container mx-auto" style={{ maxWidth: "100%", width: "100%" }}>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@derrysulaiman"
              data-video-id="7300000000000000001"
              style={{ maxWidth: "100%", width: "100%", height: "580px" }}
            >
              <section></section>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
