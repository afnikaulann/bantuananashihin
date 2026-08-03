"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    question: "Siapa nama asli dari Ustaz Derry Sulaiman?",
    options: [
      "Deri Guswan Pramona",
      "Derry Sulaiman Saputra",
      "Deri Muhammad Sulaiman",
      "Sulaiman Nasrullah",
    ],
    correct: 0,
    explanation: "Beliau lahir di Solok, Sumatra Barat, dengan nama asli Deri Guswan Pramona.",
  },
  {
    question: "Sebelum menjadi seorang pendakwah, Ustaz Derry Sulaiman terkenal sebagai musisi yang memegang posisi sebagai...",
    options: [
      "Vokalis",
      "Gitaris",
      "Drummer",
      "Pemain Bass",
    ],
    correct: 1,
    explanation: "Sebelum berhijrah, beliau sangat aktif di belantika musik cadas sebagai seorang pemain gitar.",
  },
  {
    question: "Apa nama grup band musik metal terkenal asal Jakarta yang pernah digawangi oleh Ustaz Derry Sulaiman sebelum ia berhijrah?",
    options: [
      "Rotor",
      "Burgerkill",
      "Betrayer",
      "Seringai",
    ],
    correct: 2,
    explanation: "Ustaz Derry sempat merantau ke Jakarta pada tahun 1996 dan bergabung sebagai gitaris band thrash metal legendaris, Betrayer.",
  },
  {
    question: "Lagu religi populer milik Ustaz Derry Sulaiman yang memiliki lirik ikonik tentang mengingatkan manusia akan kematian adalah...",
    options: [
      "Tombo Ati",
      "Dunia Sementara Akhirat Selamanya",
      "Dengan Nafas-Mu",
      "Pergi Tanpa Pesan",
    ],
    correct: 1,
    explanation: "Ini merupakan salah satu karya lagu religi paling hit milik beliau yang sering dijadikan jargon dakwahnya.",
  },
  {
    question: "Di pulau manakah Ustaz Derry Sulaiman mendapatkan hidayah titik balik untuk beriktikaf di masjid dan memulai perjalanan hijrahnya pada tahun 2000?",
    options: [
      "Pulau Jawa",
      "Pulau Lombok",
      "Pulau Bali",
      "Pulau Sumatra",
    ],
    correct: 2,
    explanation: "Tahun 2000 menjadi titik balik hidupnya saat beliau memutuskan beriktikaf selama 3 hari di sebuah masjid di Bali setelah mendapat nasihat dari sahabat musisinya.",
  },
];

const WHATSAPP_NUMBER = "6282116253174";

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

    const message = `*Ust. Derry Sulaiman - Hasil Kuis*\n\nSkor: ${score}/${QUESTIONS.length}\n${scoreLabel}\n\n${answerSummary}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (finished) {
    return (
      <section className="py-16 px-4 islamic-pattern-bg">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a3c2a] mb-2">
            Kuis Seru
          </h2>
          <div className="islamic-divider">
            <span>۞</span>
          </div>

          <div className="card-islamic p-8 text-center">
            <h3 className="text-2xl font-bold text-[#1a3c2a] mb-4">Hasil Kuis</h3>
            <div className="text-5xl font-bold green-text mb-2">
              {score}/{QUESTIONS.length}
            </div>
            <p className="text-xl text-[#1a3c2a] mb-6">{scoreLabel}</p>

            {/* Rincian jawaban */}
            <div className="text-left space-y-3 mb-6">
              {QUESTIONS.map((q, i) => {
                const userAnswer = answers[i] !== undefined ? answers[i] : -1;
                const isCorrect = userAnswer === q.correct;
                return (
                  <div
                    key={i}
                    className="border border-[#0d6e4f]/20 rounded-xl p-3"
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded ${
                          isCorrect
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {isCorrect ? "BENAR" : "SALAH"}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm text-[#1a3c2a] font-medium">
                          {i + 1}. {q.question}
                        </p>
                        <p className="text-xs text-[#1a3c2a]/60 mt-1">
                          Jawaban Anda: {userAnswer >= 0 ? q.options[userAnswer] : "Tidak dijawab"}
                        </p>
                        {!isCorrect && (
                          <p className="text-xs text-green-600 mt-1">
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
            <div className="bg-[#1a8a5f]/10 border border-[#0d6e4f]/20 rounded-xl p-4 mb-6">
              <p className="text-[#1a3c2a] text-sm font-medium">
                📸 Silakan screenshot gambar ini sebagai bukti
              </p>
            </div>

            {/* Tombol WhatsApp */}
            <button
              onClick={sendWhatsApp}
              className="btn-hover w-full bg-[#25D366] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 mb-4"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Kirim Screenshot ke Admin
            </button>

            {/* Tombol ulangi */}
            <button
              onClick={restartQuiz}
              className="btn-hover w-full green-gradient text-white font-bold py-3 rounded-xl"
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
    <section className="py-16 px-4 islamic-pattern-bg">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1a3c2a] mb-2">
          Kuis Seru
        </h2>
        <div className="islamic-divider">
          <span>۞</span>
        </div>

        <div className="card-islamic p-8">
          {/* Bar progres */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#1a3c2a] font-medium text-sm">
                Soal {currentQ + 1} dari {QUESTIONS.length}
              </span>
              <span className="text-[#0d6e4f] font-bold text-sm">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-[#0d6e4f]/20 rounded-full h-3">
              <div
                className="green-gradient h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Pertanyaan */}
          <h3 className="text-xl font-bold text-[#1a3c2a] mb-6">
            {q.question}
          </h3>

          {/* Pilihan jawaban */}
          <div className="space-y-3">
            {q.options.map((option, i) => {
              let className = "quiz-option border-2 border-[#0d6e4f]/30 rounded-xl p-4 text-[#1a3c2a] bg-white";

              if (showFeedback) {
                if (i === q.correct) {
                  className = "border-2 border-green-500 rounded-xl p-4 text-[#1a3c2a] bg-green-50";
                } else if (i === selected) {
                  className = "border-2 border-red-500 rounded-xl p-4 text-[#1a3c2a] bg-red-50";
                } else {
                  className = "border-2 border-[#0d6e4f]/15 rounded-xl p-4 text-[#1a3c2a]/50 bg-white";
                }
              }

              return (
                <div
                  key={i}
                  className={className}
                  onClick={() => handleAnswer(i)}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full border-2 border-[#0d6e4f] flex items-center justify-center text-sm font-bold text-[#0d6e4f]">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showFeedback && i === q.correct && (
                      <span className="text-green-500 font-bold">✓</span>
                    )}
                    {showFeedback && i === selected && i !== q.correct && (
                      <span className="text-red-500 font-bold">✗</span>
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
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <p className={`font-bold mb-1 ${selected === q.correct ? "text-green-600" : "text-red-600"}`}>
                  {selected === q.correct ? "BENAR! 🎉" : "SALAH! 😅"}
                </p>
                <p className="text-[#1a3c2a] text-sm">{q.explanation}</p>
              </div>
              <button
                onClick={nextQuestion}
                className="btn-hover w-full green-gradient text-white font-bold py-3 rounded-xl"
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
