import StarDecor from "./StarDecor";

export default function Hadiah() {
  const hadiah = [
    {
      emoji: "💰",
      label: "Uang Tunai",
      desc: "Bantuan uang tunai langsung untuk kebutuhan mendesak Anda",
      color: "from-[#064e3b] to-[#059669]",
    },
    {
      emoji: "🏍️",
      label: "Motor",
      desc: "Kendaraan untuk memudahkan mobilitas dan aktivitas harian",
      color: "from-[#b48608] to-[#fde047]",
    },
    {
      emoji: "🕋",
      label: "Hadiah Umroh",
      desc: "Paket ibadah Umrah untuk Anda yang berhaji ke Baitullah",
      color: "from-[#064e3b] to-[#059669]",
    },
    {
      emoji: "📦",
      label: "Sembako",
      desc: "Paket kebutuhan pokok untuk keluarga Anda setiap bulan",
      color: "from-[#b48608] to-[#fde047]",
    },
  ];

  return (
    <section className="w-full py-16 px-4 islamic-pattern-bg flex flex-col items-center justify-center">
      <StarDecor />
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center text-[#fcfbf7] mb-2 tracking-wide">
          Hadiah Bantuan
        </h2>
        <div className="islamic-divider">
          <span>۞</span>
        </div>
        <p className="text-center text-[#fcfbf7]/80 text-base mb-10 max-w-2xl mx-auto">
          Berbagai bentuk bantuan yang disediakan oleh Ustadz Hilmi Firdaus untuk mereka yang membutuhkan
        </p>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {hadiah.map((h, i) => (
            <div
              key={i}
              className="group card-islamic hover:scale-105 transition-all duration-300"
            >
              {/* Header dengan arch Islamic */}
              <div className={`bg-gradient-to-br ${h.color} py-8 flex items-center justify-center islamic-arch`}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                  {h.emoji}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 text-center">
                <h3 className="font-bold text-[#fcfbf7] text-base md:text-lg mb-2">
                  {h.label}
                </h3>
                <p className="text-[#fcfbf7]/70 text-xs md:text-sm leading-relaxed">
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#bantuan"
            className="btn-hover animate-pulse-green inline-block gold-gradient font-bold text-lg px-10 py-4 rounded-full shadow-gold"
          >
            Minta Bantuan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
