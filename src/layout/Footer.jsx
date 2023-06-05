import { Link } from "react-router-dom"; import { MdSearch } from "react-icons/md";




export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>
                MKGroup<span>.</span>
              </h3>
              <p>
                số nhà 200, Block 20, Ô H-TT2 , khu nhà ở Hi Brand, khu đô thị
                mới Văn Phú, P. Phú La, Q. Hà Đông, Hà Nội <br />
                <br />
                - Việt Nam <br />
                <br />
                <strong>Điện thoại:</strong> 0974 082 088
                <br />
                <strong>Email:</strong> mkhqmanpower@gmail.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Đường Dẫn</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/thong-tin-du-hoc">Thông tin du học</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/tin-tuc">Tin tức</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/goc-du-hoc-sinh">Góc du học sinh</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/van-hoa-cac-nuoc">Văn hoá các nước</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>

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

      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>MK Group</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Thiết kế bởi <a href="https://nitieii.netlify.app/">Ngo Tuan Anh</a>
        </div>
      </div>
    </footer>
  );
}
