import emailjs from "@emailjs/browser";
import { useState } from "react";

function ContactUs() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    setSending(true);
    setStatus("");

    const formData = {
      full_name: form.elements.full_name.value,
      phone: form.elements.phone.value,
      service: form.elements.service.value,
      project_details: form.elements.project_details.value,
    };

    try {
      await emailjs.send("service_6p8j3a7", "template_blswpvt", formData, {
        publicKey: "U81MJ3tA-RFcNb1RS",
      });

      setStatus("تم إرسال طلبك بنجاح!");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus(error?.text || error?.message || "حدث خطأ أثناء الإرسال");
    } finally {
      setSending(false);
    }
  };
  return (
    <section className="contactUs-container">
      <div className="contact-us-background" id="contact"></div>

      <div className="contact-us-section">
        <div className="contactUs-content">
          <p className="contactUs-small-title">تواصل معنا</p>

          <h2>جاهز تبدأ مشروعك؟</h2>

          <p className="contactUs-description">
            سواء كنت بحاجة إلى بناء، ترميم أو صيانة، تواصل معنا ودعنا نساعدك في
            تنفيذ مشروعك بجودة والتزام.
          </p>
        </div>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-info-item">
            <span>📞</span>

            <div>
              <h4>رقم الهاتف</h4>
              <a href="tel:+962785552493" dir="ltr">
                00962785552493
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <span>✉️</span>

            <div>
              <h4>البريد الإلكتروني</h4>
              <a href="mailto:Qaddomi95@gmail.com" dir="ltr">
                Qaddomi95@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <span>🕐</span>

            <div>
              <h4>ساعات العمل</h4>
              <p>السبت - الخميس | 8:00 ص - 6:00 م</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label>الاسم الكامل</label>
            <input
              type="text"
              name="full_name"
              placeholder="اكتب اسمك"
              required
            />
          </div>

          <div className="form-group">
            <label>رقم الهاتف</label>
            <input
              type="tel"
              name="phone"
              placeholder="07X XXX XXXX"
              required
            />
          </div>

          <div className="form-group">
            <label>نوع الخدمة</label>

            <select name="service" required>
              <option value="">اختر الخدمة</option>
              <option value="construction">بناء</option>
              <option value="renovation">ترميم و صيانة </option>
              <option value="demolition">هدم وإزالة</option>
              <option value="finishing">تشطيبات</option>
              <option value="supply">توريد</option>
              <option value="other">أخرى</option>
            </select>
          </div>

          <div className="form-group">
            <label>تفاصيل المشروع</label>

            <textarea
              name="project_details"
              rows="5"
              placeholder="اكتب لنا تفاصيل مشروعك..."
              required
            ></textarea>
          </div>

          <button type="submit" disabled={sending}>
            {sending ? "جاري الإرسال..." : "إرسال الطلب →"}
          </button>

          {status && <p role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
