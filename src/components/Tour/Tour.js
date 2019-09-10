import React, { Component } from 'react'
import './Tour.scss'

class Tour extends Component {
    render() {
        return (
           <>
             <article className="tour">
                 <div className="img-container">
                     <img 
                      height="200"
                      src="https://images.pexels.com/photos/2784891/pexels-photo-2784891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                      alt="Some Random Image"
                      />
                      <span className="close-btn">
                          <i className="fa fa-window-close"/>
                      </span>
                 </div>
                 <div className="tour-info">
                      <h3>City</h3>
                      <h4>Description</h4>
                      <h5>info 
                          <span>
                             <i className="fa fa-arrow-down"></i>
                          </span>
                      </h5>
                      <p>Lorem ipsum is a dummy text</p>
                 </div>
            </article>
           </>
        )
    }
}

export default  Tour