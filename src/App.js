
import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {EquationNoteCardCollection, EquationNewNote, EquationNavBar, EquationCreateForm, EquationUpdateForm} from "./ui-components";
import { Routes, Route } from 'react-router-dom';


class App extends Component {
    render() {
    return (
        <div className="App"><header className="App-header">
            <Routes>
                <Route exact path='/' element={<div><EquationNavBar/><EquationNoteCardCollection isPaginated itemsPerPage={3} /></div>}/>
                <Route exact path='/newnote' element={<EquationCreateForm/>}/>
                <Route exact path='/create' element={<EquationNewNote/>}/>
                <Route exact path='/update' element={<EquationUpdateForm/>}/>
            </Routes>
        </header></div>
    )
    }
}


export default withAuthenticator(App);