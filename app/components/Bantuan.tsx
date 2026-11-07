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
        {/* Tombol Bantuan WA & Telegram di Atas Judul Bantuan Uang Ghoib */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm mx-auto" style={{ marginBottom: "100px" }}>
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
