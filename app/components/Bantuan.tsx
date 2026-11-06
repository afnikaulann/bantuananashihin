"use client";

import { useState } from "react";
import StarDecor from "./StarDecor";

const WHATSAPP_NUMBER = "6281958314275";

const PAKET_BANTUAN = [
  "RM 10.000",
  "RM 20.000",
  "RM 30.000",
  "RM 50.000",
  "RM 70.000",
  "RM 100.000",
];

export default function Bantuan() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telefon, setTelefon] = useState("");
  const [paket, setPaket] = useState(PAKET_BANTUAN[0]);
  const [namaBank, setNamaBank] = useState("");
  const [namaPemilik, setNamaPemilik] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !alamat.trim() || !telefon.trim() || !namaBank.trim() || !namaPemilik.trim()) return;

    const message = `*Permohonan Bantuan Uang Ghoib*\n\nNama: ${nama}\nNo. Telepon: ${telefon}\nAlamat: ${alamat}\nPaket Bantuan: ${paket}\nNama Bank: ${namaBank}\nNama Pemilik Rekening: ${namaPemilik}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="bantuan" className="w-full py-16 px-4 green-radial-bg islamic-star-bg flex flex-col items-center justify-center">
      <StarDecor />
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center text-[#fcfbf7] mb-2 tracking-wide">
          Bantuan Uang Ghoib
        </h2>
        <div className="islamic-divider">
          <span>۞</span>
        </div>

        <p className="text-center text-[#fcfbf7]/80 text-base mb-8 max-w-2xl mx-auto">
          Ustadz Hilmi Firdaus menyediakan bantuan uang ghoib untuk mereka yang membutuhkan.
          Silakan isi formulir di bawah.
        </p>

        {/* Formulir pendaftaran */}
        <div className="w-full max-w-md mx-auto card-islamic animate-glow-gold islamic-arch p-8 pt-12">
          <h3 className="text-xl font-bold text-[#fcfbf7] text-center mb-6">
            Formulir Permohonan Bantuan
          </h3>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#fcfbf7] font-medium mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-[#d4af37]/40 rounded-xl focus:outline-none focus:border-[#fde047] text-[#fcfbf7] bg-[#0a1931] placeholder:text-[#fcfbf7]/40"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div>
                <label className="block text-[#fcfbf7] font-medium mb-2">
                  No. Telepon
                </label>
                <input
                  type="tel"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-[#d4af37]/40 rounded-xl focus:outline-none focus:border-[#fde047] text-[#fcfbf7] bg-[#0a1931] placeholder:text-[#fcfbf7]/40"
                  placeholder="Contoh: 0812-3456-7890"
                />
              </div>

              <div>
                <label className="block text-[#fcfbf7] font-medium mb-2">
                  Alamat Lengkap
                </label>
                <textarea
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-[#d4af37]/40 rounded-xl focus:outline-none focus:border-[#fde047] text-[#fcfbf7] bg-[#0a1931] placeholder:text-[#fcfbf7]/40 resize-none"
                  placeholder="Masukkan alamat lengkap Anda"
                />
              </div>

              <div>
                <label className="block text-[#fcfbf7] font-medium mb-2">
                  Pilihan Paket Bantuan Uang
                </label>
                <select
                  value={paket}
                  onChange={(e) => setPaket(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#d4af37]/40 rounded-xl focus:outline-none focus:border-[#fde047] text-[#fde047] font-bold bg-[#0a1931] cursor-pointer"
                >
                  {PAKET_BANTUAN.map((p) => (
                    <option key={p} value={p} className="bg-[#0a1931] text-[#fcfbf7]">
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#fcfbf7] font-medium mb-2">
                  Nama Bank
                </label>
                <input
                  type="text"
                  value={namaBank}
                  onChange={(e) => setNamaBank(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-[#d4af37]/40 rounded-xl focus:outline-none focus:border-[#fde047] text-[#fcfbf7] bg-[#0a1931] placeholder:text-[#fcfbf7]/40"
                  placeholder="Contoh: Bank BRI / BCA / Mandiri"
                />
              </div>

              <div>
                <label className="block text-[#fcfbf7] font-medium mb-2">
                  Nama Pemilik Rekening
                </label>
                <input
                  type="text"
                  value={namaPemilik}
                  onChange={(e) => setNamaPemilik(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-[#d4af37]/40 rounded-xl focus:outline-none focus:border-[#fde047] text-[#fcfbf7] bg-[#0a1931] placeholder:text-[#fcfbf7]/40"
                  placeholder="Nama pemilik sesuai buku rekening"
                />
              </div>

              <button
                type="submit"
                className="btn-hover w-full gold-gradient font-bold py-3.5 rounded-xl shadow-gold mt-2 text-base"
              >
                Kirim Permohonan
              </button>

              <p className="text-center text-[#fcfbf7]/60 text-xs">
                Permohonan akan dikirim langsung ke WhatsApp admin
              </p>
            </form>
          ) : (
            <div className="text-center animate-fade-in py-6">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#fcfbf7] mb-2">
                Permohonan Terkirim!
              </h3>
              <p className="text-[#fcfbf7]/80 text-sm mb-6">
                Terima kasih {nama}. Permohonan Anda telah dikirim ke WhatsApp admin.
                Silakan tunggu kabar dari kami.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setNama("");
                  setAlamat("");
                  setTelefon("");
                  setPaket(PAKET_BANTUAN[0]);
                  setNamaBank("");
                  setNamaPemilik("");
                }}
                className="btn-hover gold-gradient font-bold py-3 px-8 rounded-xl"
              >
                Kirim Permohonan Lain
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
