import { useEffect, useState } from 'react';

import Api from '../utils/api';
import Card from '../components/Card';
import Search from '../components/Search';

import { useSelector, useDispatch } from "react-redux";
import { change_search } from '../store/actions/ingredients';

const IngredientsList = () => {
  const [ingredients, setIngredients] = useState([]);
  const search = useSelector((state) => state.ingredients.search);
  const dispatch = useDispatch();

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
        <Search value={search} placeholder="Search ingredients" onChange={(value) => dispatch(change_search(value))} />
      </div>

      <div className="flex flex-wrap">
        {ingredients.map((ingredient) => (
          <div key={ingredient.id} className="w-full md:w-1/2 lg:w-1/3">
            <Card key={ingredient.id} ingredient={ingredient} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientsList;