import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

export default function Footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>
                MKGroup<span>.</span>
              </h3>
              <p>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <br />
                <strong>Điện thoại:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Đường Dẫn</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link href="#">Trang chủ</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link href="#">Thông tin du học</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link href="#">Tin tức</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link href="#">Góc du học sinh</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link href="#">Văn hoá các nước</Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>

              <div class="social-links mt-3">
                <a href="#" class="twitter">
                  <i class="bx bxl-twitter"></i>
                </a>
                <a href="#" class="facebook">
                  <i class="bx bxl-facebook"></i>
                </a>
                <a href="#" class="instagram">
                  <i class="bx bxl-instagram"></i>
                </a>
                <a href="#" class="google-plus">
                  <i class="bx bxl-skype"></i>
                </a>
                <a href="#" class="linkedin">
                  <i class="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-4">
        <div class="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>MK Group</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Thiết kế bởi <a href="https://nitieii.netlify.app/">Ngo Tuan Anh</a>
        </div>
      </div>
    </footer>
  );
}
