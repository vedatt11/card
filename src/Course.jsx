import React from 'react'
import './App.css'
export const Course = ({title,description,yol,classismi}) => {
  return (
    <>
    <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={yol} alt="Kurslarım"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      
      <div className="media-content">
        <p className="title is-4">{title}</p>
      </div>
    </div>

    <div className="content">
     {description}
    </div>
  </div>
</div>
   
    
    </>
  )
}
