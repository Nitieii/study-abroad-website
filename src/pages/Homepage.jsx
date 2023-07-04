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
                    Độ tuổi đi du học Hàn Quốc là bao nhiêu ?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq1"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Du học không phải là xuất khẩu lao động nên vấn đề về tuổi
                      tác khi đi du học cũng được Hàn Quốc quy định rất rõ. Cụ
                      thể:
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Hệ Cao đẳng/ Đại học:
                      </span>{" "}
                      Nếu bạn dưới 24 tuổi thì có thể đăng ký học bất kỳ trường
                      cao đẳng, đại học nào tại Hàn Quốc. Nếu bạn trên 24 tuổi
                      bạn chỉ có thể đăng ký vào các trường ưu tiên visa thẳng
                      của Hàn Quốc (tháng 2/2017 Hàn Quốc đã chọn ra 65 trường
                      đại học và 7 trường cao đẳng ưu tiên visa thẳng). Tuy
                      nhiên, theo kinh nghiệm thực tiễn của MK Group thì các
                      trường CĐ, ĐH của Hàn Quốc cũng không muốn nhận các trường
                      hợp hơn 25 tuổi. Trừ những ứng viên có học lực tốt, có
                      tiếng Hàn tốt hoặc từng làm cho công ty Hàn Quốc tại Việt
                      Nam. Lời khuyên dành cho bạn nếu trên 24 tuổi và mới chỉ
                      tốt nghiệp cấp 3 khi chọn du học Hàn Quốc tốt nhất nên
                      chọn du học nghề.
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Bậc cao học: </span>
                      Bậc cao học độ tuổi quy định là dưới 30 tuổi.
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Du học nghề: </span>
                      Độ tuổi du học nghề phù hợp là từ 24 – 30 tuổi. Nếu bạn đã
                      trên 26 tuổi và ngừng học tập được 3 năm thì lựa chọn duy
                      nhất khi du học tại Hàn Quốc chỉ có thể là du học nghề.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq2"
                    className="collapsed question"
                  >
                    Đi du học Hàn Quốc dễ hay khó ?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Vấn đề dễ hay khó phụ thuộc điều kiện và sự chuẩn bị chu
                      đáo hay không của mỗi người.
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                      Du học Hàn Quốc sẽ rất khó nếu:
                    </p>
                    <p>
                      Không có sự chuẩn bị chu đáo: Không có kế hoạch và tìm
                      hiểu kỹ về chương trình du học và các giấy tờ, thủ tục cần
                      chuẩn bị để đi du học. Làm cho quá trình làm thủ tục bị
                      gặp nhiều vấn đề, chẳng hạn như: Hồ sơ chưa đủ hoặc chưa
                      đạt yêu cầu của trường đăng ký, khai báo thông tin cá nhân
                      không chính xác dẫn tới phải điều tra lại. Những khó khăn
                      về mặt hồ sơ sẽ là điều đầu tiên bạn cảm thấy “du học Hàn
                      Quốc sao khó thế!”
                    </p>
                    <p>
                      Không có vốn tiếng Hàn: Nếu như ở Việt Nam, tiếng Anh được
                      sử dụng là ngôn ngữ thứ 2 thì ở Hàn Quốc họ chỉ nói tiếng
                      Hàn. Người dân Hàn Quốc rất ít khi dùng tiếng Anh, do vậy,
                      khi mới sang Hàn chắc chắn bạn sẽ gặp khó khăn khi hòa
                      nhập với cuộc sống và học tâp ở đây.
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                      Du học Hàn Quốc trở nên dễ dàng khi:{" "}
                    </p>
                    <p>
                      Bạn có sự chuẩn bị kỹ giấy tờ cần có cho bộ hồ sơ. Không
                      thiếu xót hay sai bất kỳ nội dung nào trong bộ hồ sơ. Hoàn
                      thành chương trình cấp 3 với điểm trung bình học tập chỉ
                      cần là trung bình khá trở lên. Những trường công hay
                      trường visa thẳng sẽ là từ mức khá trở lên.
                    </p>
                    <p>
                      Chứng minh được tài chính du học, bạn chỉ cần có 10.000
                      USD trong tài khoản hoặc sổ tiết kiệm là có thể vi vu du
                      học Hàn Quốc rồi.
                    </p>
                    <p>
                      Trình độ tiếng Hàn của bạn kém? Vấn đề này sẽ trở nên dễ
                      dàng bởi ở VN cũng có rất nhiều lớp tiếng Hàn sơ cấp, chỉ
                      cần chăm chỉ học với khoảng 3 tháng là bạn có thể giao
                      tiếp đơn giản bằng tiếng Hàn. Độ khó của tiếng Hàn không
                      quá khó như tiếng Đức hay Pháp, Nhật. Thời gian học cũng
                      ngắn hơn nhiều. Ước mơ du học của bạn sẽ tiến gần hơn bao
                      giờ hết.
                    </p>
                    <p>
                      Nhìn chung, du học Hàn Quốc khó hay dễ phụ thuộc vào bản
                      thân từng người. Khi bạn có dự định du học Hàn Quốc thì
                      hãy chuẩn bị chu đáo mọi hành trang cho bản thân mình,
                      nhất là về ngoại ngữ tiếng Hàn. Khi mọi thứ đã sẵn sàng
                      thì không còn gì là khó khăn cản trở bạn nữa.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq3"
                    className="collapsed question"
                  >
                    Du học Hàn Quốc có tốt không ?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Nhiều bạn đang đắn đo, không biết có nên quyết định du học
                      Hàn Quốc hay không. Liệu du học Hàn Quốc có tốt không? Nếu
                      bạn cũng đang có cùng mối lo trên. Hãy cùng MK Group điểm
                      qua vài ưu điểm nổi trội khi du học Hàn nhé!
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                      Hàn Quốc là đất nước văn minh, có nền Khoa học ứng dụng và
                      công nghệ tiên tiến
                    </p>
                    <p>
                      Hàn Quốc đứng số 1/152 quốc gia trong cuộc khảo sát về chỉ
                      số ICT do Hội Liên Minh Viễn Thông Quốc Tế (ITU) tổ chức.
                      Trong lĩnh vực điện tử viễn thông, Hàn Quốc cũng là quốc
                      gia đạt tiêu chuẩn của thế giới. Với các ngành nổi bật như
                      máy móc, đóng tàu, công nghiệp chế biến…
                    </p>
                    <p>
                      Nền kinh tế Hàn Quốc được mệnh danh là 1 trong 4 con rồng
                      của Châu Á. Các tập đoàn lớn đang “xâm chiếm” thị trường
                      tiêu dùng trên toàn thế giới như Lotte, Samsung, Daiwoo,…
                    </p>
                    <p>
                      Được học tập tại đất nước có nền công nghệ khoa học tiên
                      tiến và một nền kinh tế hàng đầu Châu Á. Sẽ là nền tảng
                      vững chắc cho bạn học tập và tích lũy kinh nghiệm, mở ra
                      tương lai thành công hơn.
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                      Điều kiện nhập học đơn giản hơn so với các nước Châu Âu
                    </p>
                    <p>
                      Ở trên có các mục điều kiện cụ thể khi muốn du học Hàn
                      Quốc. Nếu bạn đã từng tham khảo các chương trình du học ở
                      các nước khu vực Châu Âu. Thì chắc chắn bạn sẽ nhận ra
                      rằng điều kiện nhập học vào Hàn Quốc không “khó nhằn” như
                      các nước Châu Âu.
                    </p>
                    <p>
                      Ngoại trừ những trường có yêu cầu riêng biệt như có tiếng
                      Anh hay học lực khá giỏi. Thì hầu hết các trường của Hàn
                      đều chỉ có vài yêu cầu cơ bản như:
                    </p>
                    <p>• Đã tốt nghiệp THPT, lực học trung bình trở lên.</p>
                    <p>• Nếu theo học hệ CĐ/ĐH thì có độ tuổi dưới 24 tuổi.</p>
                    <p>
                      • Và chứng minh tài chính cũng chỉ từ 10.000 – 30.000 USD
                      trong sổ tiết kiệm/thẻ ngân hàng là có thể “trót lọt”.
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                      Đi lại thuận tiện và chỗ ở đẹp{" "}
                    </p>
                    <p>
                      Hệ thống giao thông của Hàn Quốc rất hiện đại, thuận tiện
                      và sạch sẽ. Với hệ thống tàu điện ngầm, xe bus thân thiện
                      và thơm tho. Mà chi phí lại rất rẻ. Việc đi lại của các
                      bạn khi đi phương tiện công cộng sẽ không có vấn đề gì
                      phải lo ngại. Các khu ký túc xá của các trường Hàn Quốc
                      đều rất khang trang, đầy đủ mọi tiện nghi. Khuôn viên khá
                      là thơ mộng.
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                      Chi phí du học Hàn Quốc thấp hơn so với nhiều nước khác
                    </p>
                    <p>
                      Mọi khoản chi phí khi du học Hàn Quốc đều rẻ hơn so với
                      các nước học bằng tiếng Anh. Như Mỹ, Canada, Anh, Pháp…
                      Chính phủ Hàn Quốc cũng không thu thêm bất kỳ khoản phụ
                      thu nào của du học sinh quốc tế.
                    </p>
                    <p>
                      Đất nước này sẽ có rất nhiều chính sách ưu đãi hỗ trợ sinh
                      viên quốc tế như: Cấp các khoản học bổng, tạo thêm nhiều
                      chỗ ở KTX, hỗ trợ tìm việc làm thêm,…. Giảm bớt các quy
                      chế phức tạp làm quá trình du học Hàn Quốc bị khó khăn.
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                      Việc làm thêm rủng rỉnh
                    </p>
                    <p>
                      Hàn Quốc cho phép du học sinh quốc tế đi làm thêm. Đồng
                      thời cũng tạo nhiều cơ chế hỗ trợ sinh viên tìm việc làm
                      thêm. Bạn có thể làm việc ngay tại trường hoặc làm thêm ở
                      ngoài. Các công việc cũng rất nhiều, thoải mái lựa chọn.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq4"
                    className="collapsed question"
                  >
                    Có lưu ý gì về đồ dùng mang theo khi sang Hàn Quốc?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>Khi sang Hàn, du học sinh lưu ý nên mang theo:</p>
                    <p>• Các loại thuốc</p>
                    <p>• Ổ cắm chuyển đổi bởi ở Hàn chủ yếu dùng ổ cắm tròn.</p>
                    <p>• Không mang hoa quả, đồ ăn khô như giò, ruốc, thịt.</p>
                    <p>• Quần áo dày vừa phải.</p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq5"
                    className="collapsed question"
                  >
                    Nên đi du học vào tháng mấy?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Về thời gian nhập học 1 năm sẽ có 4 kỳ là tháng 3, tháng
                      6, tháng 9 và tháng 12. Tuy nhiên thời điểm lí tưởng để đi
                      du học Hàn Quốc là tháng 3, tháng 6 và tháng 9 tương ứng
                      với mùa xuân, hạ và thu. Lí do là bởi khí hậu trong các
                      tháng này gần giống với khí hậu Việt Nam, tuy nhiên mùa hè
                      lại không quá nóng và mùa thu thì mát mẻ hơn. Nhờ vậy, du
                      học sinh có thể thích nghi với cuộc sống mới nhanh hơn mà
                      không bị ảnh hưởng quá nhiều bởi sự thay đổi đột ngột của
                      thời tiết giữa hai nước. Ngoài ra đặc biệt đối với du học
                      nghề sẽ xét tuyển liên tục và các bạn có thể nhập học mà
                      không cần đợi theo kỳ.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq7"
                    className="collapsed question"
                  >
                    Tôi đã từng đi xuất khẩu lao động Đài Loan và bỏ trốn, nhưng
                    sau đó đã ra đầu thú. Vậy, tôi vẫn có thể tiếp tục đi xuất
                    khẩu lao động Hàn Quốc làm việc được nữa hay không?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq7"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Nếu đúng là người lao động đã từng bỏ trốn khi tham gia
                      xuất khẩu lao động ở nước khác có ý thức tự giác ra đầu
                      thú thì người lao động đó vẫn có thể đi làm việc tai Hàn
                      Quốc được. Trong trường hợp lao động bỏ trốn khi tham đang
                      trong hợp đồng xuất khẩu lao động ở nước khác mà bị công
                      an bắt, lao động vẫn có khả năng tham gia xuất khẩu lao
                      động Hàn Quốc làm việc được – con số này không cao – nhưng
                      cần phải tư vấn thêm cho những lao động rơi vào trường hợp
                      này.
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq6"
                    className="collapsed question"
                  >
                    Trên người có hình xăm thì có thể đi xuất khẩu lao động Hàn
                    Quốc được không?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq6"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Đối với lao động có hình xăm trên người cũng không ảnh
                      hưởng gì đến quá trình tham gia đi Xuất khẩu lao động Hàn
                      Quốc. Tuy nhiên nếu như hình xăm của bạn quá lớn điều này
                      cũng có thể làm mất điểm trong mắt các nhà tuyển dụng Hàn
                      Quốc.
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
