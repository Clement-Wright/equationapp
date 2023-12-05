
import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {EquationNoteCardCollection, EquationNewNote, EquationNavBar, EquationCreateForm, EquationUpdateForm} from "./ui-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class App extends Component {
    render() {
    return (
        <div className="App"><header className="App-header">
          <Router>
            <Routes>
                <Route exact path='/' element={<div><EquationNavBar/><EquationNoteCardCollection isPaginated itemsPerPage={3} /></div>}/>
                <Route exact path='/NewNote' element={<EquationCreateForm/>}/>
                <Route exact path='/create' element={<EquationNewNote/>}/>
                <Route exact path='/update' element={<EquationUpdateForm/>}/>
            </Routes>
          </Router>
            </header></div>
    )
    }
}


export default withAuthenticator(App);