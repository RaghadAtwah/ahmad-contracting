import { useEffect, useRef } from "react";
import AYLogo from "../assets/AYLogo.png";

function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("active");
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="whyChooseUs-container" id="whyChooseUs"  ref={sectionRef}>
      <div className="whyChooseUs-content">
        <p className="whyChooseUs-small-title">لماذا تختارنا؟</p>

        <h2>خبرة نضعها في كل مشروع، ودقة نحرص عليها في كل تفصيل.</h2>

        <div className="whyChooseUs-details">
          <div className="whyChooseUs-item">
            <h3>خبرة في التنفيذ</h3>
            <p>
              خبرة عملية في تنفيذ مختلف المشاريع الإنشائية وفق متطلبات كل مشروع.
            </p>
          </div>

          <div className="whyChooseUs-item">
            <h3>جودة في كل مرحلة</h3>
            <p>نحرص على جودة المواد ودقة التنفيذ في جميع مراحل العمل.</p>
          </div>

          <div className="whyChooseUs-item">
            <h3>التزام بالمواعيد</h3>
            <p>
              نلتزم بخطة العمل والجداول الزمنية المتفق عليها لإنجاز المشروع
              بكفاءة.
            </p>
          </div>

          <div className="whyChooseUs-item">
            <h3>دقة واهتمام بالتفاصيل</h3>
            <p>
              نولي التفاصيل أهمية كبيرة لضمان نتائج متقنة ومستوى تنفيذ يليق
              بالمشروع.
            </p>
          </div>

          <div className="whyChooseUs-item">
            <h3>حلول تناسب مشروعك</h3>
            <p>
              نقدم حلولًا عملية تتناسب مع طبيعة المشروع واحتياجاته ومتطلباته.
            </p>
          </div>

          <div className="whyChooseUs-item">
            <h3>متابعة مستمرة</h3>
            <p>
              نحرص على متابعة مراحل المشروع والتواصل المستمر لضمان وضوح سير
              العمل حتى التسليم.
            </p>
          </div>
        </div>
      </div>

      <div className="whyChooseUs-logo">
        <img src={AYLogo} alt="AY Logo" />
      </div>
    </div>
  );
}

export default WhyChooseUs;
