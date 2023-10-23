import { Link } from "react-router-dom";
import { usePathName } from "../hooks";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./select.css";

const Contact = () => {
  const { handleGetPathName } = usePathName();
  const form = useRef();
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
    e.target.reset();
  };

  return (
    <main id="main" data-aos="fade-up">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 style={{ fontWeight: "bold" }}>Liên Hệ</h2>
            <ol>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    handleGetPathName("/");
                  }}
                >
                  Trang chủ
                </Link>
              </li>
              <li>Liên hệ</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="contact" className="contact" style={{ marginTop: 30 }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title"></div>

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
                <p>mkgroup.manpower68@gmail.com</p>
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
                      <option
                        value=""
                        disabled
                        selected
                        className={styles.placeholder}
                      >
                        Hình thức liên lạc
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
                        Loại hình du học
                      </option>
                      <option value="carrer">Du học nghề</option>
                      <option value="sound">Du học tiếng</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Chủ đề"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Nội dung bạn muốn gửi đến chúng tôi..."
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
    </main>
  );
};

export default Contact;
