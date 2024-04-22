// /*eslint-disable*/
// import React from "react";

// // reactstrap components
// import { Container } from "reactstrap";
// // core components

// function IndexHeader() {
//   let pageHeader = React.createRef();

//   React.useEffect(() => {
//     if (window.innerWidth > 991) {
//       const updateScroll = () => {
//         let windowScrollTop = window.pageYOffset / 3;
//         pageHeader.current.style.transform =
//           "translate3d(0," + windowScrollTop + "px,0)";
//       };
//       window.addEventListener("scroll", updateScroll);
//       return function cleanup() {
//         window.removeEventListener("scroll", updateScroll);
//       };
//     }
//   });

//   return (
//     <>
//       <div className="page-header clear-filter" filter-color="">
//         <div
//           className="page-header-image"
//           style={{
//             backgroundImage: "url(" + require("assets/img/down.jpg") + ")"
//           }}
//           ref={pageHeader}
//         ></div>
//         <Container>
//           <div className="content-center brand">
//           <img alt="" src="LogoDUNGDEE.png" width="300" height="300" className="d-inline-block align-top"/>
//             <h1 className="h1-seo">มาดูโหงวเฮ้งของตัวเองกัน </h1>
//             <h3>Free for use</h3>
//           </div>
//           <h6 className="category category-absolute">
//             Designed by Duduang Company{" "}
          
          
//             . Coded by Chavalit 
//             .
//           </h6>
        
//         </Container>
//       </div>
//     </>
//   );
// }

// export default IndexHeader;

import React, { useMemo } from "react";
import { Container } from "reactstrap";

function IndexHeader() {
  let pageHeader = React.createRef();
  const [bgImageIndex, setBgImageIndex] = React.useState(0);

  const images = useMemo(() => [
    require("assets/img/down1.jpg"),
    require("assets/img/down2.jpg"),
    require("assets/img/down4.jpg"),
    // เพิ่ม URL ของภาพพื้นหลังเพิ่มเติมตามต้องการ
  ], []);

  React.useEffect(() => {
    const updateBgImage = () => {
      const newIndex = (bgImageIndex + 1) % images.length;
      pageHeader.current.style.backgroundImage = `url(${images[newIndex]})`;
      setBgImageIndex(newIndex);
    };

    const interval = setInterval(updateBgImage, 3000); // เปลี่ยนภาพพื้นหลังทุก 5 วินาที

    return () => clearInterval(interval);
  }, [bgImageIndex, images, pageHeader]);

  return (
    <>
      <div className="page-header clear-filter" filter-color="">
        <div
          className="page-header-image"
          style={{ backgroundSize: "cover", backgroundPosition: "center", transition: "background-image 1s ease-in-out" }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img alt="" src="LogoDUNGDEE.png" width="300" height="300" className="d-inline-block align-top"/>
            <h1 className="h1-seo">มาดูโหงวเฮ้งของตัวเองกัน </h1>
            <h3>Free for use</h3>
          </div>
          <h6 className="category category-absolute">
            Designed by Duduang Company . Coded by Chavalit .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;

