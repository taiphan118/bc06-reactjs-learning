import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <div>
        <Header />
        <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-img-top"
                    src="./img/sp_note7.png"
                    alt="Card image"
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title text-center">Note 7</h4>
                    <p className="card-text">
                      iPhone X features a new all-screen design. Face ID, which
                      makes your face your password
                    </p>
                    <a href="#" className="btn btn-primary">
                      Detail
                    </a>
                    <a href="#" className="btn btn-danger">
                      Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-img-top"
                    src="./img/sp_iphoneX.png"
                    alt="Card image"
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title text-center">iPhone X</h4>
                    <p className="card-text">
                      iPhone X features a new all-screen design. Face ID, which
                      makes your face your password
                    </p>
                    <a href="#" className="btn btn-primary">
                      Detail
                    </a>
                    <a href="#" className="btn btn-danger">
                      Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-img-top"
                    src="./img/sp_note7.png"
                    alt="Card image"
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title text-center">Note 7</h4>
                    <p className="card-text">
                      iPhone X features a new all-screen design. Face ID, which
                      makes your face your password
                    </p>
                    <a href="#" className="btn btn-primary">
                      Detail
                    </a>
                    <a href="#" className="btn btn-danger">
                      Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-img-top"
                    src="./img/sp_iphoneX.png"
                    alt="Card image"
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title text-center">iPhone X</h4>
                    <p className="card-text">
                      iPhone X features a new all-screen design. Face ID, which
                      makes your face your password
                    </p>
                    <a href="#" className="btn btn-primary">
                      Detail
                    </a>
                    <a href="#" className="btn btn-danger">
                      Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="promotion" className="container-fluid pt-5 pb-5 bg-dark">
          <h1 className="text-center text-white">PROMOTION</h1>
          <div className="container bg-light pt-5 pb-5">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="container">
                  <img
                    src="./img/promotion_1.png"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="container">
                  <img
                    src="./img/promotion_2.png"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="container">
                  <img
                    src="./img/promotion_3.jpg"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
