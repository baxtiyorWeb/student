import React, { useState, useEffect } from 'react';
import {Detector} from "react-detect-offline"
import axios from "axios"
const InternetConnection = (props) => {
	const [internet, setInternet] = useState([])



	return (
		<>
			<Detector render={({online})=>
						online ? props.children :  
						<div style={{paddingTop:"10px", textAlign: "center", color: "red"}}>
							<h1 style={{marginBottom:'10px'}}>No Internet Connection</h1>
							<h4 style={{fontSize: '23px', color: "crimson"}}>Pleae check your internet connection </h4>
						</div>
		}/>
		</>
		);
};


export default InternetConnection;
