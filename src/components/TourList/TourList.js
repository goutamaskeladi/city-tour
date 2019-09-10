import React, { Component } from 'react'
import './TourList.scss'
import Tour from '../Tour/Tour'
import TourData from '../../tourData'

class TourList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tours: TourData
        }
    }
    removeItem(id) {
        this.setState({
             tours : this.state.tours.filter(item => item.id != id)
        })
    }
    render() {
        return (
            <section>
               {
                   this.state.tours.map(item => {
                       return <Tour key={item.id} {...item} delete={() => this.removeItem(item.id)}/>
                   })
               }
            </section>
        )
    }
}

export default TourList