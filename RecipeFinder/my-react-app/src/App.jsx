import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchRecipes = async () => {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);

          if (!response.ok) {
            throw new Error('Could not fetch the recipes. Server might be down!');
          }
        
          const data = await response.json();
          
          if(data.meals === null)
          {
            setRecipes([]);
            setMessage("No recipie found please try with a different keyword....");
          }else{
            setRecipes(data.meals); 
            setIsLoading(false);
            setMessage("");
          }

        } catch (err) {
          setError(err.message);
          setIsLoading(false);
        }
      };
          fetchRecipes();

    }, 500);

    return () => clearTimeout(delayDebounceFn);

  }, [input]);

  if (isLoading) {
    return (
      <div className="app-container center-content">
        <h2>Loading delicious recipes... ⏳</h2>
      </div>
    );
  }


  if (error) {
    return (
      <div className="app-container center-content">
        <h2 style={{ color: 'red' }}>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h2>Recipe Explorer</h2>
      </header>

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Type recipe name..." 
          className="search-input"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <p>{message}</p>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card" onClick={() => window.open(recipe.strSource, '_blank')}>
            <img 
              src={recipe.strMealThumb} 
              alt={recipe.strMeal} 
              className="recipe-image"
            />
            <div className="recipe-info">
              <h3>{recipe.strMeal}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;