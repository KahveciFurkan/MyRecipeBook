import React, { useContext, useEffect, useState } from 'react'
import RecipeCard from '../recipecard/RecipeCard'
import './recipeList.css'
import RecipeContext from '../../Context/RecipeContext'

const RecipeList = () => {
  const {recipes,isLoading} = useContext(RecipeContext)

  return (
    
    <div className='cards'>
      {isLoading.read && <p>Loading...</p>}
      {recipes.map((recipe)=> <RecipeCard {...recipe} isLoading = {isLoading}/>)}
    </div>
  )
}

export default RecipeList