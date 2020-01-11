import React, { Component } from 'react';

import Contacts from './containers/Contacts.jsx'

/*App component starts here */
class App extends Component {

  render() {
    return (
            <div className="container">
           
              <div className="row">
             <div className="col-sm-10 col-sm-offset-1">
                    <span className="title">Characters Star Wars List:</span>
                      <Contacts />       
                  </div>
                </div>
              </div>
             
    );
  }
}

export default App;
