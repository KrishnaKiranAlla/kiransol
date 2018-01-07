import React, { Component } from 'react';
class Login extends Component {
    render() {
      return (
        <div  style={{"background-image":"url('images/pic10.jpeg')","height":"485px"}}>
            <div >
                <p style={{"font-size":"35px","color":"white","padding-top":"40px","padding-left":"50px"}}>"FaStEsT fInGeRs FiRsT"&nbsp;- &nbsp;<i>login to get a solution for your problem</i></p>
            </div>

            <div style={{"padding-top":"20px","padding-left":"480px","color":"black"}}>
                <div className="form-inline " style={{"font-size":"30px"}}>
                  Email:
                  <input style={{"margin-left":"65px","height":"33px","width":"300px"}}  type="email" className="form-control " id="email" placeholder="Enter email" name="email"/>
                </div><br/>
                <div className="form-inline" style={{"font-size":"30px"}}>
                 Password:
                  <input style={{"margin-left":"10px","height":"33px","width":"300px"}}  type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                </div><br/>
                <div className="checkbox" style={{"font-size":"25px"}}>
                  <label><input type="checkbox"  name="remember"/> Remember me</label>
                </div><br/>
                <button style={{"margin-left":"150px","width":"70px","height":"30px","font-size":"18px"}} type="submit" className="btn btn-danger pt-1">Login</button>
                          </div>
            
        </div>
   
    );
}
}

export default Login;
