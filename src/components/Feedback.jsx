import { useRef, useState } from "react";
import AYFeedback from "../assets/AYFeedback.jpg";

function Feedback() {
  const sliderRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const moveSlider = (direction) => {
    if (!sliderRef.current) return;

    setPaused(true);

    sliderRef.current.scrollBy({
      left: direction * 300,
      behavior: "smooth",
    });
  };

  const feedbacks = [
    {
      name: "وفاء عبدالرحيم",
      role: "صاحبة منزل",
      text: "دقة في المواعيد وإنجاز على أتم وجه",
    },
    {
      name: "سعود خاطر",
      role: "صاحب منزل",
      text: "الشغل تمام والتعامل مريح وأكثر من رائع",
    },
    {
      name: "API",
      role: "API - Amman Jordan",
      text: "أعمال صيانة داخل المصنع - أقل وقت وأعلى جودة",
    },
    {
      name: "أسامة صالح",
      role: "صاحب منزل",
      text: "ترميم وبناء بيت درج",
    },
    {
      name: "مروان محمود",
      role: "صاحب منزل",
      text: "هدم جدران المنزل وتحويله إلى مستودع",
    },
    {
      name: "فادي الحجاوي",
      role: "صاحب منزل",
      text: "دقة وأمان في العمل",
    },
    {
      name: "أحمد الخطيب",
      role: "صاحب منزل",
      text: "تنفيذ ممتاز والتزام بالمواعيد المتفق عليها",
    },
    {
      name: "محمد العواملة",
      role: "صاحب منزل",
      text: "شغل مرتب وسرعة في الإنجاز وتعامل محترم",
    },
    {
      name: "خالد الزعبي",
      role: "صاحب منزل",
      text: "جودة عالية واهتمام بأدق التفاصيل",
    },
    {
      name: "شركة الشرق",
      role: "شركة مقاولات",
      text: "فريق ملتزم وجودة في التنفيذ وسرعة في إنجاز العمل",
    },
  ];

  const renderFeedbacks = () =>
    feedbacks.map((feedback, index) => (
      <div className="feedback-card" key={index}>
        <div className="feedback-image">
          <img src={AYFeedback} alt={feedback.name} />
        </div>

        <div className="card-details">
          <div className="feedback-user">
            <h4>{feedback.name} 👤</h4>
            <span className="feedback-user">{feedback.role} 📍</span>
          </div>

          <div className="feedback-text">
            <span className="feedback-star">⭐</span>
            <p>{feedback.text}</p>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="feedback-container">
      <div className="feedback-content">
        <p className="feedback-small-title">آراء عملائنا</p>
        <h2>ثقة نبنيها مع كل مشروع.</h2>
      </div>

      <div className="feedback-controls" onMouseLeave={() => setPaused(false)}>
        <button
          type="button"
          className="feedback-arrow"
          onClick={() => moveSlider(-1)}
          aria-label="تحريك لليمين"
        >
          →
        </button>

        <button
          type="button"
          className="feedback-arrow"
          onClick={() => moveSlider(1)}
          aria-label="تحريك لليسار"
        >
          ←
        </button>
      </div>

      <div
        className={`feedback-slider ${paused ? "manual-mode" : ""}`}
        ref={sliderRef}
        dir="ltr"
        onMouseLeave={() => setPaused(false)}
      >
        <div className="feedback-track">
          <div className="feedback-group">{renderFeedbacks()}</div>

          <div className="feedback-group" aria-hidden="true">
            {renderFeedbacks()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
