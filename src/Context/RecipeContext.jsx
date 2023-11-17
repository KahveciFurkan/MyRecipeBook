import React, { createContext,useState,useEffect } from 'react'
import axios from 'axios'

export const RecipeContext = createContext()

export const RecipeProvider = ({children}) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [titleError, SetTitleError] = useState(false);
  const [DescError, SetDescError] = useState(false);
  const [ImageError, SetImageError] = useState(false);
  const [recipes,setRecipes] = useState([])
  const [isLoading,setIsLoading] = useState({
    read:false,
    add : false
  })



  const deleteRecipe = async (id) => {
    const response = await axios.delete(`http://localhost:8000/fakeRecipes/${id}`)
    if(response.status === 200) {
      const updatedRecipes = recipes.filter(recipe => recipe.id !== id )
      setRecipes(updatedRecipes) 
    }
  }



  useEffect (() => {
    try {
      setIsLoading(prevIsLoading => ({...prevIsLoading, read:true}))
     axios.get("http://localhost:8000/fakeRecipes")
     .then(response => {
       setRecipes(response.data)
     })
     setIsLoading(prevIsLoading => ({...prevIsLoading, read:false}))  
     .catch(error=>{console.error("there is here error",error)})
      
    } catch (error) {
    }
      
  },[])

  const addNewRecipe = async({title,description,image}) => {
    setIsLoading(prevIsLoading =>({...prevIsLoading,add:true}))
    const response = await axios
    .post("http://localhost:8000/fakeRecipes",{ title, image, description })
    
    if(response.status === 201) {
      setRecipes((prevRecipes)=>[...prevRecipes,response.data])
      
    }
    setIsLoading(prevIsLoading =>({...prevIsLoading,add:false}))

  }

  return (
    <RecipeContext.Provider value={{addNewRecipe,deleteRecipe,isLoading,recipes}}>

    {children}
    </RecipeContext.Provider>
  )
}

export default RecipeContext