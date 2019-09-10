import React, {useState} from 'react'
import './Tour.scss'

function Tour(props) {
    const { img, city, name, info } = props
    const [ infoState, showInfo ]= useState(false)
    return (
        <>
          <article className="tour">
              <div className="img-container">
                  <img 
                   height="200"
                   src={window.location.origin + img} 
                   alt={city}
                   />
                   <span className="close-btn">
                       <i className="fa fa-window-close" onClick={props.delete}/>
                   </span>
              </div>
              <div className="tour-info">
                   <h3>{city}</h3>
                   <h4>{name}</h4>
                   <h5>info 
                       <span>
                          <i className="fa fa-arrow-down" onClick={() => showInfo(!infoState)} style={{cursor:'pointer'}}></i>
                       </span>
                   </h5>
                   {
                       infoState ? <p>{info}</p> : ""
                   }
              </div>
         </article>
        </>
     )
}

export default  Tour