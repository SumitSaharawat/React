import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function RecipeInstruction() {
 
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      
      setDetails(data.meals[0]); 
    };

    fetchDetails();
  }, []);

  if (!details) return <h2>Loading recipe secrets...</h2>;

  return (
    <div className="details-page">
      <button onClick={() => navigate(-1)}>⬅️ Back to Search</button>
      
      <h1>{details.strMeal}</h1>
      <img src={details.strMealThumb} alt={details.strMeal} style={{ width: '300px' }} />
      
      <h3>Instructions:</h3>
      <p>{details.strInstructions}</p>
    </div>
  );
}