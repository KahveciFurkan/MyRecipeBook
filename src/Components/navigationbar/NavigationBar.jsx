import React from 'react'

import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <div className='nav'>
      <div className='title'>Recipe Platform</div>
      <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/InputRecipe">Add Recipe</a></li>
      <li><a href="/Login">Settings</a></li>
      </ul>
    </div>
  )
}

export default NavigationBar