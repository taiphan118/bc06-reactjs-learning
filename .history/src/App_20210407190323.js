import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
   <div><div><nav class="navbar navbar-expand-md navbar-dark bg-dark"><div class="container-fluid"><a href="#" class="navbar-brand">CyberSoft</a><button class="navbar-toggler" data-toggle="collapse" data-target="#myMenu"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="myMenu"><ul class="navbar-nav ml-auto"><li class="nav-item"><a href="#" class="nav-link active">Home</a></li><li class="nav-item"><a href="#" class="nav-link">News</a></li><li class="nav-item dropdown"><a href="#" class="nav-link" data-toggle="dropdown" aria-expanded="false">Products</a><div class="dropdown-menu"><a href="#" class="dropdown-item">Smarphone</a><a href="#" class="dropdown-item">Laptop</a></div></li><li class="nav-item"><a href="#" class="nav-link">Forum</a></li></ul></div></div></nav><div id="demo" class="carousel slide" data-ride="carousel"><ul class="carousel-indicators"><li data-target="#demo" data-slide-to="0" class=""></li><li data-target="#demo" data-slide-to="1" class=""></li><li data-target="#demo" data-slide-to="2" class="active"></li></ul><div class="carousel-inner"><div class="carousel-item"><img src="./img/slide_1.jpg" alt="Los Angeles" width="100%" height="500"></div><div class="carousel-item"><img src="./img/slide_2.jpg" alt="Chicago" width="100%" height="500"></div><div class="carousel-item active"><img src="./img/slide_3.jpg" alt="New York" width="100%" height="500"></div></div><a class="carousel-control-prev" href="#demo" data-slide="prev"><span class="carousel-control-prev-icon"></span></a><a class="carousel-control-next" href="#demo" data-slide="next"><span class="carousel-control-next-icon"></span></a></div><section id="smartphone" class="container-fluid pt-5 pb-5 bg-dark"><h1 class="text-white text-center">BEST SMARTPHONE</h1><div class="row"><div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3"><div class="container"><div class="card bg-light" style="width: 300px;"><img class="card-img-top" src="./img/sp_note7.png" alt="Card image" style="max-width: 100%; height: 250px;"><div class="card-body text-center"><h4 class="card-title text-center">Note 7</h4><p class="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p><a href="#" class="btn btn-primary">Detail</a><a href="#" class="btn btn-danger">Cart</a></div></div></div></div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3"><div class="container"><div class="card bg-light" style="width: 300px;"><img class="card-img-top" src="./img/sp_iphoneX.png" alt="Card image" style="max-width: 100%; height: 250px;"><div class="card-body text-center"><h4 class="card-title text-center">iPhone X</h4><p class="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p><a href="#" class="btn btn-primary">Detail</a><a href="#" class="btn btn-danger">Cart</a></div></div></div></div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3"><div class="container"><div class="card bg-light" style="width: 300px;"><img class="card-img-top" src="./img/sp_note7.png" alt="Card image" style="max-width: 100%; height: 250px;"><div class="card-body text-center"><h4 class="card-title text-center">Note 7</h4><p class="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p><a href="#" class="btn btn-primary">Detail</a><a href="#" class="btn btn-danger">Cart</a></div></div></div></div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3"><div class="container"><div class="card bg-light" style="width: 300px;"><img class="card-img-top" src="./img/sp_iphoneX.png" alt="Card image" style="max-width: 100%; height: 250px;"><div class="card-body text-center"><h4 class="card-title text-center">iPhone X</h4><p class="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p><a href="#" class="btn btn-primary">Detail</a><a href="#" class="btn btn-danger">Cart</a></div></div></div></div></div></section><section id="promotion" class="container-fluid pt-5 pb-5 bg-dark"><h1 class="text-center text-white">PROMOTION</h1><div class="container bg-light pt-5 pb-5"><div class="row"><div class="col-xs-12 col-sm-12 col-md-4"><div class="container"><img src="./img/promotion_1.png" style="max-width: 100%;"></div></div><div class="col-xs-12 col-sm-12 col-md-4"><div class="container"><img src="./img/promotion_2.png" style="max-width: 100%;"></div></div><div class="col-xs-12 col-sm-12 col-md-4"><div class="container"><img src="./img/promotion_3.jpg" style="max-width: 100%;"></div></div></div></div></section></div></div>
  );
}

export default App;
