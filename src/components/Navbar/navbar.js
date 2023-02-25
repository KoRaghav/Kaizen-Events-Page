import './navbar.css'
import logo from '../../assets/images/logo.png'
export default function Navbar() {
    return (
        <header class="header sticky-top">
          <nav class="navbar navbar-expand">
            <div class="container-fluid">
              <div class="float-left px-3">                
                <a href="https://www.kaizeniitd.in/"><img width={40} class="logo" alt="Kaizen" src={logo}/></a>
              </div>


              <div class="float-right">
                  <ul class="navbar-nav">

                      <li class="nav-item mx-2">
                        <a class="nav-link" href="https://nss-iit-delhi.github.io/kaizenHome2023">HOME</a>
                      </li>

                      <li class="nav-item mx-2">
                        <a class="nav-link" href="https://kaizenevents.web.app">EVENTS</a>
                      </li>                               

                      <li class="nav-item mx-2">
                        <a class="nav-link" href="https://cap-kaizen-iitd.netlify.app/">CAP</a>
                      </li>                               

                      <li class="nav-item mx-2">
                        <a class="nav-link" href="https://nss-iit-delhi.github.io/kaizenHome2023/#footer">CONTACT US</a>
                      </li>                               
                  </ul>
              </div>

            </div>
          </nav>
        </header>          

    );
}