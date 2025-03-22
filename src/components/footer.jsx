import { SocialIcon } from "react-social-icons/component";
/* import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; */
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/instagram";
import "react-social-icons/x";
import "react-social-icons/facebook";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SocialIcon
        url="www.github.com"
        href="https://www.github.com/camsmith03"
        style={{ height: 40, width: 40 }}
      />
      &nbsp;&nbsp;
      <SocialIcon
        url="www.linkedin.com"
        href="https://www.linkedin.com/in/cameron-smith-aba363190/"
        style={{ height: 40, width: 40 }}
      />
      &nbsp;&nbsp;
      <SocialIcon
        url="www.instagram.com"
        href="https://www.instagram.com/cameron.smith33/"
        style={{ height: 40, width: 40 }}
      />
      &nbsp;&nbsp;
      <SocialIcon
        url="www.x.com"
        href="https://x.com/Cameron_Smith03"
        style={{ height: 40, width: 40 }}
      />
      &nbsp;&nbsp;
      <SocialIcon
        url="www.facebook.com"
        href="https://www.facebook.com/profile.php?id=100071640317563"
        style={{ height: 40, width: 40 }}
      />
    </div>
  );
}

export default Footer;
