import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { vi } from "date-fns/locale";
import "react-tabs/style/react-tabs.css";
import { usePathName, usePost } from "../hooks";
import "../assets/css/lineClamp.css";

const newsContent = [
  {
    _id: 1,
    title: "Tuyển sinh du học Hàn Quốc",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    metaUrl: "tuyen-sinh-du-hoc-han-quoc-2022",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320398641_21cded1bb15a2dfae7684a8c05e09e66.jpg",
  },
  {
    _id: 2,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    metaUrl: "tuyen-sinh-du-hoc-han-quoc-2022",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320629262_7729baaac253c1a7d80a6415106e032e.jpg",
  },
  {
    _id: 3,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    metaUrl: "tuyen-sinh-du-hoc-han-quoc-2022",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937322559207_a7104d74b5e2a6b32550656baecdb139.jpg",
  },
  {
    _id: 4,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    metaUrl: "tuyen-sinh-du-hoc-han-quoc-2022",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320398641_21cded1bb15a2dfae7684a8c05e09e66.jpg",
  },
  {
    _id: 5,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    metaUrl: "tuyen-sinh-du-hoc-han-quoc-2022",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320629262_7729baaac253c1a7d80a6415106e032e.jpg",
  },
  {
    _id: 6,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    metaUrl: "tuyen-sinh-du-hoc-han-quoc-2022",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937322559207_a7104d74b5e2a6b32550656baecdb139.jpg",
  },
];

function SearchResult() {
  const [news, setNews] = useState([]);
  const { handleGetPathName, searchResult,SearchResult,searchResultPage } = usePathName();
  const { post, handleGetSearchResult } = usePost();
  const [currentPage, setCurrentPage] = useState(1);
  const result = post.length;

  // const result = post.filter((item) =>
  //   item.title.toLowerCase().includes(searchResult.toLowerCase())
  // );
  // const result = post.find((item) => item.title === "ff"

  // );
  console.log(result);
  useEffect(() => {
    setNews(news);

    // handleGetSearchResult(searchResult)
  }, [currentPage]);
  console.log(post);

  return (
    <main id="main" data-aos="fade-up">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 style={{ fontWeight: "bold" }}>Kết quả tìm kiếm</h2>
            <ol>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    handleGetPathName("/");
                  }}
                >
                  Trang Chủ
                </Link>
              </li>
              <li>Kết quả</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="inner-page">
        <div className="container">
          <p style={{ marginBottom: 30, marginTop: 30 }}>
            Tìm thấy {post.length} kết quả cho từ khóa "{searchResultPage}"
          </p>

          {post.map((item, index) => {
            return (
              <div
                key={item?._id}
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
                    to={`/thong-tin-du-hoc/${item._id}`}
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
                    style={{ fontSize: "14px !important" }}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </div>
              </div>
            );
          })}

          {/* Load more button */}
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
              >
                Xem Thêm
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SearchResult;
