import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import PhotoUploader from './components/PhotoUploader';

import './app.css';

class App extends React.Component{
    
    render(){
       return (
        <div>
         <Navbar/>
         <div className="container">
            <div className="row">
               <div className="col s12">
                  <PhotoUploader/> 
               </div>
            </div>
         </div>
        </div>
       );   
    }

}

ReactDOM.render(<App/>, document.querySelector("#root"));