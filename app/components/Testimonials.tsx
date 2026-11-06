"use client";

import Image from "next/image";
import StarDecor from "./StarDecor";
import testi1 from "../../img/testi1.png";
import testi2 from "../../img/testi2.png";
import testi3 from "../../img/testi3.png";
import testi4 from "../../img/testi4.png";

export default function Testimonials() {
  const penerima = [
    {
      img: testi1,
      name: "Siti",
      prize: "Uang Tunai",
      testimonial: "Alhamdulillah, bantuan uang tunai ini sangat membantu kebutuhan keluarga kami sehari-hari.",
    },
    {
      img: testi2,
      name: "Nurhalisa",
      prize: "Uang Tunai",
      testimonial: "Terima kasih banyak, bantuan uang tunai ini sangat membantu untuk membayar uang kuliah saya",
    },
    {
      img: testi3,
      name: "Amir",
      prize: "Uang Tunai",
      testimonial: "Alhamdulillah, bantuan uang tunai ini sangat berkah dan bermanfaat untuk modal usaha saya.",
    },
    {
      img: testi4,
      name: "Fahmi",
      prize: "Uang Tunai",
      testimonial: "Bantuan uang tunai ini sangat membantu ekonomi saya",
    },
  ];

  return (
    <section className="w-full py-16 px-4 islamic-lattice-bg flex flex-col items-center justify-center">
      <StarDecor />
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center text-[#fcfbf7] mb-2 tracking-wide">
          Testimoni Penerima Bantuan
        </h2>
        <div className="islamic-divider">
          <span>۞</span>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {penerima.map((p, i) => (
            <div
              key={i}
              className="card-islamic hover:scale-105 transition-transform duration-300"
            >
              {/* Foto berbentuk kotak */}
              <div
                className="relative w-full aspect-square flex items-center justify-center rounded-lg border border-[#d4af37]/35 overflow-hidden bg-[#0a1931]"
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Keterangan */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-[#fcfbf7] text-sm md:text-base">
                  {p.name}
                </h3>
                <p className="text-[#fcfbf7]/80 text-sm mt-2 leading-relaxed">
                  {p.testimonial}
                </p>
                <div className="mt-3 inline-block gold-gradient text-xs font-bold px-3 py-1 rounded-full shadow-sm text-[#061124]">
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
