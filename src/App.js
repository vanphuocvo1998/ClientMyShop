import React, {Component} from 'react';
import Menu from "./conponents/Menu";
import Headertop from './conponents/Headertop';
import Main from './conponents/Main/Main';
import Slide from './conponents/Slide';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from "./routes";
class App extends Component {
  ShowContent = (route)=>{
    var result =null;
    if(routes.length >0)
    {
      result = routes.map((route, index) => {
        return(
        <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        );
      });
    }
    return <Switch>{result}</Switch>
  }
  render(){
    return (
      <Router>
            <div>
                <div className="header-most-top">
                  <p>Grocery Offer Zone Top Deals &amp; Discounts</p>
                </div>
            
                <Headertop />
          {/* show city */}
            {/* //shop locator (popup) */}
            {/* signin Model */}
            {/* Modal1 */}
            <div className="modal fade" id="myModal1" tabIndex={-1} role="dialog">
              <div className="modal-dialog">
        
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                  </div>
                  <div className="modal-body modal-body-sub_agile">
                    <div className="main-mailposi">
                      <span className="fa fa-envelope-o" aria-hidden="true" />
                    </div>
                    <div className="modal_body_left modal_body_left1">
                      <h3 className="agileinfo_sign">Sign In </h3>
                      <p>
                        Sign In now, Let's start your Grocery Shopping. Don't have an account?
                        <a href="#" data-toggle="modal" data-target="#myModal2">
                          Sign Up Now</a>
                      </p>
                      <form action="#" method="post">
                        <div className="styled-input agile-styled-input-top">
                          <input type="text" placeholder="User Name" name="Name" required />
                        </div>
                        <div className="styled-input">
                          <input type="password" placeholder="Password" name="password" required />
                        </div>
                        <input type="submit" defaultValue="Sign In" />
                      </form>
                      <div className="clearfix" />
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
            
              </div>
            </div>
        
            <div className="modal fade" id="myModal2" tabIndex={-1} role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                  </div>
                  <div className="modal-body modal-body-sub_agile">
                    <div className="main-mailposi">
                      <span className="fa fa-envelope-o" aria-hidden="true" />
                    </div>
                    <div className="modal_body_left modal_body_left1">
                      <h3 className="agileinfo_sign">Sign Up</h3>
                      <p>
                        Come join the Grocery Shoppy! Let's set up your Account.
                      </p>
                      <form action="#" method="post">
                        <div className="styled-input agile-styled-input-top">
                          <input type="text" placeholder="Name" name="Name" required />
                        </div>
                        <div className="styled-input">
                          <input type="email" placeholder="E-mail" name="Email" required />
                        </div>
                        <div className="styled-input">
                          <input type="password" placeholder="Password" name="password" id="password1" required />
                        </div>
                        <div className="styled-input">
                          <input type="password" placeholder="Confirm Password" name="Confirm Password" id="password2" required />
                        </div>
                        <input type="submit" defaultValue="Sign Up" />
                      </form>
                      <p>
                        <a href="#">By clicking register, I agree to your terms</a>
                      </p>
                    </div>
                  </div>
                </div>
          
              </div>
            </div>
          
            <Menu />
            
            {this.ShowContent(routes)}
            <Slide />
            
            {/* //newsletter */}
            {/* footer */}
            <footer>
              <div className="container">
              
                <div className="footer-info w3-agileits-info">
                  {/* footer categories */}
                  <div className="col-sm-5 address-right">
                    <div className="col-xs-6 footer-grids">
                      <h3>Categories</h3>
                      <ul>
                        <li>
                          <a href="product.html">Grocery</a>
                        </li>
                        <li>
                          <a href="product.html">Fruits</a>
                        </li>
                        <li>
                          <a href="product.html">Soft Drinks</a>
                        </li>
                        <li>
                          <a href="product2.html">Dishwashers</a>
                        </li>
                        <li>
                          <a href="product.html">Biscuits &amp; Cookies</a>
                        </li>
                        <li>
                          <a href="product2.html">Baby Diapers</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xs-6 footer-grids agile-secomk">
                      <ul>
                        <li>
                          <a href="product.html">Snacks &amp; Beverages</a>
                        </li>
                        <li>
                          <a href="product.html">Bread &amp; Bakery</a>
                        </li>
                        <li>
                          <a href="product.html">Sweets</a>
                        </li>
                        <li>
                          <a href="product.html">Chocolates &amp; Biscuits</a>
                        </li>
                        <li>
                          <a href="product2.html">Personal Care</a>
                        </li>
                        <li>
                          <a href="product.html">Dried Fruits &amp; Nuts</a>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix" />
                  </div>
                  {/* //footer categories */}
                  {/* quick links */}
                  <div className="col-sm-5 address-right">
                    <div className="col-xs-6 footer-grids">
                      <h3>Quick Links</h3>
                      <ul>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="help.html">Help</a>
                        </li>
                        <li>
                          <a href="faqs.html">Faqs</a>
                        </li>
                        <li>
                          <a href="terms.html">Terms of use</a>
                        </li>
                        <li>
                          <a href="privacy.html">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xs-6 footer-grids">
                      <h3>Get in Touch</h3>
                      <ul>
                        <li>
                          <i className="fa fa-map-marker" /> 123 Sebastian, USA.</li>
                        <li>
                          <i className="fa fa-mobile" /> 333 222 3333 </li>
                        <li>
                          <i className="fa fa-phone" /> +222 11 4444 </li>
                        <li>
                          <i className="fa fa-envelope-o" />
                          <a href="mailto:example@mail.com"> mail@example.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* //quick links */}
                  {/* social icons */}
                  <div className="col-sm-2 footer-grids  w3l-socialmk">
                    <h3>Follow Us on</h3>
                    <div className="social">
                      <ul>
                        <li>
                          <a className="icon fb" href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a className="icon tw" href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a className="icon gp" href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="agileits_app-devices">
                      <h5>Download the App</h5>
                      <a href="#">
                        <img src="images/1.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="images/2.png" alt="" />
                      </a>
                      <div className="clearfix"> </div>
                    </div>
                  </div>
              
                  <div className="clearfix" />
                </div>
              
                <div className="agile-sometext">
                
                  <div className="sub-some child-momu">
                    <h5>Payment Method</h5>
                    <ul>
                      <li>
                        <img src="images/pay2.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay5.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay1.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay4.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay6.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay3.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay7.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay8.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay9.png" alt="" />
                      </li>
                    </ul>
                  </div>
                  {/* //payment */}
                </div>
                {/* //footer fourth section (text) */}
              </div>
            </footer>
            {/* //footer */}
            {/* copyright */}
            <div className="copy-right">
              <div className="container">
                <p>Số 1, Võ Văn Ngân, Thủ Đức, PHCM
                  <a href="">HCMUTE</a>
                </p>
              </div>
            </div>
              
            <a href="#" id="toTop" style={{display: 'none'}}><span id="toTopHover" />To Top</a>
          </div>
      </Router>
    );
  }
}

export default App;
