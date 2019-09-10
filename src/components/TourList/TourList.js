import React, { Component } from 'react'
import './TourList.scss'
import Tour from '../Tour/Tour'

class TourList extends Component {
    render() {
        return (
            <section>
               <Tour/>
            </section>
        )
    }
}

export default TourList