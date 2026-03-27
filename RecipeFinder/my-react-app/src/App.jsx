import RecipeExplorer from './components/recipeExplorer';
import { Route, Routes, Link } from 'react-router-dom';
import RecipeInstruction from './components/RecipeInstruction';

function App() {
    return (
    <>
      <Routes>
      <Route path="/" element={<RecipeExplorer />} />
      <Route path="/recipe/:id" element={<RecipeInstruction />} />
      </Routes>
    </>
    )
}

export default App;