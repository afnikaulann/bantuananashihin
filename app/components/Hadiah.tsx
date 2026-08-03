export default function Hadiah() {
  const hadiah = [
    {
      emoji: "💰",
      label: "Uang Tunai",
      desc: "Bantuan uang tunai langsung untuk kebutuhan mendesak Anda",
      color: "from-[#0d6e4f] to-[#1a8a5f]",
    },
    {
      emoji: "🏍️",
      label: "Motor",
      desc: "Kendaraan untuk memudahkan mobilitas dan aktivitas harian",
      color: "from-[#c9a227] to-[#e0b840]",
    },
    {
      emoji: "🕋",
      label: "Hadiah Umroh",
      desc: "Paket ibadah Umrah untuk Anda yang berhaji ke Baitullah",
      color: "from-[#0d6e4f] to-[#1a8a5f]",
    },
    {
      emoji: "📦",
      label: "Sembako",
      desc: "Paket kebutuhan pokok untuk keluarga Anda setiap bulan",
      color: "from-[#c9a227] to-[#e0b840]",
    },
  ];

  return (
    <section className="py-16 px-4 islamic-pattern-bg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1a3c2a] mb-2">
          Hadiah Bantuan
        </h2>
        <div className="islamic-divider">
          <span>۞</span>
        </div>
        <p className="text-center text-[#1a3c2a]/70 text-base mb-10 max-w-2xl mx-auto">
          Berbagai bentuk bantuan yang disediakan oleh Ust. Derry Sulaiman untuk mereka yang membutuhkan
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {hadiah.map((h, i) => (
            <div
              key={i}
              className="group card-islamic hover:scale-105 transition-all duration-300"
            >
              {/* Header dengan arch Islamic */}
              <div className={`bg-gradient-to-br ${h.color} py-8 flex items-center justify-center islamic-arch`}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {h.emoji}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 text-center">
                <h3 className="font-bold text-[#1a3c2a] text-base md:text-lg mb-2">
                  {h.label}
                </h3>
                <p className="text-[#1a3c2a]/60 text-xs md:text-sm leading-relaxed">
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
            className="btn-hover animate-pulse-green inline-block green-gradient text-white font-bold text-lg px-10 py-4 rounded-full shadow-green"
          >
            Minta Bantuan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
