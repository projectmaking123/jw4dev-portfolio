import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="body">
          <nav className="navbar navbar-expand-xxl bg-dark navbar-dark fixed-top">
            <div className="container">
              <a href="index.html" className="navbar-brand">Jason Wang</a>
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
                </ul>
              </div>
            </div>
          </nav>

          <header>
            <h1 id="home">Design With Intention</h1>
          </header>

          <section className="text-center">
            <h1>
              Projects
            </h1>
          </section>

          <section id="explore-section" className="bg-light text-muted py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <a href="https://react-for-bacon.firebaseapp.com/" >
                    <img src="img/bacon.jpg" alt="" className="img-fluid mb-3 rounded-circle" />
                  </a>
                </div>
                <div className="col-md-6">
                  <h3>A React/Rails web app for job listings</h3>
                  <p>Created with 2 servers. A React client-side server and a Rails api backend server</p>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Firebase's google auth is used for User Authentication
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      The google-map-react npm is providing the google map feature.
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      A Search feature to filter jobs
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-end">
                      <a href="https://github.com/projectmaking123/react-front-jobs">
                        <i style={{fontSize: '60px'}} className="fa fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h3>Play Sudoku and check out the Forecast</h3>
                  <p>Created with 3 servers. React/Rails/Node</p>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      The sudoku game is composed of a rails api that holds all the logic for the game.
                      While react handles the display. The boards's generation, validation and solution
                      are all made with api calls. A game may be saved for later by storing it into
                      firebase's database.
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      The Forecast is originating from darksky's api. However, darksky does not enable CORS,
                      meaning this React client side server can not make direct calls to it. As a solution, I
                      created a node/express api that calls darksky's api. I enabled CORS on my express
                      server so my client side server is able to make api calls to it.
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-end">
                      <a href="https://github.com/projectmaking123/jason-wang-1989">
                        <i style={{fontSize: '60px'}} className="fa fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <a href="https://jason-wang-1989.firebaseapp.com/" >
                    <img src="img/ny.jpg" alt="" className="img-fluid mb-3 rounded-circle" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="explore-section" className="bg-light text-muted py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <a href="https://tutor-skill.herokuapp.com/" >
                    <img src="img/Skillup.jpg" alt="" className="img-fluid mb-3 rounded-circle" />
                  </a>
                </div>
                <div className="col-md-6">
                  <h3>A Rails/JQuery/Ajax Web App</h3>
                  <p>A group project with myself and four others</p>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Rails on both front and backend.
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Ajax for leaving messages
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-end">
                      <a href="https://github.com/Alex-E-Camacho/skill-up">
                        <i style={{fontSize: '60px'}} className="fa fa-github"></i>
                      </a>
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
                    <h1 className="h3">Jason Wang</h1>
                    <p>Copyright &copy; 2017</p>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#contactModal">
                      Contact Me
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
                    Contact Me
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
