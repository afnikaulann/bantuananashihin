"use client";

export default function Testimonials() {
  const penerima = [
    {
      img: "/img/0f3d77d8-a6d9-433f-bc9b-106fe6a2d571.jpeg",
      name: "Aisyah",
      prize: "Sembako",
      testimonial: "Alhamdulillah, bantuan sembako ini sangat membantu kebutuhan keluarga kami sehari-hari.",
      fallback: "A",
    },
    {
      img: "/img/5ceac103-d6a7-418f-bdd6-25c74178bb60.jpeg",
      name: "Hendra",
      prize: "Motor",
      testimonial: "Terima kasih banyak, motor ini sangat membantu aktivitas harian saya dan keluarga.",
      fallback: "H",
    },
    {
      img: "/img/6e565292-0a59-4aa9-9a2d-84cd30d97ecd.jpeg",
      name: "Siti",
      prize: "Bantuan Umroh",
      testimonial: "Terima kasih, bantuan umroh ini mewujudkan impian ibadah keluarga kami.",
      fallback: "S",
    },
    {
      img: "/img/7fc9c378-f34d-4339-846b-624c18ed6fb8.jpeg",
      name: "Fahmi",
      prize: "Uang Tunai",
      testimonial: "Alhamdulillah, bantuan tunai ini sangat membantu kebutuhan mendesak keluarga kami.",
      fallback: "F",
    },
  ];

  return (
    <section className="py-16 px-4 islamic-pattern-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1a3c2a] mb-2">
          Testimoni Penerima Bantuan
        </h2>
        <div className="islamic-divider">
          <span>۞</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {penerima.map((p, i) => (
            <div
              key={i}
              className="card-islamic hover:scale-105 transition-transform duration-300"
            >
              {/* Foto */}
              <div
                className="w-full aspect-square flex items-center justify-center islamic-arch overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1a8a5f15, #c9a22715)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="w-full h-full items-center justify-center text-5xl font-bold green-text"
                  style={{ display: "none" }}
                >
                  {p.fallback}
                </div>
              </div>

              {/* Keterangan */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-[#1a3c2a] text-sm md:text-base">
                  {p.name}
                </h3>
                <p className="text-[#1a3c2a]/70 text-sm mt-2">
                  {p.testimonial}
                </p>
                <div className="mt-3 inline-block green-gradient text-white text-xs font-medium px-3 py-1 rounded-full">
                  {p.prize}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
