import React, { Component } from 'react';
class Footer extends Component {
    render() {
      return (
        <footer className="bg-dark pb-2">
        <div className="container pt-3">
            <ul className="row " style={{"list-style":"none","font-size":"20px","margin-left":"170px"}}>
                <li><a href="#" className="pl-3">Company Information </a></li>
                <li><a href="#" className="pl-3">Contact us </a></li>
                <li><a href="#" className="pl-3">Reviews </a></li>
                <li><a href="#" className="pl-3">Terms of service </a></li>
            </ul>
        <h5 className="footer-copyright text-center" style={{"color":"white"}}>© 2018 Copyright Text</h5>
        </div>
        <div className="footer-social text-center " style={{"font-size":"30px"}}>
            <a href="#" className="social-icons" ><i className="fa fa-facebook"></i> </a>
            <a href="#" className="social-icons pl-5"><i className="fa fa-google-plus"></i></a> 
            <a href="#" className="social-icons pl-5"><i className="fa fa-twitter"></i> </a>
        </div>
    </footer>

    );
}
}

export default Footer;
