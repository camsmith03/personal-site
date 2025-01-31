import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "../body.css";

function Projects() {
  const redirectTo = (url) => {
    location.href = url;
  };
  const handleHoverOver = (cardId) => {
    var card = document.getElementById(cardId);
    card.style.backgroundColor = "#f8f9fa";
  };
  const handleHoverLeave = (cardId) => {
    var card = document.getElementById(cardId);
    card.style.backgroundColor = "#ffffff";
  };

  return (
    <>
      <div>
        <br />
        <h1 className="top-header">Personal Projects</h1>
        <br />
      </div>
      <div>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <div
              onMouseOver={() => handleHoverOver("card1")}
              onMouseLeave={() => handleHoverLeave("card1")}
            >
              <Card
                id="card1"
                style={{ backgroundColor: "#ffffff" }}
                onClick={() =>
                  redirectTo(
                    "https://github.com/camsmith03/ChessMinimaxAlgorithm",
                  )
                }
              >
                <Card.Img
                  alt="Command line chess algorithm"
                  variant="top"
                  src="/img/chessAI.png"
                />
                <Card.Body>
                  <Card.Title>Chess AI</Card.Title>
                  <Card.Text>
                    Minimax Chess AI built from scratch in Java that uses
                    AlphaBeta pruning, lexocographical analysis, all simulated
                    over highly optimized bitmaps.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col>
            <div
              onMouseOver={() => handleHoverOver("card2")}
              onMouseLeave={() => handleHoverLeave("card2")}
            >
              <Card
                id="card2"
                style={{ backgroundColor: "#ffffff" }}
                onClick={() =>
                  redirectTo("https://github.com/camsmith03/personal-site")
                }
              >
                <Card.Img
                  alt="Home page of current site"
                  variant="top"
                  src="/img/homepage.jpg"
                />
                <Card.Body>
                  <Card.Title>This Website</Card.Title>
                  <Card.Text>
                    Written using ReactJS and self-hosted on my home server.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div
              onMouseOver={() => handleHoverOver("card3")}
              onMouseLeave={() => handleHoverLeave("card3")}
            >
              <Card
                id="card3"
                style={{ backgroundColor: "#ffffff" }}
                onClick={() =>
                  redirectTo(
                    "https://github.com/camsmith03/brokercheck-web-scraper",
                  )
                }
              >
                <Card.Img
                  alt="Image of GitHub page for webscraper"
                  variant="top"
                  src="/img/webscraper.jpg"
                />
                <Card.Body>
                  <Card.Title>FINRA's BrokerCheck&#174; Web Scraper</Card.Title>
                  <Card.Text>
                    Web scraping application for automating broker data
                    collection. Written using the python beautiful soup library
                    and selenium web driver.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div
              onMouseOver={() => handleHoverOver("card4")}
              onMouseLeave={() => handleHoverLeave("card4")}
            >
              <Card
                id="card4"
                style={{ backgroundColor: "#ffffff" }}
                onClick={() =>
                  redirectTo("https://github.com/camsmith03/Java-Wordle-Solver")
                }
              >
                <Card.Img
                  alt="Image of wordle bot accuracy distribution"
                  variant="top"
                  src="/img/wordle.jpeg"
                />
                <Card.Body>
                  <Card.Title>Java Wordle Solver</Card.Title>
                  <Card.Text>
                    Solves the daily "Wordle" puzzle via process of elemination,
                    written in Java.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <br />
      </div>
    </>
  );
}

export default Projects;
