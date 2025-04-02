import "./App.css";
import background from "./assets/mainHighquality.png";
import background2 from "./assets/second.png";

const width =
  window.innerWidth <= 768 ? 2 * window.innerWidth : window.innerWidth;
const height =
  window.innerWidth <= 768 ? 0.5 * window.innerHeight : window.innerHeight;

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover", // or "contain"
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "99vw", // Full width of the screen
          height: window.innerWidth <= 768 ? "50vh" : "100vh", // Full height of the screen
        }}
      >
        <img
          src={require("./assets/holdartLogo.png")}
          alt=""
          style={{
            marginTop: window.innerWidth <= 768 ? height * 0.12 : height * 0.15,
            width: width * 0.115,
            marginBottom: height * 0.03,
          }}
        />
        <p
          style={{
            fontSize: width * 0.053,
            letterSpacing: -0.5,
            color: "#323232",
          }}
        >
          Investing in{" "}
        </p>
        <p
          style={{
            letterSpacing: -0.5,
            fontSize: width * 0.053,
            fontWeight: 700,
            marginTop:
              window.innerWidth <= 768 ? height * -0.13 : height * -0.135,
            color: "#323232",
            marginBottom:
              window.innerWidth <= 768 ? height * 0.18 : height * 0.16,
          }}
        >
          the Future of Art
        </p>

        <button
          style={{
            backgroundColor: "#1051ab",
            border: 0,
            borderRadius: 50,
            paddingInline:
              window.innerWidth <= 768 ? width * 0.055 : width * 0.05,
            paddingTop: height * 0.005,
            paddingBottom: height * 0.005,
          }}
        >
          <p
            style={{
              letterSpacing: -0.5,
              backgroundColor: "#1051ab",
              border: 0,
              color: "#fff",
              fontWeight: 700,
              fontSize:
                window.innerWidth <= 768 ? width * 0.015 : width * 0.00954,
            }}
          >
            <a
              href="Info@holdart-trading.com"
              style={{
                color: "#fff",
                textDecoration: "none", // Removes default underline
              }}
            >
              Contact us
            </a>
          </p>
        </button>
      </div>

      <div
        style={{
          justifyContent: "space-evenly",
          height: window.innerWidth <= 768 ? height * 0.25 : height * 0.2,
          border: " 0px  0px 0px 0px",
          display: "flex", // Enables Flexbox
          alignItems: "center", // Centers items vertically
          paddingInline: window.innerWidth <= 768 ? width * 0.02 : width * 0.07,
        }}
      >
        <a
          href="https://www.Layerofart.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("./assets/layerofartLogo.png")}
            alt=""
            style={{ width: width * 0.08 }}
          />
        </a>
        <a
          href="https://www.artpaks.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("./assets/artpaksLogo.png")}
            alt=""
            style={{ width: width * 0.08 }}
          />
        </a>
      </div>
      <div
        style={{
          marginTop: window.innerWidth <= 768 ? width * -0.01 : 0,
          display: "flex", // Enables Flexbox
          flexDirection: "column", // Stacks elements vertically
          alignItems: "center", // Centers horizontally
          justifyContent: "center", // Centers vertically
          backgroundImage: `url(${background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "99vw",
          height: window.innerWidth <= 768 ? "50vh" : "100vh", // Full height of the screen
          textAlign: "center", // Ensures text alignment is centered
        }}
      >
        <p
          style={{
            marginTop: 5,
            fontSize: width * 0.02756,
            fontWeight: 700,
            textAlign: "center",
            color: "#323232",
            letterSpacing: -0.5,
            lineHeight:
              window.innerWidth <= 768 ? 0.003 * height : 0.0011 * height,
            marginBottom: height * 0.08,
          }}
        >
          Pioneering the Future <br></br>of Art Investment
        </p>
        <p
          style={{
            fontSize:
              window.innerWidth <= 768 ? width * 0.013 : width * 0.01219,
            fontWeight: 400,
            textAlign: "center",
            color: "#14223b",
            letterSpacing: -0.34,
            lineHeight:
              window.innerWidth <= 768 ? 0.003 * height : height * 0.00125,
          }}
        >
          Holdart Trading - FZCO is a forward-thinking holding company,<br></br>
          incorporated under the laws of the United Arab Emirates and<br></br>{" "}
          registered under number /55766/ in Dubai Silicon Oasis.<br></br>{" "}
          Dedicated to fostering innovation in the art industry, Holdart
          <br></br> strategically invests in businesses that redefine how art is
          <br></br> created, experienced, and commercialized.
        </p>
        <p
          style={{
            lineHeight:
              window.innerWidth <= 768 ? 0.003 * height : height * 0.00125,
            fontSize:
              window.innerWidth <= 768 ? width * 0.013 : width * 0.01219,
            fontWeight: 400,
            textAlign: "center",
            color: "#14223b",
            letterSpacing: -0.34,
          }}
        >
          With a sharp focus on growth and transformation, the company<br></br>{" "}
          seeks out ventures that push the boundaries of technology,<br></br>{" "}
          logistics, and market accessibility in the art world. By supporting
          <br></br> visionary enterprises, Holdart plays a vital role in shaping
          the<br></br> future of the global art economy.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          justifyContent: "space-evenly",
        }}
      >
        <img
          src={require("./assets/holdartLogo.png")}
          alt=""
          style={{ marginTop: height * 0.07, width: window.innerWidth <= 768 ? width*0.08: width * 0.07 }}
        />

        <p
          style={{
            fontSize: window.innerWidth <= 768 ? width*0.014: width * 0.0106,
            fontWeight: 400,
            textAlign: "center",
            color: "#545454",
            letterSpacing: -0.5,
            fontStyle: "italic",
            paddingBottom: height * 0.05,
            marginTop:window.innerWidth <= 768 ? height*0 :  0.006 * height,
            
          }}
        >
          © 2025 Holdart. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
