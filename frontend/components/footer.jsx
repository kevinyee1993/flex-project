import React from 'react';
import * as rb from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(


      <footer className="page-footer pt-4 mt-4">


          <div className="container text-center ">
            <div className="row title">
              flex-project created by
            </div>
              <div className="row footer-links">


                  <div className="creator col-md-2 ">
                      <h5 className="creator-name">Kevin Yee</h5>
                      <ul className="list-unstyled">
                          <li>
                              <a target="_blank" href="https://www.linkedin.com/in/kevin-yee-9b7874158/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                          </li>
                          <li>
                              <a target="_blank" href="https://github.com/kevinyee1993"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                          </li>
                      </ul>
                  </div>



                  <div className="creator col-md-2 ">
                      <h5 className="creator-name">Winston Chan</h5>
                      <ul className="list-unstyled">
                          <li>
                              <a target="_blank" href="https://www.linkedin.com/in/winstonchan94/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                          </li>
                          <li>
                              <a target="_blank" href="https://github.com/winstonchan94"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                          </li>
                      </ul>
                  </div>

                  <div className="creator col-md-2 ">
                      <h5 className="creator-name">Yihwan Kim</h5>
                      <ul className="list-unstyled">
                          <li>
                              <a target="_blank" href="https://linkedin.com/yihwan"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                          </li>
                          <li>
                              <a target="_blank" href="https://github.com/yihwan"><i class="fa fa-github-square" aria-hidden="true"></i></a>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>


      </footer>

    );
  }
}

export default Header;
