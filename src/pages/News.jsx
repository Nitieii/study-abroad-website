import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { vi } from "date-fns/locale";
import "react-tabs/style/react-tabs.css";
import Fanpage from "../components/Fanpage";
import { usePathName,usePost } from "../hooks";
import "../assets/css/lineClamp.css";



const News = () => {

  const {handleGetPathName} =usePathName()
  const {post,handleGetNews, totalPage} = usePost()
  const cat = "tin-tuc"
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    handleGetNews(currentPage,cat)
  }, [currentPage]);
console.log(post)
  return (
    <main id="main" data-aos="fade-up">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 style={{ fontWeight: "bold" }}>Tin Tức</h2>
            <ol>
              <li>
                <Link to="/" onClick={() => {
                  handleGetPathName("/")
                }}>Trang Chủ</Link>
              </li>
              <li>Tin Tức</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="inner-page">
        <div className="container">
          <p style={{ marginBottom: 30, marginTop: 30 }}>
            Tổng hợp các thông tin du học Hàn Quốc mới nhất, cập nhật liên tục.
            Giúp các bạn học sinh, sinh viên đến gần hơn với ước mơ du học của
            mình.
          </p>

          {post.map((item, index) => {
            return (
              <div
                key={index}
                className="row"
                style={{
                  borderBottom: "1px solid #e6e6e6",
                  marginTop: 20,
                  paddingBottom: 1,
                  marginBottom: 10,
                }}
              >
                <div className="col-md-4">
                  <img
                    src={item.thumbnail_url}
                    alt=""
                    style={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <Link
                    to={`/thong-tin-du-hoc/${item?._id}`}
                    className="news-title"
                    style={{
                      marginBottom: 5,
                      marginTop: 10,
                      fontSize: 20,
                      color: "black",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Link>

                  <p
                    style={{
                      fontSize: 12,
                      marginBottom: 10,
                    }}
                  >
                    🗓️{" "}
                    {formatDistanceToNow(new Date(item.createdAt), {
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
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </div>
              </div>
            );
          })}

          {/* Load more button */}
          {currentPage < totalPage ?
                <div className="row ">
                  <div className="col-md-12 d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-primary"
                      style={{
                        marginTop: 30,
                        marginBottom: 30,
                        fontSize: 18,
                        paddingLeft: 30,
                        paddingRight: 30,
                      }}
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Xem Thêm
                    </button>
                  </div>
                </div> : null}
          <Fanpage/>
        </div>
      </section>
    </main>
  );
};

export default News;
