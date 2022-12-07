export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <img src="/logo.png" width={170} />
              <p>
                47 Tam Khương <br />
                Phường Khương Thượng, Hà Nội
                <br />
                Việt Nam
                <br />
                <br />
                <strong>Số điện thoại:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Trang chủ</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Thông tin du học</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Tin tức</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Góc du học sinh</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Văn hoá các nước</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Trang mạng xã hội của chúng tôi</h4>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
