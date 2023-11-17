import React, { useContext, useState } from "react";
import "./recipeCard.css";
import RecipeContext from "../../Context/RecipeContext";

const RecipeCard = ({ title, image, description, id }) => {
  const { deleteRecipe } = useContext(RecipeContext);
  const [deleted, SetDeleted] = useState(false);
  return (
    <div className="card">
      <img src={image} alt="" />
      <h3 className="title">{title}</h3> <br />
      <p className="desc">{description}</p>
      <button
        type="submit"
        className="btn-delete"
        onClick={async () => {
          SetDeleted(true);
          await deleteRecipe(id);
          SetDeleted(false);
        }}
      >
        {deleted ? "Loading.." : "Sil"}
      </button>
    </div>
  );
};

export default RecipeCard;
