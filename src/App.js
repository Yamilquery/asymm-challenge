import { useEffect, useState } from 'react';

import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Api from './utils/api';
import Card from './components/Card';
import Search from './components/Search';

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    const api = new Api();
    api.getIngredients({ query: search }).then((response) => {
      const ingredients = Array.isArray(response.data.results) ? response.data.results : [];
      setIngredients(ingredients);
    });
  }, [search]);

  return (
    <div className="App pt-4">
      <h1 className="text-2xl">Ingredients</h1>

      <div className="px-4">
        <Search placeholder="Search fruit" onChange={(value) => setsearch(value)} />
      </div>

      <div className="flex flex-wrap">
        {ingredients.map((ingredient) => <Card key={ingredient.id} ingredient={ingredient} />)}
      </div>
    </div>
  );
}
