"use client";

import Image from "next/image";
import fotoImage from "../../img/foto.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 px-4 green-radial-bg">
      <div className="max-w-4xl mx-auto text-center">
        {/* Foto profil dengan lingkaran hijau-emas berputar */}
        <div className="relative inline-block mb-6">
          {/* Lingkaran berputar */}
          <div className="animate-rotate-ring absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #0d6e4f, #c9a227, #1a8a5f, #e0b840, #0d6e4f)",
              padding: "6px",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
            }}
          >
            <div className="w-full h-full rounded-full bg-white" />
          </div>

          {/* Foto profil */}
          <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-white shadow-green"
            style={{
              background: "linear-gradient(135deg, #1a8a5f, #0d6e4f)",
            }}
          >
            <Image
              src={fotoImage}
              alt="Ust. Derry"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Nama dengan badge verified */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a3c2a]">
            Ust. Derry Sulaiman
          </h1>
          <span className="verified-badge">✓</span>
        </div>

        {/* Garis hijau dengan BANTUAN UANG GHOIB */}
        <div className="divider-green max-w-md mx-auto mb-4">
          <span className="text-[#0d6e4f] font-bold text-base md:text-lg tracking-widest">
            BANTUAN UANG GHOIB
          </span>
        </div>

        {/* Tagline */}
        <p className="text-[#1a3c2a] text-xl md:text-2xl font-medium mb-2">
          Berbagi Rezeki Ghoib Untuk Umat
        </p>

        {/* Ayat kecil */}
        <p className="text-[#0d6e4f]/70 text-sm md:text-base italic mb-8 max-w-xl mx-auto">
          "Barangsiapa yang menolong saudaranya, Allah akan menolongnya di dunia dan akhirat"
        </p>

        {/* Kartu statistik */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          <div className="card-islamic p-6">
            <div className="text-3xl font-bold green-text">Ratusan Juta</div>
            <div className="text-[#1a3c2a] text-sm mt-1">Bantuan Disalurkan</div>
          </div>
          <div className="card-islamic p-6">
            <div className="text-3xl font-bold gold-text">1.500+</div>
            <div className="text-[#1a3c2a] text-sm mt-1">Penerima Bantuan</div>
          </div>
        </div>

        {/* Tombol CTA dengan animasi pulse */}
        <a
          href="https://wa.me/6282116253174"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-pulse-green btn-hover inline-block green-gradient text-white font-bold text-lg px-10 py-4 rounded-full shadow-green"
        >
          Minta Bantuan Sekarang
        </a>
      </div>
    </section>
  );
}
