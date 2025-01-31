import { useState } from "react";

function Contact() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <br />
        <h1 className="top-header">Contact Me</h1>
        <br />
      </div>
      <div>
        <p style={{ fontSize: "1.2em" }}>
          Email: <a href="mailto:camerons03@vt.edu">camerons03@vt.edu</a>
          <br />
          Phone: <a href="tel:+12156806410">(215) 680-6410</a>
          <br />
          <br />
        </p>
      </div>
    </>
  );
}

export default Contact;
