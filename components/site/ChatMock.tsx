import { Check, WhatsApp } from "./Icons";

type Msg = { from: "in" | "out"; time: string; ar: string; en: string };

// An example late-night conversation for a Dubai clinic, drawn as a WhatsApp chat.
// Illustrative only: the clinic, prices and times are made up.
const MESSAGES: Msg[] = [
  {
    from: "in",
    time: "11:48 pm",
    ar: "مرحبا، عندكم موعد بكرة لتنظيف الأسنان؟ وكم السعر؟",
    en: "Hi, any appointments tomorrow for teeth cleaning? How much?",
  },
  {
    from: "out",
    time: "11:48 pm",
    ar: "أهلاً! نعم، عندنا بكرة الساعة 10:30 صباحاً أو 4:00 مساءً. سعر التنظيف 250 درهم. أي وقت يناسبك؟",
    en: "Yes, 10:30 am or 4:00 pm tomorrow. Cleaning is AED 250. Which suits you?",
  },
  { from: "in", time: "11:49 pm", ar: "10:30 تمام", en: "10:30 works" },
  {
    from: "out",
    time: "11:49 pm",
    ar: "تم الحجز ✅ بكرة 10:30 صباحاً. فريق الاستقبال راح يأكد معك الصبح.",
    en: "Booked for 10:30 am. The front desk will confirm in the morning.",
  },
];

export default function ChatMock() {
  return (
    <figure className="chat-mock">
      <div className="chat-phone">
        <div className="chat-top">
          <span className="chat-avatar" aria-hidden="true">
            <WhatsApp />
          </span>
          <span>
            <b>Example Dental Clinic, Dubai</b>
            <small>Assistant online</small>
          </span>
        </div>
        <ol className="chat-body">
          {MESSAGES.map((m, i) => (
            <li key={i} className={`chat-msg chat-${m.from}`}>
              <p lang="ar" dir="rtl">
                {m.ar}
              </p>
              <p className="chat-en">{m.en}</p>
              <time>
                {m.time}
                {m.from === "out" && <Check />}
              </time>
            </li>
          ))}
        </ol>
        <p className="chat-handoff">
          <Check /> Booking sent to the front desk · Arabic · source: Instagram ad
        </p>
      </div>
      <figcaption>Example: a patient messages at 11:48 pm in Arabic. The assistant answers, books and tells your team.</figcaption>
    </figure>
  );
}
