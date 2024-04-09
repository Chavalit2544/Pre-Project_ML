/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/down.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
          <img alt="" src="LogoDUNGDEE.png" width="300" height="300" className="d-inline-block align-top"/>
            <h1 className="h1-seo">มาดูโหงวเฮ้งของตัวเองกัน </h1>
            <h3>Free for use</h3>
          </div>
          <h6 className="category category-absolute">
            Designed by Duduang Company{" "}
            
            
            . Coded by Chavalit 
            .
          </h6>
          <p>Chavalit</p>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
