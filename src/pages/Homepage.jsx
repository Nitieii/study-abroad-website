import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { vi } from "date-fns/locale";

const slides = [
  {
    src: "/src/assets/img/hero.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "/src/assets/img/hero2.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "/src/assets/img/hero1.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
];

const news = [
  {
    _id: 1,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320398641_21cded1bb15a2dfae7684a8c05e09e66.jpg",
  },
  {
    _id: 2,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320629262_7729baaac253c1a7d80a6415106e032e.jpg",
  },
  {
    _id: 3,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937322559207_a7104d74b5e2a6b32550656baecdb139.jpg",
  },
];

const Homepage = () => {
  return (
    <div>
      <Carousel autoPlay autoFocus infiniteLoop showThumbs={false}>
        {slides.map((slide, index) => (
          <section
            key={index}
            id="hero"
            className="d-flex align-items-center"
            style={{
              width: "100%",
              height: "75vh",
              background: `url(${slide.src})`,
              backgroundSize: "cover",
            }}
          >
            <div className="container" data-aos="zoom-out" data-aos-delay="100">
              <h1>
                Du học cùng <span>MK Group</span>
              </h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>

              <a
                href="#about"
                className="btn-get-started scrollto"
                style={{
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  display: "inline-block",
                  padding: "10px 28px",
                  borderRadius: "4px",
                  transition: "0.5s",
                  color: "#fff",
                  background: "#2f9931",
                }}
              >
                Đăng kí tư vấn
              </a>
            </div>
          </section>
        ))}
      </Carousel>

      <main id="main">
        <div id="information" className="information d-flex align-items-center">
          <div className="container">
            <div className="row w-100 d-flex align-items-center justify-content-between section-title">
              <p
                style={{
                  color: "#2f9931",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
                className="col-md-6 align-items-center"
              >
                THÔNG TIN DU HỌC
              </p>

              <a href="#" className="col-md-6 align-items-center">
                Xem tất cả
              </a>
            </div>

            <div className="row">
              {news.map((newsB) => (
                <div className="col-md-4" key={newsB._id}>
                  <LazyLoadImage
                    src={newsB.thumbnail}
                    className="news-thumbnail"
                    effect="blur"
                    alt="Hình ảnh tin tức du học"
                  />
                  <Link to="/news">
                    <p className="news-title" style={{ marginBottom: 10 }}>
                      {newsB.title}
                    </p>
                  </Link>
                  <p
                    style={{
                      fontSize: 12,
                      marginBottom: 10,
                    }}
                  >
                    🗓️{" "}
                    {formatDistanceToNow(new Date(newsB.createdAt), {
                      addSuffix: true,
                      locale: vi,
                    })}{" "}
                    -{" "}
                    <span style={{ color: "#2f9931", fontWeight: "bold" }}>
                      MK Group
                    </span>
                  </p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: newsB.content,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
