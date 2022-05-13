import React from 'react';
import ReactDOM from 'react-dom';

function MainContent(){
    return(
        <div className="main">
          <h1 className="main--title">Fun Facts about React</h1>
          <ul className="main--facts">
                <li className="items">Was first released in 2013</li>
                <li className="items">Was originally created by Jordan Walke</li>
                <li className="items">Has well over 100K stars on GitHub</li>
                <li className="items">Is maintained by Facebook</li>
                <li className="items">Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>
    )
}
export default MainContent;