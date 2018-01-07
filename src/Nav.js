import React, { Component } from 'react';
class Nav extends Component {
    render() {
      return (
          <div>
        <div className="container-fluid pt-5 pl-0 pr-0" style={{"background-image":"url('images/pic1.jpeg')","height":"366px"}}>
            <nav className="bg-dark " style={{"opacity":"0.7"," height":"150px"}}>
                <div className="row pt-4">
            <h2 className="pl-5 ml-4 text-center" style={{"color":"white"}}>KiRaNn <br/>SoLuTiOnS</h2>
            <ul className="row pt-3" style={{"list-style":"none","margin-left":"575px","font-size":"20px"}}>
                <li><a href="/" style={{"text-decoration":"none","color":"white"}}>Home</a> </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li><a href="/login2" style={{"text-decoration":"none","color":"white"}}>Login </a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li><a href="/signup2" style={{"text-decoration":"none","color":"white"}}>Signup</a> </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li><a href="/about2" style={{"text-decoration":"none","color":"white"}}>About</a> </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li><a href="/contact2" style={{"text-decoration":"none","color":"white"}}>Contact</a> </li>
            </ul>
                </div>  
            </nav>
        </div>
        <div>
        <div className="container-fluid pl-0 pr-0" style={{"background-image":"url('images/pic8.jpeg')","height":"400px"}}>
        <div className="pl-3" style={{"color":"cornsilk","font-size":"60px","padding-top":"200px"}}>
       <p>"Be a part of solution but<br/>&nbsp;&nbsp;&nbsp;&nbsp; dont be a part of problem"</p>
        </div>
        </div>
    </div>
    </div>
    
      );
    }
  }
  
  export default Nav;
  