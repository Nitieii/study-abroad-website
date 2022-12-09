import { Link } from "react-router-dom";
import WSPGallery from "../components/Gallery";

const items = [
  {
    _id: 1,
    img: "https://duhocaddie.com/wp-content/uploads/2019/11/66323330_2377842775571114_8500744317583753216_n.jpg",
  },
  {
    _id: 2,
    img: "https://havico.edu.vn/wp-content/uploads/2021/08/Du-hoc-han-quoc-1.png",
  },
  {
    _id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1b2pqaljJTfEo3t0bj9RMGAErAOPXHs9xg&usqp=CAU",
  },
  {
    _id: 4,
    img: "https://duhocvietglobal.com/wp-content/uploads/2019/03/quydinh_visaHQ.jpg",
  },
  {
    _id: 6,
    img: "https://vcdn1-vnexpress.vnecdn.net/2019/12/14/shutterstock-583601698-1576341-1633-5877-1576341968.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=3rCx3Y_inqV2AEm_DAR5Qw",
  },
  {
    _id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTyfva_bD7HBix_a8ce2EsaeoblMz3vh6gA&usqp=CAU",
  },
  {
    _id: 8,
    img: "https://duhoc.thanhgiang.com.vn/sites/default/files/kho-khan-khi-du-hoc-han-quoc.jpg",
  },
  {
    _id: 9,
    img: "https://korea.net.vn/wp-content/uploads/2018/02/du-h%E1%BB%8Dc-sinh-hàn-quốc-e1589186665505.jpg",
  },
];

const Students = () => {
  return (
    <main id="main" data-aos="fade-up">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 style={{ fontWeight: "bold" }}>Góc Du Học Sinh</h2>
            <ol>
              <li>
                <Link to="/">Trang Chủ</Link>
              </li>
              <li>Góc Du Học Sinh</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="inner-page">
        <div className="container">
          <p style={{ marginBottom: 30, marginTop: 0 }}>
            Album tập hợp những khoảnh khắc đáng nhớ của các du học sinh trên
            chặng đường du học cùng MK Group!
          </p>

          <WSPGallery galleryImages={items} />
        </div>
      </section>
    </main>
  );
};

export default Students;
