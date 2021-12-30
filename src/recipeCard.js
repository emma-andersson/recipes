import React from "react";

function RecipeCard(props) {
  const { recipe } = props;
  const { name, img, ingredients } = recipe;
  const { activeRecipe, setActiveRecipe } = props;
  console.log(recipe);

  function onClick(e) {
    setActiveRecipe(recipe.name);
    e.target.classList.add("active");
  }

  return (
    <div
      className={activeRecipe === recipe.name ? "active recipe" : "recipe"}
      onClick={onClick}
    >
      <div className="recipe__details">
        <h2>{name}</h2>
        {ingredients ? (
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <img src={img} alt={name} />
    </div>
  );
}

export default RecipeCard;
