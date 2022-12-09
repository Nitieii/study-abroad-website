import { Link } from "react-router-dom";

const Culture = () => {
  return (
    <main id="main" data-aos="fade-up">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 style={{ fontWeight: "bold" }}>Văn Hoá Các Nước</h2>
            <ol>
              <li>
                <Link to="/">Trang Chủ</Link>
              </li>
              <li>Văn Hoá Các Nước</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="inner-page">
        <div className="container">
          <p>Example inner page template</p>
        </div>
      </section>
    </main>
  );
};

export default Culture;
