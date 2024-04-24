// /*eslint-disable*/
// import React from "react";
// // reactstrap components
// import { Container } from "reactstrap";
// // core components

// import ImageUpload from '../../components/ImageUpload';

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
          // <img alt="" src="LogoDUNGDEE.png" width="300" height="300" className="d-inline-block align-top"/>
//           <ImageUpload></ImageUpload>
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

// import React, { useMemo } from "react";
// import { Container } from "reactstrap";


// function IndexHeader() {
//   let pageHeader = React.createRef();
//   const [bgImageIndex, setBgImageIndex] = React.useState(0);

//   const images = useMemo(() => [
//     require("assets/img/down1.jpg"),
//     require("assets/img/down2.jpg"),
//     require("assets/img/down4.jpg"),
//     // เพิ่ม URL ของภาพพื้นหลังเพิ่มเติมตามต้องการ
//   ], []);

//   React.useEffect(() => {
//     const updateBgImage = () => {
//       const newIndex = (bgImageIndex + 1) % images.length;
//       pageHeader.current.style.backgroundImage = `url(${images[newIndex]})`;
//       setBgImageIndex(newIndex);
//     };

//     const interval = setInterval(updateBgImage, 3000); // เปลี่ยนภาพพื้นหลังทุก 5 วินาที

//     return () => clearInterval(interval);
//   }, [bgImageIndex, images, pageHeader]);

//   return (
//     <>
//       <div className="page-header clear-filter" filter-color="">
//         <div
//           className="page-header-image"
//           style={{ backgroundSize: "cover", backgroundPosition: "center", transition: "background-image 1s ease-in-out" }}
//           ref={pageHeader}
//         ></div>
//         <Container>
//           <div className="content-center brand">
//             <img alt="" src="LogoDUNGDEE.png" width="300" height="300" className="d-inline-block align-top"/>
//             <h1 className="h1-seo">มาดูโหงวเฮ้งของตัวเองกัน </h1>
//             <h3>Free for use</h3>
//           </div>
//           <h6 className="category category-absolute">
//             Designed by Duduang Company . Coded by Chavalit .
//           </h6>
//         </Container>
//       </div>
//     </>
//   );
// }

// export default IndexHeader;

// import React, { useMemo } from "react";
// import { Container } from "reactstrap";

// function IndexHeader() {
//   let pageHeader = React.createRef();
//   const [bgImageIndex, setBgImageIndex] = React.useState(0);

//   const images = useMemo(() => [
//     require("assets/img/down1.jpg"),
//     require("assets/img/down2.jpg"),
//     require("assets/img/down4.jpg"),
//     // เพิ่มของภาพพื้นหลัง
//   ], []);

//   React.useEffect(() => {
//     const updateBgImage = () => {
//       const newIndex = (bgImageIndex + 1) % images.length;
//       const header = pageHeader.current;
//       header.style.transition = "background-image 1s ease-in-out, opacity 1s ease-in-out";
//       header.style.opacity = 1; // ทำให้เฉดสีเบลอ
//       setTimeout(() => {
//         header.style.backgroundImage = `url(${images[newIndex]})`;
//         header.style.opacity = 1; // เริ่มทำให้เฉดสีชัดเจนขึ้น
//         setBgImageIndex(newIndex);
//       }, 3000); // รอให้เฉดสีเบลอออกให้เสร็จ
//     };

//     const interval = setInterval(updateBgImage, 3000); // เปลี่ยนภาพพื้นหลังทุก 3 วินาที

//     return () => clearInterval(interval);
//   }, [bgImageIndex, images, pageHeader]);

  
//   return (
//     <>
//       <div className="page-header clear-filter" filter-color="">
//         <div
//           className="page-header-image"
//           style={{ backgroundSize: "cover", backgroundPosition: "center", transition: "background-image 1s ease-in-out" }}
//           ref={pageHeader}
//         ></div>
//         <Container>
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//             <div>
//               <img alt="" src="LogoDUNGDEE.png" width="300" height="300" className="d-inline-block align-top"/>
//               <h1 className="h1-seo">มาดูโหงวเฮ้งของตัวเองกัน </h1>
//               <h3>ฟรีสำหรับการใช้งาน</h3>
//             </div>
//           </div>
//           <h6 className="category category-absolute">
//             ออกแบบโดย บริษัท ดูดวง. พัฒนาโดย ชวลิต
//           </h6>
//         </Container>
//       </div>
//     </>
//   );
// }

// export default IndexHeader;

// import React, { useMemo, useState, useEffect } from "react";
// import { Container } from "reactstrap";

// function IndexHeader() {
//   let pageHeader = React.createRef();
//   const [bgImageIndex, setBgImageIndex] = useState(0);
//   const [fadeInLogo, setFadeInLogo] = useState(false);

//   const images = useMemo(() => [
//     require("assets/img/down1.jpg"),
//     require("assets/img/down2.jpg"),
//     require("assets/img/down4.jpg"),
//     // เพิ่มของภาพพื้นหลัง
//   ], []);

