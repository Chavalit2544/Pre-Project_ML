import React from "react";

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
          <Row>
            <Col>
              <img alt="" src="face.jpg" width="500" height="400" className="d-inline-block align-top" /> <br /> <br />
              <h5>รูปภาพตัวอย่าง โหงวเฮ้งของผู้หญิง</h5>
              <p>อ้างอิง : https://peaceclinicpty.com/lifestyle-physiognomy/</p>
            </Col>
            <Col>
              โหงวเฮ้ง (Mien Shiang) คือ ศาสตร์ของการทำนายคุณสมบัติคนจากรูปลักษณ์ภายนอก (Chinese Physiognomy) โดยเฉพาะหน้าตา มีในหลายประเทศทั่วโลก นับตั้งแต่ในยุคโบราณ</Col>
            <Col>
              <Card style={{ width: "20rem"}}>
                <CardImg alt="..." src="faces.png" top></CardImg>
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
        </Container>
      </div>
      <DarkFooter />
    </>
  );
}

export default LoginPage;
