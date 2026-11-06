"use client";

import { useState } from "react";
import StarDecor from "./StarDecor";

const QUESTIONS = [
  {
    question: "Surat pertama dalam Al-Qur'an adalah...",
    options: [
      "Al-Fatihah",
      "Al-Baqarah",
      "Al-Ikhlas",
      "An-Nas",
    ],
    correct: 0,
    explanation: "Surat Al-Fatihah adalah surat pembuka Al-Qur'an yang wajib dibaca dalam setiap rakaat shalat.",
  },
  {
    question: "Berapa jumlah rukun Islam?",
    options: [
      "3",
      "4",
      "5",
      "6",
    ],
    correct: 2,
    explanation: "Rukun Islam ada 5: Syahadat, Shalat, Zakat, Puasa Ramadhan, dan Haji bagi yang mampu.",
  },
  {
    question: "Umat Islam wajib berpuasa di bulan...",
    options: [
      "Rajab",
      "Sya'ban",
      "Ramadhan",
      "Muharram",
    ],
    correct: 2,
    explanation: "Puasa wajib dilaksanakan sepanjang bulan Ramadhan, bulan kesembilan dalam kalender Hijriah.",
  },
  {
    question: "Berapa jumlah juz dalam Al-Qur'an?",
    options: [
      "20 juz",
      "25 juz",
      "30 juz",
      "40 juz",
    ],
    correct: 2,
    explanation: "Al-Qur'an terdiri dari 30 juz yang berisi 114 surat.",
  },
  {
    question: "Zakat fitrah dibayarkan pada bulan...",
    options: [
      "Ramadhan",
      "Muharram",
      "Zulhijah",
      "Rajab",
    ],
    correct: 0,
    explanation: "Zakat fitrah dibayarkan pada bulan Ramadhan, paling lambat sebelum khutbah shalat Idul Fitri.",
  },
];

const WHATSAPP_NUMBER = "6281958314275";

