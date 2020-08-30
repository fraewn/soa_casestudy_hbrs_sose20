import React, { Component } from "react";
import "../css/footer.css";
import "../css/fileSearch.css";

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer id="sticky-footer" class="py-2 bg-dark text-white-50">
            <div class="container text-center">
              <small>Copyright &copy; Franziska Küsters, Dominik Opitz - Hochschule Bonn-Rhein-Sieg</small>
            </div>
          </footer>
         );
    }
}
 
export default Footer;