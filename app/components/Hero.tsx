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
        <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-4 mb-8">
          <div className="card-islamic p-6 flex flex-col items-center justify-center text-center">
            <div className="text-3xl font-extrabold green-text">Ratusan Juta</div>
            <div className="text-[#fcfbf7]/90 text-sm mt-1 font-medium">Bantuan Disalurkan</div>
          </div>
          <div className="card-islamic p-6 flex flex-col items-center justify-center text-center">
            <div className="text-3xl font-extrabold gold-text">1.500+</div>
            <div className="text-[#fcfbf7]/90 text-sm mt-1 font-medium">Penerima Bantuan</div>
          </div>
        </div>

        {/* Tombol CTA WhatsApp & Telegram - Desain Ramping & Proporsional */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm mx-auto">
          <a
            href="https://wa.me/6281958314275"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 animate-pulse-green btn-hover gold-gradient font-bold text-sm px-5 py-2.5 rounded-full shadow-gold text-[#061124]"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-12.416c-5.514 0-10 4.486-10 10 0 1.761.459 3.418 1.26 4.862l-1.34 4.898 5.034-1.321c1.401.766 3.003 1.201 4.707 1.201 5.514 0 10-4.486 10-10s-4.486-10-10-10z" />
            </svg>
            <span>Bantuan WA</span>
          </a>

          <a
            href="https://t.me/Ustadzhilmifirdausii01"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 btn-hover bg-[#229ED9] hover:bg-[#1b8bc2] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md border border-sky-300/40 transition-transform hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            <span>Bantuan Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
