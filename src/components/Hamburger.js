/*Hamburger Menu Component*/
import React from 'react';
import PropTypes from "prop-types";
import './css/Hamburger.css';


function Hamburger(props) {
	return(
		<div id={"burgerContainer"}>
			<button className={props.hamburgerClassName} onClick={props.hamburgerToggle} tabIndex='2' type={"button"}  aria-label={props.hamburgerArialabel} >
				<span className={"hamburger-box"}  >
		  			<span className={"hamburger-inner"}> </span>
				</span>
			</button>
		</div>
	);
}

Hamburger.propTypes = {
  hamburgerArialabel: PropTypes.string.isRequired,
  hamburgerClassName: PropTypes.string.isRequired,
  hamburgerToggle: PropTypes.func.isRequired
}

function myFunction() {
    var x = document.getElementById("mySidenav");
    if (x.style.width === "0px") {
        x.style.width = "30%";
    } else {
        x.style.display = "0px";
    }
} 
export default Hamburger;

