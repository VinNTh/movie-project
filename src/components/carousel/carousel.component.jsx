import React from "react";
import "./carousel.component.css";

function Carousel() {
  return (
    <div style={{marginTop:"50px"}}>
      <div id="demo" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className />
          <li data-target="#demo" data-slide-to={1} className />
          <li data-target="#demo" data-slide-to={2} className />
          <li data-target="#demo" data-slide-to={3} className="active" />
          <li data-target="#demo" data-slide-to={4} className />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item item1">
            <div>
              <a
                className="venobox vbox-item"
                data-vbtype="video"
                href="https://www.youtube.com/watch?v=NWEe2BGhOUA&feature=emb_logo"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
          <div className="carousel-item item2">
            <div>
              <a
                className="venobox vbox-item"
                data-vbtype="video"
                href="https://www.youtube.com/watch?v=_ffRLhWSPGk&feature=emb_logo"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
          <div className="carousel-item item3">
            <div>
              <a
                className="venobox vbox-item"
                data-vbtype="video"
                href="https://www.youtube.com/watch?v=9m5HbGDFBrI&feature=emb_logo"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
          <div className="carousel-item item4 active">
            <div>
              <a
                className="venobox vbox-item"
                data-vbtype="video"
                href="https://www.youtube.com/watch?v=puQyZsaTtqY&feature=emb_logo"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
          <div className="carousel-item item5">
            <div>
              <a
                className="venobox vbox-item"
                data-vbtype="video"
                href="https://www.youtube.com/watch?v=Ncwkodt5dA4"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div id="dropdown-tool" className="dropitem">
          <div className="dropdown">
            <button
              type="button"
              className="btn dropdown-toggle toggle1"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Phim
            </button>
            <div
              className="dropdown-menu"
              x-placement="bottom-start"
              style={{
                position: "absolute",
                willChange: "transform",
                top: 0,
                left: 0,
                transform: "translate3d(0px, 38px, 0px)",
              }}
            >
              <a className="dropdown-item" href="#">
                Chị Mười Ba: 3 Ngày Sinh Tử (C18)
              </a>
              <a className="dropdown-item" href="#">
                Lừa Đểu Gặp Lừa Đảo - The Con - Heartist (C16)
              </a>
              <a className="dropdown-item" href="#">
                Thơ Săn Quái Vật - Monster Hunter (C13)
              </a>
              <a className="dropdown-item" href="#">
                Tay Xạ Thủ - The Marksman
              </a>
              <a className="dropdown-item" href="#">
                Cuộc Sống Nhiệm Màu - Soul - (P)
              </a>
              <a className="dropdown-item" href="#">
                Di Nguyện Bí Ẩn - The Day I Died - (C16)
              </a>
              <a className="dropdown-item" href="#">
                Bạn Quỷ - Come Play (C16)
              </a>
              <a className="dropdown-item" href="#">
                Nam Sinh Số 11 - The Child Who Would Not Come(C18)
              </a>
              <a className="dropdown-item" href="#">
                Sám Hối(C18)
              </a>
              <a className="dropdown-item" href="#">
                "Em" Là Của Em (C16)
              </a>
              <a className="dropdown-item" href="#">
                Phòng Chat Quỷ Ám - Host(C18)
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Rạp
            </button>
            <div
              className="dropdown-menu"
              x-placement="bottom-start"
              style={{
                position: "absolute",
                willChange: "transform",
                top: 0,
                left: 0,
                transform: "translate3d(0px, 38px, 0px)",
              }}
            >
              <a className="dropdown-item" href="#">
                Vui lòng chọn phim
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Ngày xem
            </button>
            <div
              className="dropdown-menu"
              x-placement="bottom-start"
              style={{
                position: "absolute",
                willChange: "transform",
                top: 0,
                left: 0,
                transform: "translate3d(0px, 38px, 0px)",
              }}
            >
              <a className="dropdown-item" href="#">
                Vui lòng chọn phim và rạp
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Suất chiếu
            </button>
            <div
              className="dropdown-menu"
              x-placement="bottom-start"
              style={{
                position: "absolute",
                willChange: "transform",
                top: 0,
                left: 0,
                transform: "translate3d(0px, 38px, 0px)",
              }}
            >
              <a className="dropdown-item" href="#">
                Vui lòng chọn phim, rạp và ngày xem
              </a>
            </div>
          </div>
          <button className="buy">MUA VÉ NGAY</button>
        </div>
        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    </div>
  );
}

export default Carousel;
