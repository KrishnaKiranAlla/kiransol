import React, { Component } from 'react';
class Signup extends Component {
    render() {
      return (
        <div style={{"background-image":"url('images/pic11.jpeg')","height":"560px"}}>
            <div>
                <p style={{"font-size":"40px","padding-top":"90px","margin-left":"50px"}}><b>"Problem is nothing when you get a solution"</b>&nbsp;-&nbsp;Register with us</p>
            </div>
        <div style={{"margin-left":"300px","padding-top":"50px","font-size":"28px"}}>
        
            <div className="form-inline pb-3">
              FirstName:
              <input style={{"margin-left":"61px","height":"33px","width":"300px"}} type="FirstName" className="form-control" id="" placeholder="Enter firstname" name=""/>
            </div>
            <div className="form-inline pb-3" >
              LastName:
              <input style={{"margin-left":"63px","height":"33px","width":"300px"}} type="LastName" className="form-control" id="" placeholder="Enter lastname" name=""/>
            </div>
        
            <div className="form-inline pb-3">
             Email:
             <input style={{"margin-left":"120px","height":"33px","width":"300px"}} type="text" className="form-control" placeholder="Enter email " name=""/>
             </div>
             <div className="form-inline pb-3">
             Mobile Number:
             <input type="text" style={{"height":"33px"}} className="form-control" placeholder="Enter number " name=""/>
             </div>
            
            <button style={{"margin-left":"200px","height":"33px"}} type="submit" className="btn btn-default">Register</button>
                      </div>
                    </div>  
    );
}
}

export default Signup;
