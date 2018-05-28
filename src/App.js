import React, {Component} from 'react';
import './App.css';
import Contacts from './containers/Contacts';
import Route from 'react-router-dom/es/Route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Contacts}/>
        <Route exact path="/create" render={() => <Contacts showForm={true}/>}/>
      </div>
    );
  }
}

export default App;
