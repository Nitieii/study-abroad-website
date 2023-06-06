import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import CheckOutSideClick from "../components/CheckOutSideClick";
import { usePost, usePathName } from "../hooks";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const { handleGetSearchResult, handleSetSelectedIndex } = usePost();
  const { handleGetPathName, pathName, handleSearch, searchResult } =
    usePathName();
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  let menuRef = useRef();
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  // console.log(handleGetPathName(window.location.pathname))
  const toggleMobileMenu = () => {
    select("#navbar").classList.add("navbar-mobile");
    select("#navbar").classList.add("bi-list");
    select("#navbar").classList.add("bi-x");
  };

  const handleDropdownMobile = (e) => {
    if (select("#navbar").classList.contains("navbar-mobile")) {
      e.preventDefault();
      e.nextElementSibling.classList.toggle("dropdown-active");
    }
  };
  // console.log(searchResult)
  // console.log(showSearch)
  const handleShowSearch = () => {
    setShowSearch(true);
  };

  const handleGetSearch = () => {
    if (searchResult === "") {
      return;
    } else {
      handleGetSearchResult(searchResult);
      setShowSearch(false);
    }
  };

  const handleClose = () => {
    setShowSearch(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleGetSearchResult(searchResult);
      setShowSearch(false);
    }
  };

  const handleCloseNavMobile = () => {
    select("#navbar").classList.remove("navbar-mobile");
    select("#navbar").classList.remove("bi-list");
    select("#navbar").classList.remove("bi-x");
  };

  useEffect(() => {
    // setPathName(window.location.pathname);
    handleGetPathName(window.location.pathname);
    // console.log(pathName);
    const navLinks = select("#navbar .nav-link", true);

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === pathName) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, [pathName]);
  // console.log(searchResult);

  return (
    <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <Link to="mailto:contact@example.com">
                mkhqmanpower@gmail.com
              </Link>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>0974 082 088</span>
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
            <img
              src="https://todo-list-app-asdfasd.s3.amazonaws.com/logo.png"
              alt=""
            />
          </Link>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/"
                  onClick={() => {
                    // setPathName("/");
                    handleCloseNavMobile();
                  }}
                >
                  Trang chủ
                </Link>
              </li>
              <li className="dropdown">
                <Link
                  to="/thong-tin-du-hoc"
                  onClick={() => {
                    // setPathName("/thong-tin-du-hoc");
                    handleGetPathName("/thong-tin-du-hoc");
                    handleCloseNavMobile();
                  }}
                >
                  <span>Thông tin du học</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li className="dropdown">
                    <Link
                      to="/thong-tin-du-hoc"
                      onClick={() => {
                        // setPathName("/thong-tin-du-hoc");
                        handleGetPathName("/thong-tin-du-hoc");
                        handleCloseNavMobile();
                      }}
                    >
                      <span onClick={() => handleSetSelectedIndex(0)}>
                        Du học Hàn Quốc
                      </span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          to="/thong-tin-du-hoc"
                          onClick={() => {
                            // setPathName("/thong-tin-du-hoc");
                            handleGetPathName("/thong-tin-du-hoc");
                            handleCloseNavMobile();
                          }}
                        >
                          Du học tiếng
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/thong-tin-du-hoc"
                          onClick={() => {
                            // setPathName("/thong-tin-du-hoc");
                            handleGetPathName("/thong-tin-du-hoc");
                            handleCloseNavMobile();
                          }}
                        >
                          Du học nghề
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="/thong-tin-du-hoc"
                      onClick={() => handleSetSelectedIndex(1)}
                    >
                      Du học Đài Loan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/thong-tin-du-hoc"
                      onClick={() => handleSetSelectedIndex(2)}
                    >
                      Du học Trung Quốc
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/thong-tin-du-hoc"
                      onClick={() => handleSetSelectedIndex(3)}
                    >
                      Du học Đức
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/thong-tin-du-hoc"
                      onClick={() => handleSetSelectedIndex(4)}
                    >
                      Du học Úc
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/tin-tuc"
                  onClick={() => {
                    // setPathName("/tin-tuc");
                    handleGetPathName("/tin-tuc");
                    handleCloseNavMobile();
                  }}
                >
                  Tin tức
                </Link>
              </li>
              <li className="dropdown">
                <Link
                  to="/goc-du-hoc-sinh"
                  onClick={() => {
                    // setPathName("/goc-du-hoc-sinh");
                    handleGetPathName("/goc-du-hoc-sinh");
                    handleCloseNavMobile();
                  }}
                >
                  <span>Góc du học sinh</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link
                      to="/goc-du-hoc-sinh"
                      onClick={() => handleSetSelectedIndex(0)}
                    >
                      Du học Hàn Quốc
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/goc-du-hoc-sinh"
                      onClick={() => handleSetSelectedIndex(1)}
                    >
                      Du học Đài Loan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/goc-du-hoc-sinh"
                      onClick={() => handleSetSelectedIndex(2)}
                    >
                      Du học Trung Quốc
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/goc-du-hoc-sinh"
                      onClick={() => handleSetSelectedIndex(3)}
                    >
                      Du học Đức
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/goc-du-hoc-sinh"
                      onClick={() => handleSetSelectedIndex(4)}
                    >
                      Du học Úc
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/van-hoa-cac-nuoc"
                  onClick={() => {
                    // setPathName("/van-hoa-cac-nuoc");
                    handleGetPathName("/van-hoa-cac-nuoc");
                    handleCloseNavMobile();
                  }}
                >
                  Văn hoá các nước
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/lien-he"
                  onClick={() => {
                    // setPathName("/lien-he");
                    handleGetPathName("/lien-he");
                    handleCloseNavMobile();
                  }}
                >
                  Liên hệ
                </Link>
              </li>

              <li>
                <Link
                  style={{ fontSize: "24px" }}
                  onClick={handleShowSearch}
                  // to={searchResult ? "/ket-qua" : null}
                >
                  <MdSearch />
                  {showSearch && (
                    <CheckOutSideClick onClickOutSide={handleClose}>
                      <div className="group">
                        <input
                          required=""
                          type="text"
                          className="input"
                          placeholder="Nhập từ khóa tìm kiếm"
                          onChange={(e) => {
                            handleSearch(e.target.value);
                          }}
                          onKeyDown={handleKeyDown}
                          value={searchResult}
                        />
                        <MdSearch
                          className="navbar-searchIcon"
                          onClick={() => handleGetSearch()}
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                      </div>
                    </CheckOutSideClick>
                  )}
                </Link>
              </li>
            </ul>
            <CheckOutSideClick onClickOutSide={handleCloseNavMobile}>
              <i
                className="bi bi-list mobile-nav-toggle"
                onClick={toggleMobileMenu}
              ></i>
            </CheckOutSideClick>
          </nav>
        </div>
      </header>
    </>
  );
}
