import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

export default function NavBar() {
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
          <Link to="index.html" className="logo">
            <img src="/logo.png" alt="" />
          </Link>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="#about">
                  Thông tin du học
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="#services">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto " to="#portfolio">
                  Góc du học sinh
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="#team">
                  Văn hoá các nước
                </Link>
              </li>
              {/* <li className="dropdown">
           <Link to="#">
             <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
           </Link>
           <ul>
             <li>
               <Link to="#">Drop Down 1</Link>
             </li>
             <li className="dropdown">
               <Link to="#">
                 <span>Deep Drop Down</span>{" "}
                 <i className="bi bi-chevron-right"></i>
               </Link>
               <ul>
                 <li>
                   <Link to="#">Deep Drop Down 1</Link>
                 </li>
                 <li>
                   <Link to="#">Deep Drop Down 2</Link>
                 </li>
                 <li>
                   <Link to="#">Deep Drop Down 3</Link>
                 </li>
                 <li>
                   <Link to="#">Deep Drop Down 4</Link>
                 </li>
                 <li>
                   <Link to="#">Deep Drop Down 5</Link>
                 </li>
               </ul>
             </li>
             <li>
               <Link to="#">Drop Down 2</Link>
             </li>
             <li>
               <Link to="#">Drop Down 3</Link>
             </li>
             <li>
               <Link to="#">Drop Down 4</Link>
             </li>
           </ul>
         </li> */}
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
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
}
