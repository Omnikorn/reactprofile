import React from 'react';
import "./home.css"
import "./script"



export default function Home() {


  return (
    <React.Fragment>
      <div className="console-container">
			<span id="text"></span>
			<div className="console-underscore" id="console">
				
			</div>
		</div>
		<section className="empty"></section>
    </React.Fragment>
  );
}
