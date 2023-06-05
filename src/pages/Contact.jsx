import { Link } from "react-router-dom";
import { usePathName } from "../hooks";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
   const { handleGetPathName } = usePathName();
   const form  = useRef()
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
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope"></i>
                <h3>Email</h3>
                <p>contact@example.com</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call"></i>
                <h3>Liên hệ</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6 ">
              <iframe
                className="mb-4 mb-lg-0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
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
