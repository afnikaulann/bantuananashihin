"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "082116253174";

export default function Bantuan() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telefon, setTelefon] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !alamat.trim() || !telefon.trim()) return;

    const message = `*Permohonan Bantuan Uang Ghoib*\n\nNama: ${nama}\nAlamat: ${alamat}\nNo. Telepon: ${telefon}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="bantuan" className="py-16 px-4 green-radial-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1a3c2a] mb-2">
          Bantuan Uang Ghoib
        </h2>
        <div className="islamic-divider">
          <span>۞</span>
        </div>

        <p className="text-center text-[#1a3c2a]/70 text-base mb-8 max-w-2xl mx-auto">
          Ust. Derry Sulaiman menyediakan bantuan uang ghoib untuk mereka yang membutuhkan.
          Silakan isi formulir di bawah.
        </p>

        {/* Formulir pendaftaran */}
        <div className="max-w-md mx-auto card-islamic p-8">
          <h3 className="text-xl font-bold text-[#1a3c2a] text-center mb-6">
            Formulir Permohonan Bantuan
          </h3>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#1a3c2a] font-medium mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-[#0d6e4f]/30 rounded-xl focus:outline-none focus:border-[#0d6e4f] text-[#1a3c2a] bg-white"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div>
                <label className="block text-[#1a3c2a] font-medium mb-2">
                  No. Telepon
                </label>
                <input
                  type="tel"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-[#0d6e4f]/30 rounded-xl focus:outline-none focus:border-[#0d6e4f] text-[#1a3c2a] bg-white"
                  placeholder="Contoh: 0812-3456-7890"
                />
              </div>

              <div>
                <label className="block text-[#1a3c2a] font-medium mb-2">
                  Alamat Lengkap
                </label>
                <textarea
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-[#0d6e4f]/30 rounded-xl focus:outline-none focus:border-[#0d6e4f] text-[#1a3c2a] bg-white resize-none"
                  placeholder="Masukkan alamat lengkap Anda"
                />
              </div>

              <button
                type="submit"
                className="btn-hover w-full green-gradient text-white font-bold py-3 rounded-xl shadow-green"
              >
                Kirim Permohonan
              </button>

              <p className="text-center text-[#1a3c2a]/50 text-xs">
                Permohonan akan dikirim langsung ke WhatsApp admin
              </p>
            </form>
          ) : (
            <div className="text-center animate-fade-in py-6">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#1a3c2a] mb-2">
                Permohonan Terkirim!
              </h3>
              <p className="text-[#1a3c2a]/70 text-sm mb-6">
                Terima kasih {nama}. Permohonan Anda telah dikirim ke WhatsApp admin.
                Silakan tunggu kabar dari kami.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setNama("");
                  setAlamat("");
                  setTelefon("");
                }}
                className="btn-hover green-gradient text-white font-bold py-3 px-8 rounded-xl"
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
