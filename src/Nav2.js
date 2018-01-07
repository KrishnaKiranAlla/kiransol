import React, { Component } from 'react';
class Nav2 extends Component {
    render() {
      return (
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
    );
}
}

export default Nav2;
