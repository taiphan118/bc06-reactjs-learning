import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="#" className="navbar-brand">
              CyberSoft
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#myMenu"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="myMenu">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    News
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Smarphone
                    </a>
                    <a href="#" className="dropdown-item">
                      Laptop
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className />
            <li data-target="#demo" data-slide-to={1} className />
            <li data-target="#demo" data-slide-to={2} className="active" />
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img
                src="./img/slide_1.jpg"
                alt="Los Angeles"
                width="100%"
                height={500}
              />
            </div>
            <div className="carousel-item">
              <img
                src="./img/slide_2.jpg"
                alt="Chicago"
                width="100%"
                height={500}
              />
            </div>
            <div className="carousel-item active">
              <img
                src="./img/slide_3.jpg"
                alt="New York"
                width="100%"
                height={500}
              />
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
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
