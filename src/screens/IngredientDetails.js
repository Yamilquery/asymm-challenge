import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Api from '../utils/api';

import Card from '../components/Card';

const IngredientDetails = () => {
  const { id } = useParams();
  const [ingredient, setIngredient] = useState({});

  useEffect(() => {
    const api = new Api();
    api.getIngredientDetails(id).then((response) => {
      setIngredient(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <Card key={ingredient.id} ingredient={ingredient} detailed />
      </div>
    </div>
  )
}

export default IngredientDetails;