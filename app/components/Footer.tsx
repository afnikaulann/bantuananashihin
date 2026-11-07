export default function Footer() {
  return (
    <footer className="w-full bg-[#030814] pt-0 pb-8 px-4 islamic-pattern-bg flex flex-col items-center justify-center">
      {/* Siluet masjid */}
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-16 md:h-24 block mb-2"
        aria-hidden="true"
      >
        <g fill="rgba(253, 224, 71, 0.28)">
          {/* Menara kiri */}
          <rect x="70" y="70" width="22" height="130" />
          <path d="M81 30 A20 20 0 0 1 101 62 L61 62 A20 20 0 0 1 81 30 Z" />
          <rect x="60" y="86" width="42" height="7" />
          {/* Menara kanan */}
          <rect x="1108" y="70" width="22" height="130" />
          <path d="M1119 30 A20 20 0 0 1 1139 62 L1099 62 A20 20 0 0 1 1119 30 Z" />
          <rect x="1098" y="86" width="42" height="7" />
          {/* Kubah kecil kiri */}
          <path d="M230 200 L230 170 A42 42 0 0 1 314 170 L314 200 Z" />
          {/* Kubah kecil kanan */}
          <path d="M886 200 L886 170 A42 42 0 0 1 970 170 L970 200 Z" />
          {/* Kubah utama */}
          <path d="M440 200 L440 130 A80 80 0 0 1 600 42 A80 80 0 0 1 760 130 L760 200 Z" />
          {/* Bulan sabit di puncak kubah utama */}
          <path d="M600 4 A14 14 0 1 0 600 32 A11 11 0 1 1 600 4 Z" fill="rgba(253, 224, 71, 0.65)" />
          <rect x="597" y="30" width="6" height="16" />
          {/* Bangunan dasar */}
          <rect x="150" y="180" width="900" height="20" />
        </g>
      </svg>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#fcfbf7] mb-2 tracking-wide">
          Ustadz Hilmi Firdaus
        </h2>
        <p className="text-[#fde047] text-lg font-semibold mb-2">
          Bantuan Uang Ghoib
        </p>
        <p className="text-[#fcfbf7]/80 text-base mb-4">
          Berbagi Rezeki Ghoib Untuk Umat
        </p>
        <p className="arabic-text text-[#fde047] text-2xl mb-2 font-bold" dir="rtl">
          جَزَاكُمُ اللهُ خَيْرًا
        </p>
        <p className="text-[#fcfbf7]/80 text-sm mb-4">
          Jazakumullahu Khairan Katsiran
        </p>
        <div className="islamic-divider" style={{ marginBottom: "1rem" }}>
          <span style={{ color: "#fde047" }}>۞</span>
        </div>
        <p className="text-[#fcfbf7]/50 text-xs">
          &copy; 2026 Ustadz Hilmi Firdaus. Semua Hak Dilindungi.
        </p>
      </div>
    </footer>
  );
}
