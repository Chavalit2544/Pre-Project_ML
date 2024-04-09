/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="purple">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https//localhost:3000/index"
                target="_blank"
              >
                DuangDee 
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/login-page"
                target="_blank"
              >
                About Us
              </a>
            </li>
            
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © 
          . Coded by Chavalit
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
