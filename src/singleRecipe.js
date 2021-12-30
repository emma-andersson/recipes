import React from "react";

function SingleRecipe(props) {
  let { recipeList, activeRecipe, setActiveRecipe } = props;

  // Get active recipe details
  let recipe = recipeList.find((recipe) => recipe.name === activeRecipe);

  function hideRecipe(e) {
    setActiveRecipe("");
  }

  if (recipe) {
    return (
      <article className="single-recipe active">
        <div>
          <button onClick={hideRecipe}>Back</button>
          {recipe.name}
        </div>
      </article>
    );
  } else {
    // return null;
    return (
      <article className="single-recipe">
        <div></div>
      </article>
    );
  }
}

export default SingleRecipe;
