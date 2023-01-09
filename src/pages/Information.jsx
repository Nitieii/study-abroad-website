import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { id, vi } from "date-fns/locale";
import "react-tabs/style/react-tabs.css";
import Fanpage from "../components/Fanpage";
import { usePathName } from "../hooks";
import usePost from "../hooks/usePost";
import "../assets/css/lineClamp.css";

const tabs = [
  {
    index: 0,
    title: "Du học Hàn Quốc",
    type: "du-hoc-han-quoc",
  },
  {
    index: 1,
    title: "Du học Đài Loan",
    type: "du-hoc-dai-loan",
  },
  {
    index: 2,
    title: "Du học Trung Quốc",
    type: "du-hoc-trung-quoc",
  },
  {
    index: 3,
    title: "Du học Đức",
    type: "du-hoc-duc",
  },
  {
    index: 4,
    title: "Du học Úc",
    type: "du-hoc-uc",
  },
];


const Information = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { handleGetPathName } = usePathName();
  const [currentPage, setCurrentPage] = useState(1);

  const { handleGetPost, post, handleChangeSetType, type, totalPage } = usePost();
  const cat = "thong-tin-du-hoc";
  // const type = 'du-hoc-han-quoc'
  useEffect(() => {
    handleGetPost(currentPage, cat, type);
  }, [currentPage, type]);

  return (
    <main id="main" data-aos="fade-up">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 style={{ fontWeight: "bold" }}>Thông Tin Du Học</h2>
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
              <li>Thông Tin Du Học</li>
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
                      handleChangeSetType(tab.type);

                      return (
                        <TabPanel key={index}>
                          {post.map((item, index) => {
                            return (
                              <div
                                key={item?._id}
                                className="row"
                                style={{
                                  borderBottom: "1px solid #e6e6e6",
                                  marginTop: 25,
                                  paddingBottom: 1,
                                }}
                              >
                                <div className="col-md-4">
                                  <img
                                    src={item?.thumbnail_url}
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
                                    to={`/thong-tin-du-hoc/${item?._id}`}
                                  >
                                    {item?.title}
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
                                  <div
                                    className="line-clamp"
                                    style={{ fontSize: "14px" }}
                                    dangerouslySetInnerHTML={{
                                      __html: item.description,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            );
                          })}
                        </TabPanel>
                      );
                    }

                    return <TabPanel>{tab}</TabPanel>;
                  })}
                <TabPanel></TabPanel>
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

            </div>

            <Fanpage />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Information;
