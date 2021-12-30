function SearchBar(props) {
  let { search, setSearch, recipeDatabase, setRecipeList } = props;

  function handleInputChange(e) {
    setSearch(e.target.value);
    filterRecipes(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(`Search for... ${search}`);
    // filterRecipes();
  }

  function filterRecipes(searchString) {
    let filteredRecipes = recipeDatabase.filter((recipe) => {
      let recipeName = recipe.name.toLowerCase();
      // let ingredients = recipe.ingredients.join();
      // console.log(ingredients);
      // let searchTerm = searchT || search.toLowerCase();
      let searchTerm = searchString;
      console.log(searchTerm);
      return (
        // recipeName.includes(searchTerm) || ingredients.includes(searchTerm)
        recipeName.includes(searchTerm)
      );
    });

    console.log(filteredRecipes);
    setRecipeList(filteredRecipes);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="search" onChange={handleInputChange} value={search} />
    </form>
  );
}

export default SearchBar;
