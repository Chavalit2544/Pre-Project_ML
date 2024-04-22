import React from "react";
import {CSSTransition } from 'react-transition-group';
import './fade.css'
// reactstrap components
import {
  Button,
  CardBody,
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

// core components
import DarkFooter from "components/Footers/DarkFooter";
import IndexNavbar from "components/Navbars/IndexNavbar";

function LoginPage() {

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/down.jpg") + ")"
          }}
        ></div> <br />  
        <Container>
          <h1>About Us</h1>
          <CSSTransition in={true} appear={true} timeout={2000} classNames="fade-up">
            <Row>
              <Col>
                <Card style={{ width: "20rem" , height: "30rem" }}>
                  <CardImg alt="..." src="face.jpg" top style={{ height: "260px", objectFit: "cover"}}></CardImg>
                  <CardBody>
                    <CardTitle tag="h5" style={{color:"black"}}> โหงวเฮ้งแบบไหนถึงเรียกว่าดี? มาดูกัน!</CardTitle>
                      <CardText tag="h6" style={{color:"black"}}>
                          โหงวเฮ้งเป็นศาสตร์จีนโบราณที่ใช้ในการพิจารณาดูใบหน้า เพื่อวิเคราะห์ถึงบุคลิกและลักษณะนิสัยของแต่ละคน โดยการอ่านจากลักษณะใบหน้าและอริยาบถต่างๆทั้งการพูด น้ำเสียง ไปจนถึงการดูราศี
                      </CardText>
                      <Button
                        color="primary"
                        href="https://peaceclinicpty.com/lifestyle-physiognomy/"
                        className="mt-auto"
                      >
                        อ่านเพิ่มเติม
                      </Button>
                  </CardBody>
                </Card>
              </Col>

              
                <Col>
                  <Card style={{ width: "20rem" , height: "30rem" }}>
                    <CardImg alt="..." src="thairat.jpg" top style={{ height: "240px", objectFit: "cover"}}></CardImg>
                    <CardBody>
                      <CardTitle tag="h5" style={{color:"black"}}>รูปหน้า" บอก "นิสัย" พร้อมเคล็ดลับความงามสำหรับสาวทุกรูปหน้า</CardTitle>
                        <CardText tag="h6" style={{color:"black"}}>
                          โบราณว่า "รู้หน้าไม่รู้ใจ" แต่รู้หรือไม่ว่า "ใบหน้า" สามารถบ่งบอกนิสัยของเราได้ ชาวจีนได้ศึกษาเรื่องนี้มากว่า 3,000 ปี หรือที่เรียกว่า "ศาสตร์โหงวเฮ้ง" นั่นเอง
                        </CardText>
                      <Button
                        color="primary"
                        href="https://www.thairath.co.th/lifestyle/woman/1780295"
                      >
                        อ่านเพิ่มเติม
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              

              <Col>
                <Card style={{ width: "20 rem" , height: "30rem" }}>
                  <CardImg alt="..." src="faces.png" top style={{ height: "240px", objectFit: "cover"}}></CardImg>
                  <CardBody>
                    <CardTitle tag="h5" style={{color:"black"}}>วิเคราะห์โหงวเฮ้งจากรูปทรงใบหน้า</CardTitle>
                    <CardText tag="h6" style={{color:"black"}}>
                      รูปหน้าพื้นฐานของคุณเป็นสิ่งที่มีประโยชน์มากที่ควรรู้ มันสามารถช่วยคุณเลือกแว่นตาหมวกและแน่นอนรูปทรงคิ้ว มีหมวดหมู่รูปร่างพื้นฐานหกประเภทที่พวกเราส่วนใหญ่ควรพอดีหรือเอนเข้าหา: วงรี กลม ยาว หัวใจ เพชร และสี่เหลี่ยม
                    </CardText>
                    <Button
                      color="primary"
                      href="https://helenajones.co.uk/do-you-know-your-face-shape/"
                    >
                      อ่านเพิ่มเติม
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CSSTransition>
        </Container>
      </div>
      <DarkFooter />
    </>
  );
}

export default LoginPage;
