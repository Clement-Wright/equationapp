import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {EquationNoteCardCollection, EquationNewNote, NewNavBar, EquationCreateForm, EquationUpdateForm} from "./ui-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class App extends Component {
    render() {
    return (
        <div className="App"><header className="App-header">
          <Router>
            <Routes>
                <Route exact path='/' element={<div><NewNavBar/><EquationNoteCardCollection isPaginated itemsPerPage={3} /></div>}/>
                <Route exact path='https://master.dcqoefwu8dgqt.amplifyapp.com/NewNote' element={<EquationCreateForm/>}/>
                <Route exact path='/Edit' element={<EquationUpdateForm/>}/>
            </Routes>
          </Router>
            </header></div>
    )
    }
}


export default withAuthenticator(App);
