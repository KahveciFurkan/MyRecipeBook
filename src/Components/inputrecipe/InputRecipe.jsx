import React, { useContext, useState } from "react";
import "./inputrecipe.css";
import RecipeContext from "../../Context/RecipeContext";

const InputRecipe = () => {
  const {addNewRecipe,isLoading} = useContext(RecipeContext)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [titleError, SetTitleError] = useState(false);
  const [DescError, SetDescError] = useState(false);
  const [ImageError, SetImageError] = useState(false);

  const handleSubmit = (x) => {
    x.preventDefault();
    
    SetTitleError(false)
    SetDescError(false)
    SetImageError(false)


    addNewRecipe({title,image,description})

    if(title.trim() && description.trim() && image.trim()) {
      setTitle("");
      setDescription("");
      setImage("");
    }
    else{
      !title.trim()&& SetTitleError(true)
      !description.trim() && SetDescError(true)
      !image.trim() && SetImageError(true)
    }
  };
  //OnChange

  return (
    <form className="center" onSubmit={handleSubmit}>
      <div>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="input-title"
          type="text"
          placeholder="Recipe Title"
        />
        {titleError ? <p className="error">Bu alan boş geçilemez</p> : null}
      </div>
      <br />

      <div>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="input-desc"
          type="text"
          placeholder="Recipe Description"
        />
        {DescError ? <p className="error">Bu alan boş geçilemez</p> : null}
      </div>
      <br />

      <div>
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          className="input-title"
          type="text"
          placeholder="Image Url"
        />
        {ImageError ? <p className="error">Bu alan boş geçilemez</p> : null}
      </div>
      <br />

      <button type="submit">{isLoading.add ? "Loading.." : "Add New Recipe"}</button>
    </form>
  );
};

export default InputRecipe;
