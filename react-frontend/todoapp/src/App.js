import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListTaskComponent  from './components/ListTaskComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTaskComponent from './components/CreateTaskComponent'


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent/>
                <div className="container">
                    <Routes> 
                      <Route path = "/"  element = {<ListTaskComponent/>}></Route>
                      <Route path = "/task" element = {<ListTaskComponent/>}></Route>
                      <Route path = "/add-task" element = {<CreateTaskComponent/>}></Route>
                    </Routes>
                </div>
              <FooterComponent/>
        </Router>
    </div>
  );
}

export default App;
