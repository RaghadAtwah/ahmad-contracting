import pic10 from "../assets/pic 10.webp";
import pic15 from "../assets/pic 15.jpg";
import pic18 from "../assets/pic 18.webp";
import pic19 from "../assets/pic 19.jpg";

function Project() {
  return (
    <div className="projects-container"
    id="projects">
      <div className="project-content">
        <p className="project-small-title">مشاريعنا</p>
        <h2>إتقان في التنفيذ، وتميّز في النتائج</h2>

        <p className="project-description">
          من الأساسات الأولى إلى التفاصيل النهائية، نضع خبرتنا في كل خطوة لنقدّم
          مشاريع تُبنى بثقة وتدوم لسنوات.
        </p>
      </div>
      <div className="projects-section">
        <div className="project-card">
          <img src={pic10} alt="بناء عظم" />

          <div className="project-card-details">
            <h3>مشاريع بناء عظم</h3>
            <p>
              تنفيذ الهياكل الإنشائية للمباني وفق المخططات والمواصفات الهندسية،
              مع الالتزام بالدقة في التنفيذ وجودة الأعمال الإنشائية.
            </p>
          </div>

          <div className="project-card-btn">
            {/* <button> مشاهدة المشاريع ←</button> */}
          </div>
        </div>

        <div className="project-card">
          <img src={pic15} alt="بناء منازل" />

          <div className="project-card-details">
            <h3>مشاريع بناء منازل</h3>
            <p>
              تنفيذ المنازل بمراحلها الإنشائية المختلفة، مع تحقيق التوازن بين
              جودة البناء، دقة التنفيذ، ومتطلبات التصميم.
            </p>
          </div>

          <div className="project-card-btn">
            {/* <button> مشاهدة المشاريع ←</button> */}
          </div>
        </div>

        <div className="project-card">
          <img src={pic18} alt="ترميم مباني" />

          <div className="project-card-details">
            <h3>مشاريع ترميم المباني</h3>
            <p>
              تأهيل المباني ومعالجة العناصر المتضررة وفق أسس هندسية مدروسة، بهدف
              استعادة كفاءة المبنى وتحسين مظهره ووظيفته.
            </p>
          </div>

          <div className="project-card-btn">
            {/* <button> مشاهدة المشاريع ←</button> */}
          </div>
        </div>

        <div className="project-card">
          <img src={pic19} alt="هناجر ومستودعات" />

          <div className="project-card-details">
            <h3>مشاريع هناجر ومستودعات</h3>
            <p>
              تنفيذ الهناجر والمستودعات وفق طبيعة الاستخدام ومتطلبات المشروع، مع
              التركيز على المتانة والكفاءة وجودة التنفيذ.
            </p>
          </div>

          <div className="project-card-btn">
            {/* <button> مشاهدة المشاريع ←</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