export default function Kuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    if (showFeedback) return;
    setSelected(optionIndex);
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    const newAnswers = [...answers, selected!];
    setAnswers(newAnswers);
    setSelected(null);
    setShowFeedback(false);

    if (currentQ + 1 < QUESTIONS.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setShowFeedback(false);
    setFinished(false);
  };

  const score = answers.filter((a, i) => a === QUESTIONS[i].correct).length;
  const scoreLabel =
    score === 5 ? "Sempurna! 🎉" : score >= 3 ? "Tidak Buruk! 👍" : "Jangan Menyerah! 💪";

  const sendWhatsApp = () => {
    const answerSummary = QUESTIONS.map((q, i) => {
      const userAnswer = answers[i] !== undefined ? answers[i] : -1;
      const isCorrect = userAnswer === q.correct;
      return `${i + 1}. ${q.question}\n   Jawaban: ${userAnswer >= 0 ? q.options[userAnswer] : "Tidak dijawab"} - ${isCorrect ? "BENAR" : "SALAH"}`;
    }).join("\n\n");

    const message = `*Ustadz Hilmi Firdaus - Hasil Kuis Islami*\n\nSkor: ${score}/${QUESTIONS.length}\n${scoreLabel}\n\n${answerSummary}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (finished) {
    return (
      <section className="w-full py-16 px-4 islamic-pattern-bg flex flex-col items-center justify-center">
        <StarDecor />
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center text-[#fcfbf7] mb-2 tracking-wide">
            Kuis Islami
          </h2>
          <div className="islamic-divider">
            <span>۞</span>
          </div>

          <div className="w-full card-islamic p-8 text-center">
            <h3 className="text-2xl font-bold text-[#fcfbf7] mb-4">Hasil Kuis</h3>
            <div className="text-5xl font-extrabold green-text mb-2">
              {score}/{QUESTIONS.length}
            </div>
            <p className="text-xl text-[#fcfbf7] mb-6 font-semibold">{scoreLabel}</p>

            {/* Rincian jawaban */}
            <div className="text-left space-y-3 mb-6">
              {QUESTIONS.map((q, i) => {
                const userAnswer = answers[i] !== undefined ? answers[i] : -1;
                const isCorrect = userAnswer === q.correct;
                return (
                  <div
                    key={i}
                    className="border border-[#d4af37]/30 rounded-xl p-3 bg-[#052e22]/60"
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded ${
                          isCorrect
                            ? "bg-[#059669]/40 text-[#6ee7b7]"
                            : "bg-red-900/40 text-red-300"
                        }`}
                      >
                        {isCorrect ? "BENAR" : "SALAH"}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm text-[#fcfbf7] font-medium">
                          {i + 1}. {q.question}
                        </p>
                        <p className="text-xs text-[#fcfbf7]/70 mt-1">
                          Jawaban Anda: {userAnswer >= 0 ? q.options[userAnswer] : "Tidak dijawab"}
                        </p>
                        {!isCorrect && (
                          <p className="text-xs text-[#6ee7b7] mt-1 font-semibold">
                            Jawaban benar: {q.options[q.correct]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Disclaimer */}
            <div className="bg-[#059669]/20 border border-[#d4af37]/35 rounded-xl p-4 mb-6">
              <p className="text-[#fcfbf7] text-sm font-medium">
                📸 Silakan screenshot gambar ini sebagai bukti
              </p>
            </div>

            {/* Tombol WhatsApp */}
            <button
              onClick={sendWhatsApp}
              className="btn-hover w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 mb-4 shadow-lg text-base"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Kirim Screenshot ke Admin
            </button>

            {/* Tombol ulangi */}
            <button
              onClick={restartQuiz}
              className="btn-hover w-full gold-gradient font-bold py-3.5 rounded-xl shadow-gold text-base"
            >
              Ulangi Kuis
            </button>
          </div>
        </div>
      </section>
    );
  }

  const q = QUESTIONS[currentQ];
  const progress = ((currentQ + 1) / QUESTIONS.length) * 100;

  return (
    <section className="w-full py-16 px-4 islamic-pattern-bg flex flex-col items-center justify-center">
      <StarDecor />
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center text-[#fcfbf7] mb-2 tracking-wide">
          Kuis Islami
        </h2>
        <div className="islamic-divider">
          <span>۞</span>
        </div>

        <div className="w-full card-islamic p-8">
          {/* Bar progres */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#fcfbf7] font-medium text-sm">
                Soal {currentQ + 1} dari {QUESTIONS.length}
              </span>
              <span className="text-[#fde047] font-bold text-sm">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-[#d4af37]/25 rounded-full h-3">
              <div
                className="gold-gradient h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Pertanyaan */}
          <h3 className="text-xl font-bold text-[#fcfbf7] mb-6">
            {q.question}
          </h3>

          {/* Pilihan jawaban */}
          <div className="space-y-3">
            {q.options.map((option, i) => {
              let className = "quiz-option border-2 border-[#d4af37]/40 rounded-xl p-4 text-[#fcfbf7] bg-[#0a1931]";

              if (showFeedback) {
                if (i === q.correct) {
                  className = "border-2 border-[#38bdf8] rounded-xl p-4 text-[#fcfbf7] bg-[#1e40af]/40";
                } else if (i === selected) {
                  className = "border-2 border-red-400 rounded-xl p-4 text-[#fcfbf7] bg-red-900/35";
                } else {
                  className = "border-2 border-[#d4af37]/15 rounded-xl p-4 text-[#fcfbf7]/40 bg-[#0a1931]/50";
                }
              }

              return (
                <div
                  key={i}
                  className={className}
                  onClick={() => handleAnswer(i)}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full border-2 border-[#fde047] flex items-center justify-center text-sm font-bold text-[#fde047]">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1 font-medium">{option}</span>
                    {showFeedback && i === q.correct && (
                      <span className="text-[#34d399] font-bold text-lg">✓</span>
                    )}
                    {showFeedback && i === selected && i !== q.correct && (
                      <span className="text-red-400 font-bold text-lg">✗</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Umpan balik */}
          {showFeedback && (
            <div className="mt-6 animate-fade-in">
              <div
                className={`rounded-xl p-4 mb-4 ${
                  selected === q.correct
                    ? "bg-[#059669]/25 border border-[#34d399]/50"
                    : "bg-red-900/25 border border-red-400/50"
                }`}
              >
                <p className={`font-bold mb-1 ${selected === q.correct ? "text-[#34d399]" : "text-red-400"}`}>
                  {selected === q.correct ? "BENAR! 🎉" : "SALAH! 😅"}
                </p>
                <p className="text-[#fcfbf7] text-sm leading-relaxed">{q.explanation}</p>
              </div>
              <button
                onClick={nextQuestion}
                className="btn-hover w-full gold-gradient font-bold py-3.5 rounded-xl shadow-gold text-base"
              >
                {currentQ + 1 < QUESTIONS.length ? "Soal Berikutnya" : "Lihat Hasil"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
