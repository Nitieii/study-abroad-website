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

const items = [
  {
    itemId: "sample-id",
    mediaUrl:
      "https://korea.net.vn/wp-content/uploads/2019/08/du-hoc-han-quoc.jpg",
    metaData: {
      type: "image",
      height: 200,
      width: 100,
      title: "sample-title",
      description: "sample-description",
      focalPoint: [0, 0],
      link: {
        url: "http://example.com",
        target: "_blank",
      },
    },
  },
];

const testimonials = [
  {
    _id: 1,
    name: "Nguyễn Văn A",
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    avatar: "/src/assets/img/testimonials/testimonials-1.jpg",
  },
  {
    _id: 2,
    name: "Ngô Tuấn Anh",
    description:
      "Nulla velit laboris eiusmod in duis laborum consequat duis non laborum laborum labore esse in elit. Reprehenderit labore consequat in exercitation pariatur exercitation aute voluptate velit aute adipisicing consequat. Enim nisi in nisi nisi dolor minim sint duis mollit magna laborum incididunt. Nostrud aliqua occaecat ullamco commodo deserunt cupidatat non elit anim. Tempor duis sint tempor consequat magna anim est ex in. Nostrud irure dolor ipsum nostrud qui ad nisi elit id ut. Ut eu exercitation ea labore.",
    avatar: "/src/assets/img/testimonials/testimonials-2.jpg",
  },
  {
    _id: 3,
    name: "Lù Bá Lâm",
    description:
      "Est amet elit deserunt amet laboris culpa consequat cillum mollit. Aliquip do elit ex officia enim veniam laborum est laborum. Ad proident do sint ad. Eu id pariatur id laboris adipisicing do ea. Proident et et tempor velit tempor laborum minim sit mollit tempor laboris esse. Ex reprehenderit incididunt veniam est dolor Lorem officia dolore.",
    avatar: "/src/assets/img/testimonials/testimonials-3.jpg",
  },
  {
    _id: 4,
    name: "Nguyễn Văn A",
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    avatar: "/src/assets/img/testimonials/testimonials-4.jpg",
  },
  {
    _id: 5,
    name: "Nguyễn Văn A",
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    avatar: "/src/assets/img/testimonials/testimonials-5.jpg",
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
              <h2>Chất lượng tốt nhất, chi phí rẻ nhất</h2>

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

      {/* <main
        id="main"
        className="row"
      > */}
      {/* news */}
      <div className="container">
        <div id="information" className="information d-flex align-items-center">
          <div className="container">
            <div
              className="row w-100 section-title"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="col">
                <h3
                  style={{
                    fontWeight: "bold",
                    textAlign: "start",
                  }}
                >
                  Thông Tin <span style={{ color: "#2f9931" }}>Du Học</span>
                </h3>
              </div>
              <div
                className="col"
                style={{
                  justifyContent: "center",
                  textAlign: "end",
                  alignItems: "center",
                }}
              >
                <Link
                  href="#"
                  className="more-button"
                  style={{ color: "black" }}
                >
                  Xem tất cả
                </Link>
              </div>
            </div>

            <div className="row w-100">
              {news.map((newsB) => (
                <div className="col-md-4" key={newsB._id}>
                  <LazyLoadImage
                    src={newsB.thumbnail}
                    className="news-thumbnail"
                    effect="blur"
                    alt="Hình ảnh tin tức du học"
                  />
                  {/* <Link to="/news"> */}
                  <Link
                    className="news-title"
                    style={{ marginBottom: 10, color: "black" }}
                  >
                    {newsB.title}
                  </Link>
                  {/* </Link> */}
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
      </div>

      <div className="container">
        <div id="information" className="information d-flex align-items-center">
          <div className="container">
            <div className="row w-100 d-flex align-items-center justify-content-between section-title">
              <h3 className="col-md-6 align-items-center">Góc Du Học Sinh</h3>

              <a href="#" className="col-md-6 align-items-center">
                Xem tất cả
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div id="information" className="information d-flex align-items-center">
          <div className="container">
            <div className="row w-100 d-flex align-items-center justify-content-between section-title">
              <h3 className="col-md-6 align-items-center">
                Văn Hoá <span style={{ color: "#2f9931" }}>Các Nước</span>
              </h3>

              <a href="#" className="col-md-6 align-items-center">
                Xem tất cả
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="testimonials" class="testimonials">
        <div class="container" data-aos="zoom-in">
          <h3 style={{ color: "white", textAlign: "center", margin: "15px" }}>
            ĐÁNH GIÁ CỦA KHÁCH HÀNG
          </h3>

          <div
            class="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Carousel autoPlay infiniteLoop showThumbs={false}>
              {testimonials.length > 0 &&
                testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div class="testimonial-item">
                      <img
                        src={testimonial.avatar}
                        class="testimonial-img"
                        alt=""
                      />
                      <h3>{testimonial.name}</h3>
                      <h4>Học viên</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        {testimonial.description}
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section id="faq" class="faq section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h3>
              Các <span>Câu Hỏi</span> Thường Gặp
            </h3>
          </div>

          <div class="row justify-content-center">
            <div class="col-xl-10">
              <ul class="faq-list">
                <li>
                  <div
                    data-bs-toggle="collapse"
                    class="collapsed question"
                    href="#faq1"
                  >
                    Non consectetur a erat nam at lectus urna duis?{" "}
                    <i class="bi bi-chevron-down icon-show"></i>
                    <i class="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq2"
                    class="collapsed question"
                  >
                    Feugiat scelerisque varius morbi enim nunc faucibus a
                    pellentesque? <i class="bi bi-chevron-down icon-show"></i>
                    <i class="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq3"
                    class="collapsed question"
                  >
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi? <i class="bi bi-chevron-down icon-show"></i>
                    <i class="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq4"
                    class="collapsed question"
                  >
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                    <i class="bi bi-chevron-down icon-show"></i>
                    <i class="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq5"
                    class="collapsed question"
                  >
                    Tempus quam pellentesque nec nam aliquam sem et tortor
                    consequat? <i class="bi bi-chevron-down icon-show"></i>
                    <i class="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div id="faq5" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq6"
                    class="collapsed question"
                  >
                    Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                    turpis nunc eget lorem dolor?{" "}
                    <i class="bi bi-chevron-down icon-show"></i>
                    <i class="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div id="faq6" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Laoreet sit amet cursus sit amet dictum sit amet justo.
                      Mauris vitae ultricies leo integer malesuada nunc vel.
                      Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                      eget lorem dolor sed. Ut venenatis tellus in metus
                      vulputate eu scelerisque. Pellentesque diam volutpat
                      commodo sed egestas egestas fringilla phasellus faucibus.
                      Nibh tellus molestie nunc non blandit massa enim nec.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h3>
              <span>Đăng Kí Tư Vấn</span>
            </h3>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-6">
              <div class="info-box mb-4">
                <i class="bx bx-map"></i>
                <h3>Địa chỉ của chúng tôi</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-envelope"></i>
                <h3>Email</h3>
                <p>contact@example.com</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-phone-call"></i>
                <h3>Liên hệ</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-6 ">
              <iframe
                class="mb-4 mb-lg-0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "384px" }}
                allowFullScreen
              ></iframe>
            </div>

            <div class="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="row">
                  <div class="col form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Tên của bạn"
                      required
                    />
                  </div>
                  <div class="col form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Email của bạn"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Chủ đề"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Nội dung bạn muốn gửi đến chúng tôi..."
                    required
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Đang gửi</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Tin nhắn của bạn đã được gửi đi. Cảm ơn bạn!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Gửi</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Homepage;