//   useEffect(() => {
//     const updateBgImage = () => {
//       const newIndex = (bgImageIndex + 1) % images.length;
//       const header = pageHeader.current;
//       header.style.transition = "background-image 1s ease-in-out, opacity 1s ease-in-out";
//       header.style.opacity = 1; // ทำให้เฉดสีเบลอ
//       setTimeout(() => {
//         header.style.backgroundImage = `url(${images[newIndex]})`;
//         header.style.opacity = 1; // เริ่มทำให้เฉดสีชัดเจนขึ้น
//         setBgImageIndex(newIndex);
//       }, 3000); // รอให้เฉดสีเบลอออกให้เสร็จ
//     };

//     const interval = setInterval(updateBgImage, 3000); // เปลี่ยนภาพพื้นหลังทุก 3 วินาที

//     // ให้โลโก้เฟดเข้ามาเมื่อหน้าเว็บโหลด
//     setTimeout(() => {
//       setFadeInLogo(true);
//     }, 1000); // รอเวลาเพียงพอสำหรับการเฟดของภาพพื้นหลัง

//     return () => clearInterval(interval);
//   }, [bgImageIndex, images, pageHeader]);

//   return (
//     <>
//       <div className="page-header clear-filter" filter-color="">
//         <div
//           className="page-header-image"
//           style={{ 
//             backgroundSize: "cover", 
//             backgroundPosition: "center", 
//             transition: "background-image 1s ease-in-out"
//           }}
//           ref={pageHeader}
//         ></div>
//         <Container>
//           <div 
//             style={{ 
//               display: 'flex', 
//               justifyContent: 'center', 
//               alignItems: 'center', 
//               height: '100vh',
//               transition: "opacity 1s ease-in-out",
//               opacity: fadeInLogo ? 1 : 0 // ใช้ fadeInLogo state เพื่อควบคุมค่า opacity
//             }}
//           >
//             <div>
//               <img 
//                 alt="" 
//                 src="LogoDUNGDEE.png" 
//                 width="300" 
//                 height="300" 
//                 className="d-inline-block align-top"
//                 style={{ opacity: fadeInLogo ? 1 : 0 }} // ใช้ fadeInLogo state เพื่อควบคุมค่า opacity
//               />
//               <h1 className="h1-seo">มาดูโหงวเฮ้งของตัวเองกัน </h1>
//               <h3>ฟรีสำหรับการใช้งาน</h3>
//             </div>
//           </div>
//           <h6 className="category category-absolute">
//             ออกแบบโดย บริษัท ดูดวง. พัฒนาโดย ชวลิต
//           </h6>
//         </Container>
//       </div>
//     </>
//   );
// }

// export default IndexHeader;

// import React, { useState, useEffect } from "react";
// import { Container } from "reactstrap";

// function IndexHeader() {
//   let pageHeader = React.createRef();
//   const [fadeInLogo, setFadeInLogo] = useState(false);

//   useEffect(() => {
//     // ให้โลโก้เฟดเข้ามาเมื่อหน้าเว็บโหลด
//     setTimeout(() => {
//       setFadeInLogo(true);
//     }, 1000); // รอเวลาเพียงพอสำหรับการเฟดของภาพพื้นหลัง
//   }, []);

//   return (
//     <>
//       <div className="page-header clear-filter" filter-color="">
//         <div
//           className="page-header-image"
//           style={{ 
//             backgroundSize: "cover", 
//             backgroundPosition: "center", 
//             transition: "background-image 1s ease-in-out",
//             backgroundImage: "url(" + require("assets/img/down.jpg") + ")"
//           }}
//           ref={pageHeader}
//         ></div>
//         <Container>
//           <div 
//             style={{ 
//               display: 'flex', 
//               justifyContent: 'center', 
//               alignItems: 'center', 
//               height: '100vh',
//               transition: "opacity 1s ease-in-out",
//               opacity: fadeInLogo ? 1 : 0 // ใช้ fadeInLogo state เพื่อควบคุมค่า opacity
//             }}
//           >
//             <div>
//               <img 
//                 alt="" 
//                 src="LogoDUNGDEE.png" 
//                 width="300" 
//                 height="300" 
//                 className="d-inline-block align-top"
//                 style={{ opacity: fadeInLogo ? 1 : 0 }} // ใช้ fadeInLogo state เพื่อควบคุมค่า opacity
//               />
//               <h1 className="h1-seo">มาดูโหงวเฮ้งของตัวเองกัน </h1>
//               <h3>ฟรีสำหรับการใช้งาน</h3>
//             </div>
//           </div>
//           <h6 className="category category-absolute">
//             ออกแบบโดย บริษัท ดูดวง. พัฒนาโดย ชวลิต
//           </h6>
//         </Container>
//       </div>
//     </>
//   );
// }

// export default IndexHeader;


// ปัจจุบัน ที่สุด
/*eslint-disable*/
import React from "react";
// reactstrap components
import { Container } from "reactstrap";
// core components

import ImageUpload from '../../components/ImageUpload';


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
          <br/>
          <br/>
          <div>  
            <ImageUpload></ImageUpload>
            <h2 className="h1-seo">มาดูโหงวเฮ้งของตัวเองกัน </h2>
            <h3>Free for use</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;