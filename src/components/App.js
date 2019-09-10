import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import TourList from './TourList/TourList'

class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <main>
                <TourList/>
                </main>
            </>
        )
    }
}

export default App