import { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { vi } from "date-fns/locale";
import Fanpage from "../components/Fanpage";
import WSPGallery from "../components/Gallery";
import HotNews from "../components/HotNews";
import { usePost, useAlert } from "../hooks";
import emailjs from "@emailjs/browser";
import useImg from "../hooks/useImage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/lineClamp.css";

const slides = [
  {
    src: "https://todo-list-app-asdfasd.s3.amazonaws.com/hero.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "https://todo-list-app-asdfasd.s3.amazonaws.com/hero2.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "https://todo-list-app-asdfasd.s3.amazonaws.com/hero1.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
];

const shortcut = [
  {
    _id: 1,
    title: "Du học Hàn Quốc",
    content:
      "Các chương trình du học Hàn Quốc: Du học nghề + Học tiếng ngắn hạn + Học bổng",
    thumbnail:
      "https://images.unsplash.com/photo-1578648574417-15941a4751bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    type: "du-hoc-han-quoc",
    index: 0,
  },
  {
    _id: 2,
    title: "Du học Đài Loan",
    content:
      "Các chương trình du học Đài Loan: Du học nghề + Học tiếng ngắn hạn + Học bổng",
    thumbnail:
      "https://images.unsplash.com/photo-1539469520861-6ece02538a10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    type: "du-hoc-dai-loan",
    index: 1,
  },
  {
    _id: 3,
    title: "Du học Trung Quốc",
    content:
      "Các chương trình du học Trung Quốc: Du học nghề + Học tiếng ngắn hạn + Học bổng  ",
    thumbnail:
      "https://images.unsplash.com/photo-1533552755457-5b471cb2ab11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    type: "du-hoc-trung-quoc",
    index: 2,
  },
  {
    _id: 4,
    title: "Du học Đức",
    content:
      "Các chương trình du học Đức: Du học nghề + Học tiếng ngắn hạn + Học bổng ",
    thumbnail:
      "https://images.unsplash.com/photo-1648467884947-e636d39b5504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    type: "du-hoc-duc",
    index: 3,
  },
  {
    _id: 5,
    title: "Du học Úc",
    content:
      "Các chương trình du học Úc: Du học nghề + Học tiếng ngắn hạn + Học bổng  ",
    thumbnail:
      "https://images.unsplash.com/photo-1580417992497-a0c602adde05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    type: "du-hoc-uc",
    index: 4,
  },
];

const testimonials = [
  {
    _id: 1,
    name: "Nguyễn Văn A",
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    avatar: "https://todo-list-app-asdfasd.s3.amazonaws.com/testimonials-1.jpg",
  },
  {
    _id: 2,
    name: "Ngô Tuấn Anh",
    description:
      "Enim nisi in nisi nisi dolor minim sint duis mollit magna laborum incididunt. Nostrud aliqua occaecat ullamco commodo deserunt cupidatat non elit anim. Tempor duis sint tempor consequat magna anim est ex in.",
    avatar: "https://todo-list-app-asdfasd.s3.amazonaws.com/testimonials-2.jpg",
  },
  {
    _id: 3,
    name: "Lù Bá Lâm",
    description:
      "Aliquip do elit ex officia enim veniam laborum est laborum. Ad proident do sint ad. Eu id pariatur id laboris adipisicing do ea. Proident et et tempor velit tempor laborum minim sit mollit tempor laboris esse. Ex reprehenderit incididunt veniam est dolor Lorem officia dolore.",
    avatar: "https://todo-list-app-asdfasd.s3.amazonaws.com/testimonials-3.jpg",
  },
  {
    _id: 4,
    name: "Nguyễn Văn A",
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    avatar: "https://todo-list-app-asdfasd.s3.amazonaws.com/testimonials-4.jpg",
  },
  {
    _id: 5,
    name: "Nguyễn Văn A",
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    avatar: "https://todo-list-app-asdfasd.s3.amazonaws.com/testimonials-5.jpg",
  },
];

const Homepage = () => {
  const [shortcuts, setShortCuts] = useState([]);
  const {
    post,
    type,
    handleGetPost,
    culture,
    handleGetCulture,
    handleSetSelectedIndex,
  } = usePost();
  const [currentPage, setCurrentPage] = useState(1);
  const form = useRef();
  const notify = () => toast("Wow so easy !");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h229yt4",
        "template_r90zafv",
        form.current,
        "fjpC-B_Bu53YcXJPO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // enqueueSnackbar("thành công", {
    //   variant: "success",
    // });
    toast.success("Gửi email thành công");
    e.target.reset();
  };

  const { img, handleGetIMG } = useImg();
  useEffect(() => {
    handleGetPost(currentPage, "thong-tin-du-hoc", type);
    handleGetCulture(currentPage, "van-hoa-cac-nuoc", type);
    setShortCuts(shortcut);
    handleGetIMG("du-hoc-han-quoc");
  }, [currentPage, type]);

  const arrayPost = [...post];
  arrayPost.length = 3;

  const arrayCulture = [...culture];
  arrayCulture.length = [3];

  console.log(arrayCulture)
  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <Carousel autoPlay autoFocus infiniteLoop showThumbs={false}>
        {slides.map((slide, index) => (
          <section
            key={index}
            id="hero"
            className="d-flex align-items-center"
            style={{
              width: "100%",
              height: "60vh",
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
                href="#contact"
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

      <div className="container" style={{ marginTop: 50 }}>
        <div id="shortcut" className="shortcut w-100 d-flex align-items-center">
          <div
            className="row justify-content-center shortcut-list"
            style={{ boxSizing: "border-box" }}
          >
            {shortcuts.map((shortcutB, index) => (
              <div
                className="shortcut-item"
                style={{
                  paddingRight: 10,
                  paddingLeft: 10,
                }}
                key={shortcutB._id}
              >
                <img
                  src={shortcutB.thumbnail}
                  className="shortcut-thumbnail"
                  effect="blur"
                  alt="Hình ảnh du học"
                />
                <Link
                  to="/thong-tin-du-hoc"
                  className="shortcut-title"
                  onClick={() => handleSetSelectedIndex(shortcutB.index)}
                >
                  {shortcutB.title}
                </Link>
                <p className="shortcut-content">{shortcutB.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div id="information" className="information d-flex align-items-center">
          <div className="row">
            <div className="container col-md-8">
              <div className="section-title">
                <Link to="/thong-tin-du-hoc">
                  <h3
                    style={{
                      fontWeight: "bold",
                      textAlign: "start",
                      color: "black",
                    }}
                  >
                    Thông Tin <span style={{ color: "#2f9931" }}>Du Học</span>
                  </h3>
                </Link>
              </div>

              <div className="row d-flex align-items-center TTDH-responsive">
                {arrayPost.map((newsB) => (
                  <div
                    className="col-md-4"
                    style={{ paddingRight: 10, paddingLeft: 10 }}
                    key={newsB._id}
                  >
                    <img
                      src={newsB.thumbnail_url}
                      className="news-thumbnail"
                      effect="blur"
                      alt="Hình ảnh tin tức du học"
                    />
                    {/* <Link to="/news"> */}
                    <Link
                      to={`/thong-tin-du-hoc/${newsB._id}`}
                      className="news-title"
                      
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
                      className="line-clamp"
                      style={{ fontSize: "14px" }}
                      dangerouslySetInnerHTML={{
                        __html: newsB.description,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="container col-md-4">
              <h5
                className="align-items-center"
                style={{
                  borderBottom: "1px solid #2f9931",
                  marginBottom: 15,
                }}
              >
                Tin tức hot nhất
              </h5>

              <HotNews />
            </div>
          </div>
        </div>
      </div>

      <section id="break-section" className="break-section"></section>
      <div className="container">
        <div id="information" className="information">
          <div className="row">
            <div className="container col-md-8">
              <h3 className="align-items-center section-title">
                Góc <span style={{ color: "#2f9931" }}>Du Học Sinh</span>
              </h3>

              <div className="row w-100">
                <WSPGallery galleryImages={img} />
              </div>
            </div>

            <Fanpage />
          </div>
        </div>
      </div>

      <section id="break-section-two" className="break-section-two"></section>

      <div className="container">
        <div id="information" className="information d-flex align-items-center">
          <div className="row">
            <div className="container col-md-8">
              <h3 className="align-items-center section-title">
                Văn Hoá <span style={{ color: "#2f9931" }}>Các Nước</span>
              </h3>

              <div className="row d-flex align-items-center">
                {arrayCulture.map((newsB) => (
                  <div
                    className="col-lg-4"
                    style={{ paddingRight: 10, paddingLeft: 10 }}
                    key={newsB._id}
                  >
                    <img
                      src={newsB.thumbnail_url}
                      className="news-thumbnail"
                      effect="blur"
                      alt="Hình ảnh văn hoá các nước"
                    />
                    <Link
                      to={`/van-hoa-cac-nuoc/${newsB._id}`}
                      className="news-title"
                    >
                      {newsB.title}
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
                    className="line-clamp"
                      style={{ fontSize: "14px" }}
                      dangerouslySetInnerHTML={{
                        __html: newsB.description,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1522547902298-51566e4fb383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                className="widget-thumbnail"
                effect="blur"
                alt="Hình ảnh văn hoá các nước"
              />
            </div>
          </div>
        </div>
      </div>

      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="zoom-in">
          <h3 style={{ color: "white", textAlign: "center", margin: "15px" }}>
            Đánh Giá Của Khách Hàng
          </h3>

          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Carousel autoPlay infiniteLoop showThumbs={false}>
              {testimonials.length > 0 &&
                testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div className="testimonial-item">
                      <img
                        src={testimonial.avatar}
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>{testimonial.name}</h3>
                      <h4>Học viên</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        {testimonial.description}
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section id="faq" className="faq section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h3>
              Các <span>Câu Hỏi</span> Thường Gặp
            </h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10">
              <ul className="faq-list">
                <li>
                  <div
                    data-bs-toggle="collapse"
                    className="collapsed question"
                    href="#faq1"
                  >
                    Non consectetur a erat nam at lectus urna duis?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq1"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
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
                    className="collapsed question"
                  >
                    Feugiat scelerisque varius morbi enim nunc faucibus a
                    pellentesque?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
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
                    className="collapsed question"
                  >
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
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
                    className="collapsed question"
                  >
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
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
                    className="collapsed question"
                  >
                    Tempus quam pellentesque nec nam aliquam sem et tortor
                    consequat? <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
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
                    className="collapsed question"
                  >
                    Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                    turpis nunc eget lorem dolor?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq6"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
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

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h3>
              <span>Đăng Kí Tư Vấn</span>
            </h3>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map"></i>
                <h3>Địa chỉ của chúng tôi</h3>
                <p>
                  Số 32 - đường AVE 1 – Sunrise C, Block 5, khu đô thị The Manor
                  Central Park, Nguyễn Xiển, Đại Kim, Hoàng Mai, Hà Nội - Việt
                  Nam
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope"></i>
                <h3>Email</h3>
                <p>mkhqmanpower@gmail.com</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call"></i>
                <h3>Liên hệ</h3>
                <p>0974 082 088</p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6 ">
              <iframe
                className="mb-4 mb-lg-0"
                src="https://www.google.com/maps/embed/v1/place?q=The+Manor+Central+Park,+Đường+Nguyễn+Xiển,+Đại+Kim,+Hoàng+Mai,+Hà+Nội,+Việt+Nam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "384px" }}
                allowFullScreen
              ></iframe>
            </div>

            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Tên của bạn"
                      required
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email của bạn"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Số điện thoại của bạn"
                      required
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="level"
                      id="level"
                      placeholder="Trình độ học vấn của bạn"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col form-group">
                    <select className="form-control">
                      <option value="" disabled selected>
                        Hình thức nhận tư vấn
                      </option>
                      <option value="direct">Trực tiếp</option>
                      <option value="phone">Trao đổi qua điện thoại</option>
                      <option value="zalo">Zalo</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                  <div className="col form-group">
                    <select className="form-control" id="mySelect">
                      <option value="" disabled selected>
                        Hình thức đi
                      </option>
                      <option value="carrer">Du học nghề</option>
                      <option value="sound">Du học tiếng</option>
                      <option value="work">Xuất khẩu lao động</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Câu hỏi bạn muốn gửi đến chúng tôi..."
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Đang gửi</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Tin nhắn của bạn đã được gửi đi. Cảm ơn bạn!
                  </div>
                </div>
                <div className="text-center">
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
