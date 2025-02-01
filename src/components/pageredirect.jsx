import { useEffect } from "react";

function PageNotFound() {
  const failedRedirect = () => {
    // For unsupported browsers, switch on a visibile redirect button.
    var p = document.getElementById("redirectParaTag");
    p.style.visibility = "visible";
  };

  useEffect(() => {
    // Attempt a redirect by embedding a meta tag. Worst case they need to hit
    // the home button themself.
    var meta = document.createElement("meta");
    meta.httpEquiv = "refresh";
    meta.content = "1; url=https://cameronwsmith.com/";
    document.head.appendChild(meta);
    setTimeout(failedRedirect, 5000); // wait 5 seconds then make link visible
  });

  return (
    <>
      <br />
      <h1 className="top-header">Page not found. Redirecting...</h1>
      <br />
      <p id="redirectParaTag" align="center" style={{ visibility: "hidden" }}>
        <a href="https://cameronwsmith.com">Press here to go home</a>
        <br />
        <br />
      </p>
    </>
  );
}

export default PageNotFound;
