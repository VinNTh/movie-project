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
                Ch??? M?????i Ba: 3 Ng??y Sinh T??? (C18)
              </a>
              <a className="dropdown-item" href="#">
                L???a ?????u G???p L???a ?????o - The Con - Heartist (C16)
              </a>
              <a className="dropdown-item" href="#">
                Th?? S??n Qu??i V???t - Monster Hunter (C13)
              </a>
              <a className="dropdown-item" href="#">
                Tay X??? Th??? - The Marksman
              </a>
              <a className="dropdown-item" href="#">
                Cu???c S???ng Nhi???m M??u - Soul - (P)
              </a>
              <a className="dropdown-item" href="#">
                Di Nguy???n B?? ???n - The Day I Died - (C16)
              </a>
              <a className="dropdown-item" href="#">
                B???n Qu??? - Come Play (C16)
              </a>
              <a className="dropdown-item" href="#">
                Nam Sinh S??? 11 - The Child Who Would Not Come(C18)
              </a>
              <a className="dropdown-item" href="#">
                S??m H???i(C18)
              </a>
              <a className="dropdown-item" href="#">
                "Em" L?? C???a Em (C16)
              </a>
              <a className="dropdown-item" href="#">
                Ph??ng Chat Qu??? ??m - Host(C18)
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
              R???p
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
                Vui l??ng ch???n phim
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
              Ng??y xem
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
                Vui l??ng ch???n phim v?? r???p
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
              Su???t chi???u
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
                Vui l??ng ch???n phim, r???p v?? ng??y xem
              </a>
            </div>
          </div>
          <button className="buy">MUA V?? NGAY</button>
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
