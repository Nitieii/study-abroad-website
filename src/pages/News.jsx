import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { vi } from "date-fns/locale";
import "react-tabs/style/react-tabs.css";

const tabs = [
  {
    index: 0,
    title: "Các ưu đãi và học bổng du học",
  },
  {
    index: 1,
    title: "Cẩm nang du học",
  },
  {
    index: 2,
    title: "Chính sách du học",
  },
];

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

const News = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    setNews(newsContent);
    setLoading(false);
  }, []);

  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 style={{ fontWeight: "bold" }}>Tin Tức</h2>
            <ol>
              <li>
                <Link to="/">Trang Chủ</Link>
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

          {news.map((item, index) => {
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
                    src={item.thumbnail}
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
                    to={`/${item.metaUrl}`}
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
                  <p
                    style={{ fontSize: "14px" }}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
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
        <div className="container col-lg-4">
              <h5
                className="align-items-center"
                style={{
                  borderBottom: "1px solid #2f9931",
                  marginBottom: 15,
                }}
              >
                Facebook fanpage
              </h5>

              <div className="row w-100">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDuHocMKGROUP&tabs=timeline&width=350&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=810266060395549"
                  width="350"
                  height="300"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
        </div>
        
      </section>
    </main>
  );
};

export default News;
