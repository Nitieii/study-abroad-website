import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import useCulture from "../hooks/useCulture";
import { vi } from "date-fns/locale";
import "react-tabs/style/react-tabs.css";
import Fanpage from "../components/Fanpage";
import { usePathName, usePost } from "../hooks";
import "../assets/css/lineClamp.css";

const tabs = [
  {
    index: 0,
    title: "Du học Hàn Quốc",
  },
  {
    index: 1,
    title: "Du học Đài Loan",
  },
  {
    index: 2,
    title: "Du học Trung Quốc",
  },
  {
    index: 3,
    title: "Du học Đức",
  },
  {
    index: 4,
    title: "Du học Úc",
  },
];

const newsContent = [
  {
    _id: 1,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320398641_21cded1bb15a2dfae7684a8c05e09e66.jpg",
  },
  {
    _id: 2,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320629262_7729baaac253c1a7d80a6415106e032e.jpg",
  },
  {
    _id: 3,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937322559207_a7104d74b5e2a6b32550656baecdb139.jpg",
  },
  {
    _id: 4,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320398641_21cded1bb15a2dfae7684a8c05e09e66.jpg",
  },
  {
    _id: 5,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937320629262_7729baaac253c1a7d80a6415106e032e.jpg",
  },
  {
    _id: 6,
    title: "Tuyển sinh du học Hàn Quốc 2022",
    content:
      "<p>Kỳ tuyển sinh Du học Hàn Quốc kỳ tháng 6 đã chính thức kết thúc, bây giờ là thời điểm tốt nhất để các bạn chuẩn bị hồ sơ cho kỳ tháng 9/2021 và 12/2021 du học Hàn Quốc.</p>",
    createdAt: "2022-12-06T07:00:00.000Z",
    thumbnail:
      "https://todo-list-app-asdfasd.s3.amazonaws.com/z3937322559207_a7104d74b5e2a6b32550656baecdb139.jpg",
  },
];

const Culture = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { handleGetPathName } = usePathName();
  const { culture ,type, handleGetCulture, totalPage } = usePost();
  const [currentPage, setCurrentPage] = useState(1);
  const cat = 'van-hoa-cac-nuoc'

  useEffect(() => {
    setLoading(false);
    handleGetCulture(currentPage, cat, type);
  }, [currentPage,cat,type]);

  console.log(culture)

  return (
    <main id="main" data-aos="fade-up">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 style={{ fontWeight: "bold" }}>Văn Hoá Các Nước</h2>
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
              <li>Văn Hoá Các Nước</li>
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

          <div className="row">
            <div className="col-lg-8">
              <Tabs
                selectedIndex={selectedIndex}
                onSelect={(tabIndex) => setSelectedIndex(tabIndex)}
              >
                <TabList>
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.index}
                      style={{
                        color:
                          selectedIndex === tab.index ? "#2f9931" : "black",
                        borderTop:
                          selectedIndex === tab.index
                            ? "2px solid #2f9931"
                            : "none",
                        borderLeft:
                          selectedIndex === tab.index
                            ? "2px solid #2f9931"
                            : "none",
                        borderRight:
                          selectedIndex === tab.index
                            ? "2px solid #2f9931"
                            : "none",
                        fontWeight:
                          selectedIndex === tab.index ? "600" : "normal",
                        fontFamily: "Roboto",
                      }}
                    >
                      {tab.title}
                    </Tab>
                  ))}
                </TabList>

                {tabs &&
                  tabs.map((tab, index) => {
                    if (index === selectedIndex) {
                      return (
                        <TabPanel key={index}>
                          {culture.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="row"
                                style={{
                                  borderBottom: "1px solid #e6e6e6",
                                  marginTop: 25,
                                  paddingBottom: 1,
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
                                    {formatDistanceToNow(
                                      new Date(item.createdAt),
                                      {
                                        addSuffix: true,
                                        locale: vi,
                                      }
                                    )}{" "}
                                    -{" "}
                                    <span
                                      style={{
                                        color: "#2f9931",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      MK Group
                                    </span>
                                  </p>
                                  <p
                                    className="line-clamp"
                                    style={{ fontSize: "14px" }}
                                    dangerouslySetInnerHTML={{
                                      __html: item.description,
                                    }}
                                  ></p>
                                </div>
                              </div>
                            );
                          })}
                        </TabPanel>
                      );
                    }

                    return <TabPanel>{tab}</TabPanel>;
                  })}
                <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 3</h2>
                </TabPanel>
              </Tabs>

              {/* Load more button */}
            { currentPage < totalPage ?
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
            </div>
            : null}
          </div> 

            <Fanpage />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Culture;
