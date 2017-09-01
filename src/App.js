import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container">
              <a href="#home" className="navbar-brand">Jason Wang</a>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="#home" className="nav-link">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="#bacon" className="nav-link">Bacon</a>
                  </li>
                  <li className="nav-item">
                    <a href="#sudoku" className="nav-link">Sudoku</a>
                  </li>
                  <li className="nav-item">
                    <a href="#skillup" className="nav-link">Skill-Up</a>
                  </li>
                  <li className="nav-item">
                    <a href="#battleship" className="nav-link">Battleship</a>
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

          <section id="bacon" className="bg-light text-muted py-5">
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
                      Firebase's google auth is used for User Authentication.
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
                      Full CRUD capability, with a search feature to filter jobs.
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <a href="https://github.com/projectmaking123/react-front-jobs">
                        <i style={{fontSize: '60px'}} className="fa fa-github"></i>
                      </a>
                    </div>
                    <div className="p-4 align-self-end">
                      React Front End
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <a href="https://github.com/projectmaking123/restful-rails-jobs-api">
                        <i style={{fontSize: '60px'}} className="fa fa-github"></i>
                      </a>
                    </div>
                    <div className="p-4 align-self-end">
                      Rails API
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="sudoku" className="py-5">
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
                    <div className="p-4 align-self-end">
                      React Front End
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-end">
                      <a href="https://github.com/projectmaking123/sudoku-api">
                        <i style={{fontSize: '60px'}} className="fa fa-github"></i>
                      </a>
                    </div>
                    <div className="p-4 align-self-end">
                      Rails API
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-end">
                      <a href="https://github.com/projectmaking123/forecast-api-projectmaking123">
                        <i style={{fontSize: '60px'}} className="fa fa-github"></i>
                      </a>
                    </div>
                    <div className="p-4 align-self-end">
                      NODE/EXPRESS API
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

          <section id="skillup" className="bg-light text-muted py-5">
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

          <section id="battleship" className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h3>Terminal Command Line Battleship</h3>
                  <p>Play battleship in the terminal</p>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Play against an AI
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Play against another player
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Watch 2 AI's play against each other
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-end">
                      <a href="https://github.com/projectmaking123/battleship">
                        <i style={{fontSize: '60px'}} className="fa fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src="img/battleship.jpg" alt="" className="img-fluid mb-3 rounded-circle" />
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
              <div className="modal-content text-center">
                <div className="modal-header">
                  <h5 className="modal-title" id="contactModalTitle">
                    Contact Me
                  </h5>
                </div>
                <div className="modal-body">
                  <div>
                    <div className="card text-center py-5">
                      <div className="card-block">
                        <h4 className="card-title">Email</h4>
                        <p>jasonw4dev@gmail.com</p>
                      </div>
                    </div>
                    <div className="card text-center py-5">
                      <div className="card-block">
                        <h4 className="card-title">Mobile</h4>
                        <p>347-320-5396</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
