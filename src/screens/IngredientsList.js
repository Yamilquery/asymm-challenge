import { useEffect, useState } from 'react';

import Api from '../utils/api';
import Card from '../components/Card';
import Search from '../components/Search';

const IngredientsList = () => {
  const [ingredients, setIngredients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const api = new Api();
    api.getIngredients({ query: search }).then((response) => {
      const ingredients = Array.isArray(response.data.results) ? response.data.results : [];
      return setIngredients(ingredients);
    });
  }, [search]);

  return (
    <div>
      <h1 className="text-2xl">Ingredients</h1>

      <div className="px-4">
        <Search placeholder="Search ingredients" onChange={(value) => setSearch(value)} />
      </div>

      <div className="flex flex-wrap">
        {ingredients.map((ingredient) => (
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Card key={ingredient.id} ingredient={ingredient} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientsList;