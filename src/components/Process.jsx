import { useEffect, useRef } from "react";

function Process() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeline.classList.add("active");
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (timeline) {
      observer.observe(timeline);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <div className="process-container" id="process">
      <div className="process-content">
        <p className="process-small-title">آلية العمل</p>
        <h2>خطوات واضحة من الفكرة إلى التسليم</h2>
        <p className="process-description">
          نعمل وفق خطوات مدروسة تضمن وضوح مراحل المشروع، دقة التنفيذ، وجودة
          النتائج.
        </p>
      </div>

      <div className="process-timeline" ref={timelineRef}>
        <div className="process-line">
          <div className="process-line-progress"></div>
        </div>
        <div className="process-step">
          <div className="process-number">01</div>
          <div className="process-dot"></div>
          <div className="process-step-content">
            <h3>الاستشارة</h3>
            <p>
              نفهم احتياجات المشروع ونحدد المتطلبات والأهداف للوصول إلى تصور
              واضح.
            </p>
          </div>
        </div>
        <div className="process-step">
          <div className="process-number">02</div>
          <div className="process-dot"></div>
          <div className="process-step-content">
            <h3>التخطيط</h3>
            <p>
              نراجع المخططات ونضع خطة واضحة لمراحل التنفيذ بما يتناسب مع طبيعة
              المشروع.
            </p>
          </div>
        </div>
        <div className="process-step">
          <div className="process-number">03</div>
          <div className="process-dot"></div>
          <div className="process-step-content">
            <h3>التنفيذ</h3>
            <p>
              نحوّل المخططات إلى واقع مع متابعة دقيقة لمراحل العمل وجودة
              التنفيذ.
            </p>
          </div>
        </div>
        <div className="process-step">
          <div className="process-number">04</div>
          <div className="process-dot"></div>
          <div className="process-step-content">
            <h3>التسليم</h3>
            <p>
              نراجع التفاصيل النهائية ونسلّم المشروع وفق المتطلبات ومعايير
              الجودة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Process;
