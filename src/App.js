import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="body">
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container">
              <a href="index.html" className="navbar-brand">Test</a>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="#home" className="nav-link">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="#explore-head-section" className="nav-link">Explore</a>
                  </li>
                  <li className="nav-item">
                    <a href="#create-head-section" className="nav-link">Create</a>
                  </li>
                  <li className="nav-item">
                    <a href="#share-head-section" className="nav-link">Share</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header id="home-section">
            <div className="dark-overlay">
              <div className="home-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 d-none d-lg-block">
                      <h1 className="display-4">Build profile</h1>
                      <div className="d-flex flex-row">
                        <div className="p-4 align-self-start">
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="p-4 align-self-end">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem, odio aspernatur libero nesciunt porro pariatur quae, ab saepe? Fuga velit, sapiente, repudiandae voluptatum voluptatem accusantium vero inventore et culpa.
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="p-4 align-self-start">
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="p-4 align-self-end">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem, odio aspernatur libero nesciunt porro pariatur quae, ab saepe? Fuga velit, sapiente, repudiandae voluptatum voluptatem accusantium vero inventore et culpa.
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="p-4 align-self-start">
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="p-4 align-self-end">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem, odio aspernatur libero nesciunt porro pariatur quae, ab saepe? Fuga velit, sapiente, repudiandae voluptatum voluptatem accusantium vero inventore et culpa.
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card bg-primary text-center card-form">
                        <div className="card-body">
                          <h3>Sign Up</h3>
                          <p>Fill it out</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section id="explore-head-section">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <div className="p-5">
                    <h1 className="display-4">
                      Explore
                    </h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error reprehenderit esse soluta eos ratione enim iusto eum, corporis, necessitatibus facilis quis ullam repellat vel dolorem amet molestiae officia velit voluptates.</p>
                    <a className="btn-outline-secondary">Find Out More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="explore-section" className="bg-light text-muted py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src="img/explore1.jpg" alt="" className="img-fluid mb-3 rounded-circle" />
                </div>
                <div className="col-md-6">
                  <h3>Explore & Connect</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, adipisci aliquam voluptatibus consequuntur? Libero a aliquam nam provident fugit velit sapiente soluta, ab eligendi reprehenderit! Facere cupiditate, vero tempore et.</p>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem, odio aspernatur libero nesciunt porro pariatur quae, ab saepe? Fuga velit, sapiente, repudiandae voluptatum voluptatem accusantium vero inventore et culpa.
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem, odio aspernatur libero nesciunt porro pariatur quae, ab saepe? Fuga velit, sapiente, repudiandae voluptatum voluptatem accusantium vero inventore et culpa.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="create-head-section" className="bg-primary">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <div className="p-5">
                    <h1 className="display-4">
                      Create
                    </h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error reprehenderit esse soluta eos ratione enim iusto eum, corporis, necessitatibus facilis quis ullam repellat vel dolorem amet molestiae officia velit voluptates.</p>
                    <a className="btn-outline-light">Find Out More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="create-section" className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h3>Create Passion</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, adipisci aliquam voluptatibus consequuntur? Libero a aliquam nam provident fugit velit sapiente soluta, ab eligendi reprehenderit! Facere cupiditate, vero tempore et.</p>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem, odio aspernatur libero nesciunt porro pariatur quae, ab saepe? Fuga velit, sapiente, repudiandae voluptatum voluptatem accusantium vero inventore et culpa.
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem, odio aspernatur libero nesciunt porro pariatur quae, ab saepe? Fuga velit, sapiente, repudiandae voluptatum voluptatem accusantium vero inventore et culpa.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src="img/create.jpg" alt="" className="img-fluid mb-3 rounded-circle" />
                </div>
              </div>
            </div>
          </section>

          <section id="share-head-section" className="bg-primary">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <div className="p-5">
                    <h1 className="display-4">
                      Share
                    </h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error reprehenderit esse soluta eos ratione enim iusto eum, corporis, necessitatibus facilis quis ullam repellat vel dolorem amet molestiae officia velit voluptates.</p>
                    <a className="btn-outline-light">Find Out More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="share-section" className="bg-light text-muted py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src="img/share.jpg" alt="" className="img-fluid mb-3 rounded-circle" />
                </div>
                <div className="col-md-6">
                  <h3>What you share</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, adipisci aliquam voluptatibus consequuntur? Libero a aliquam nam provident fugit velit sapiente soluta, ab eligendi reprehenderit! Facere cupiditate, vero tempore et.</p>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem, odio aspernatur libero nesciunt porro pariatur quae, ab saepe? Fuga velit, sapiente, repudiandae voluptatum voluptatem accusantium vero inventore et culpa.
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem, odio aspernatur libero nesciunt porro pariatur quae, ab saepe? Fuga velit, sapiente, repudiandae voluptatum voluptatem accusantium vero inventore et culpa.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer id="main-footer" className="bg-dark">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <div className="py-4">
                    <h1 className="h3">Test</h1>
                    <p>Copyright &copy; 2017</p>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#contactModal">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <div className="modal fade text-dark" id="contactModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="contactModalTitle">
                    Contact Us
                  </h5>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea className="form-control"></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-primary btn-block">Submit</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
