import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [pathName, setPathName] = useState(window.location.pathname);

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const toggleMobileMenu = () => {
    select("#navbar").classList.toggle("navbar-mobile");
    select("#navbar").classList.toggle("bi-list");
    select("#navbar").classList.toggle("bi-x");
  };

  useEffect(() => {
    setPathName(window.location.pathname);

    const navLinks = select("#navbar .nav-link", true);

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === pathName) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, [pathName]);

  return (
    <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <Link to="mailto:contact@example.com">contact@example.com</Link>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+1 5589 55488 55</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <Link to="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>

      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="" />
          </Link>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/"
                  onClick={() => {
                    setPathName("/");
                  }}
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/thong-tin-du-hoc"
                  onClick={() => {
                    setPathName("/thong-tin-du-hoc");
                  }}
                >
                  Thông tin du học
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/tin-tuc"
                  onClick={() => {
                    setPathName("/tin-tuc");
                  }}
                >
                  Tin tức
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto "
                  to="/goc-du-hoc-sinh"
                  onClick={() => {
                    setPathName("/goc-du-hoc-sinh");
                  }}
                >
                  Góc du học sinh
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/van-hoa-cac-nuoc"
                  onClick={() => {
                    setPathName("/van-hoa-cac-nuoc");
                  }}
                >
                  Văn hoá các nước
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/lien-he">
                  Liên hệ
                </Link>
              </li>

              <li>
                <Link style={{ fontSize: "24px" }}>
                  <MdSearch />
                </Link>
              </li>
            </ul>
            <i
              className="bi bi-list mobile-nav-toggle"
              onClick={toggleMobileMenu}
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
}
