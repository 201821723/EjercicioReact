
function Banner() {
  return (
    <>
    <div class="container">
      <div class="row bg-secondary">
        <div class="col-4 d-flex">
          <h3>Museos de arte moderno</h3>
        </div>
        <div class="col-8 d-flex justify-content-end">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link">Museos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Artistas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Movimientos</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="row squizzed">
        <div className="col-12 banner">
          <a>Home</a> {">"} Museos
        </div>
      </div>
    </div>   
    </>
  );
}

export default Banner;
