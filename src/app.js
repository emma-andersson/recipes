import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchBar from "./searchBar";
import SingleRecipe from "./singleRecipe";
import recipeDatabase from "./recipeDatabase";
import "./style.scss";

function App(props) {
  let [search, setSearch] = useState("");
  let [recipeList, setRecipeList] = useState(recipeDatabase);
  let [activeRecipe, setActiveRecipe] = useState("");
  const { title } = props;

  return (
    <>
      <header>
        <h1>{title}</h1>
        <SearchBar
          search={search}
          setSearch={setSearch}
          recipeDatabase={recipeDatabase}
          setRecipeList={setRecipeList}
        />
      </header>
      <main>
        <SingleRecipe
          activeRecipe={activeRecipe}
          setActiveRecipe={setActiveRecipe}
          recipeList={recipeList}
        />
        <ul className="recipe-cards">
          {recipeList.map((recipe) => (
            <li>
              <RecipeCard
                recipe={recipe}
                key={recipe.name}
                activeRecipe={activeRecipe}
                setActiveRecipe={setActiveRecipe}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
