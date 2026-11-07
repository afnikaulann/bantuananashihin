"use client";

import Image from "next/image";
import logoImage from "../../img/logo.jpeg";
import StarDecor from "./StarDecor";

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full m-0 p-0 pt-0 pb-16 px-4 green-radial-bg islamic-star-bg flex flex-col items-center justify-start">
      {/* Background Decor Container - Absolute so it NEVER takes document flow space */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Ornamen bintang 8 raksasa berputar pelan di tengah latar */}
        <div
          className="opacity-[0.09]"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          <svg
            className="animate-slow-spin"
            width="480"
            height="480"
            viewBox="0 0 120 120"
            fill="none"
            stroke="#fde047"
            strokeWidth="0.8"
          >
            <path d="M60 4 L74 46 L116 60 L74 74 L60 116 L46 74 L4 60 L46 46 Z" />
            <path d="M60 20 L68 52 L100 60 L68 68 L60 100 L52 68 L20 60 L52 52 Z" />
            <circle cx="60" cy="60" r="14" />
          </svg>
        </div>

        {/* Bintang berkelip */}
        <StarDecor />
      </div>

      {/* Konten Utama Hero - Tepat di Tengah Horizontal, Mentok Paling Atas */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-start text-center pt-2">
        {/* Bismillah tepat di bagian paling atas mentok */}
        <p className="arabic-text text-3xl md:text-5xl text-[#fde047] font-bold drop-shadow m-0 p-0 leading-tight" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        {/* Foto profil dengan lingkaran hijau-emas berputar tepat di tengah */}
        <div className="relative w-[180px] h-[180px] mx-auto mt-6 mb-8 flex items-center justify-center">
          {/* Lingkaran berputar di luar */}
          <div
            className="animate-rotate-ring absolute -inset-2 rounded-full pointer-events-none"
            style={{
              background: "conic-gradient(from 0deg, #1e3a8a, #d4af37, #38bdf8, #fde047, #1e3a8a)",
            }}
          />
          {/* Foto profil */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#061124] shadow-gold bg-[#0a1931]">
            <Image
              src={logoImage}
              alt="Ustadz Hilmi Firdaus"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Nama dengan badge verified */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <h1 className="text-3xl md:text-4xl font-extrabold gold-shimmer tracking-wide">
            Ustadz Hilmi Firdaus
          </h1>
          <span className="verified-badge">✓</span>
        </div>

        {/* Garis emas dengan BANTUAN UANG GHOIB */}
        <div className="divider-green w-full max-w-md mx-auto mb-4 flex items-center justify-center">
          <span className="text-[#fde047] font-bold text-base md:text-lg tracking-widest uppercase">
            Bantuan Uang Ghoib
          </span>
        </div>

        {/* Tagline */}
        <p className="text-[#fcfbf7] text-xl md:text-2xl font-semibold mb-6">
          Berbagi Rezeki Ghoib Untuk Umat
        </p>

        {/* Ayat Al-Qur'an dalam bingkai emas */}
        <div className="w-full max-w-2xl mx-auto card-islamic animate-glow-gold p-6 md:p-8 mb-8 flex flex-col items-center text-center">
          <p className="arabic-text text-xl md:text-2xl text-[#7dd3fc] leading-relaxed mb-3 text-center" dir="rtl">
            <span className="text-[#fde047]">﴿</span>
            {" "}مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ وَاللَّهُ يُضَاعِفُ لِمَنْ يَشَاءُ وَاللَّهُ وَاسِعٌ عَلِيمٌ{" "}
            <span className="text-[#fde047]">﴾</span>
          </p>
          <p className="text-[#fcfbf7]/85 text-sm md:text-base italic mb-3 text-center leading-relaxed">
            "Perumpamaan orang yang menginfakkan hartanya di jalan Allah seperti sebutir biji yang menumbuhkan tujuh tangkai, pada setiap tangkai ada seratus biji. Allah melipatgandakan bagi siapa yang Dia kehendaki, dan Allah Maha Luas lagi Maha Mengetahui."
          </p>
          <p className="text-[#fde047] text-xs md:text-sm font-bold tracking-widest text-center">
            — QS. Al-Baqarah: 261
          </p>
        </div>

        {/* Kartu statistik - Rapi di Tengah */}
        <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-4">
          <div className="card-islamic p-6 flex flex-col items-center justify-center text-center">
            <div className="text-3xl font-extrabold green-text">Ratusan Juta</div>
            <div className="text-[#fcfbf7]/90 text-sm mt-1 font-medium">Bantuan Disalurkan</div>
          </div>
          <div className="card-islamic p-6 flex flex-col items-center justify-center text-center">
            <div className="text-3xl font-extrabold gold-text">1.500+</div>
            <div className="text-[#fcfbf7]/90 text-sm mt-1 font-medium">Penerima Bantuan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
