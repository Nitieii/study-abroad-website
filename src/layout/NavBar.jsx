import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import CheckOutSideClick from "../components/CheckOutSideClick";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [pathName, setPathName] = useState(window.location.pathname);
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  let menuRef = useRef();
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

  const handleDropdownMobile = (e) => {
    if (select("#navbar").classList.contains("navbar-mobile")) {
      e.preventDefault();
      e.nextElementSibling.classList.toggle("dropdown-active");
    }
  };

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
    // select('#navbar').classList.toggle('navbar-select')
  };

  const handleClose = () => {
    setShowSearch(false);
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

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

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
                    handleDropdownMobile();
                  }}
                >
                  Trang chủ
                </Link>
              </li>
              <li class="dropdown">
                <Link
                  to="/thong-tin-du-hoc"
                  onClick={() => {
                    setPathName("/thong-tin-du-hoc");
                    handleDropdownMobile();
                  }}
                >
                  <span>Thông tin du học</span>{" "}
                  <i class="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li className="dropdown">
                    <Link
                      to="/thong-tin-du-hoc"
                      onClick={() => {
                        console.log("click");
                        setPathName("/thong-tin-du-hoc");
                        handleDropdownMobile();
                      }}
                    >
                      <span>Du học Hàn Quốc</span>{" "}
                      <i class="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          to="/thong-tin-du-hoc"
                          onClick={() => {
                            setPathName("/thong-tin-du-hoc");
                            handleDropdownMobile();
                          }}
                        >
                          Du học tiếng
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/thong-tin-du-hoc"
                          onClick={() => {
                            setPathName("/thong-tin-du-hoc");
                            handleDropdownMobile();
                          }}
                        >
                          Du học nghề
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/thong-tin-du-hoc">Du học Đài Loan</a>
                  </li>
                  <li>
                    <a href="/thong-tin-du-hoc">Du học Trung Quốc</a>
                  </li>
                  <li>
                    <a href="/thong-tin-du-hoc">Du học Đức</a>
                  </li>
                  <li>
                    <a href="/thong-tin-du-hoc">Du học Úc</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/tin-tuc"
                  onClick={() => {
                    setPathName("/tin-tuc");
                    handleDropdownMobile();
                  }}
                >
                  Tin tức
                </Link>
              </li>
              <li class="dropdown">
                <Link
                  to="/goc-du-hoc-sinh"
                  onClick={() => {
                    setPathName("/goc-du-hoc-sinh");
                    handleDropdownMobile();
                  }}
                >
                  <span>Góc du học sinh</span>{" "}
                  <i class="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <a href="/thong-tin-du-hoc">Du học Hàn Quốc</a>
                  </li>
                  <li>
                    <a href="/thong-tin-du-hoc">Du học Đài Loan</a>
                  </li>
                  <li>
                    <a href="/thong-tin-du-hoc">Du học Trung Quốc</a>
                  </li>
                  <li>
                    <a href="/thong-tin-du-hoc">Du học Đức</a>
                  </li>
                  <li>
                    <a href="/thong-tin-du-hoc">Du học Úc</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/van-hoa-cac-nuoc"
                  onClick={() => {
                    setPathName("/van-hoa-cac-nuoc");
                    handleDropdownMobile();
                  }}
                >
                  Văn hoá các nước
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/lien-he"  onClick={() => {
                    setPathName("/lien-he");
                   
                  }}>
                  Liên hệ
                </Link>
              </li>

              <li>
                <Link style={{ fontSize: "24px" }}>
                  <MdSearch onClick={handleShowSearch} />
                  {showSearch && (
                    <CheckOutSideClick onClickOutSide={handleClose}>
                      <div class="group">
                        <input
                          required=""
                          type="text"
                          class="input"
                          placeholder="Nhập từ khóa tìm kiếm"
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                      </div>
                    </CheckOutSideClick>
                  )}
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
