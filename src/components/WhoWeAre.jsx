import image1 from "../assets/Pic 2.jpg";
import image2 from "../assets/Pic 3.jpg";
import image3 from "../assets/pic 4.jpg";
import image4 from "../assets/pic 5.jpg";
import image5 from "../assets/pic 6.jpg";
import image6 from "../assets/pic 7.jpg";
import image8 from "../assets/pic 9.jpg";
import image9 from "../assets/pic 21.jpg";
import image10 from "../assets/pic 22.jpg";
import image11 from "../assets/pic 23.jpg";
import image12 from "../assets/pic 24.jpg";
import image13 from "../assets/pic 25.jpg";
import image14 from "../assets/pic 26.jpg";

function WhoWeAre() {
  const projectImages = [
    image1,
    image2,
    image3,
    image4,
    image14,
    image5,
    image6,
    image8,
    image9,
    image12,
    image10,
    image11,
    image13,
  ];

  return (
    <section id="whoWeAre" className="whoWeAre-container">
      <div className="whoWeAre-image-slider">
        <div className="whoWeAre-slider-track">
          {projectImages.map((image, index) => (
            <div className="whoWeAre-slide" key={index}>
              <img src={image} alt={`من أعمال المشروع ${index + 1}`} />
            </div>
          ))}

          {projectImages.map((image, index) => (
            <div className="whoWeAre-slide" key={`duplicate-${index}`}>
              <img src={image} alt={`من أعمال المشروع ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="whoWeAre-content">
        <p className="whoWeAre-small-title">من نحن</p>

        <h2>
          خبرة هندسية،
          <br />
          وتوريد وتنفيذ على أرض الواقع.
        </h2>

        <p className="whoWeAre-description">
          أعمل كمهندس مدني مستقل على تنفيذ وتوفير احتياجات المشاريع الإنشائية،
          بدءًا من دراسة متطلبات العمل وتقديم التسعيرة المناسبة، وصولًا إلى
          توريد المواد وتنفيذ الأعمال المتفق عليها، مع إمكانية توفير مواد البناء
          بشكل مستقل حسب احتياج العميل.
        </p>

        <p className="whoWeAre-description">
          أحرص على تقديم حلول عملية تجمع بين جودة التنفيذ والأسعار المنافسة، مع
          متابعة تفاصيل المشروع بما يتناسب مع احتياجات كل عميل.
        </p>
      </div>
    </section>
  );
}

export default WhoWeAre;
