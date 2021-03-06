import { useHistory } from "react-router-dom";
import { useState } from 'react';

const Card = (props) => {
  const history = useHistory();
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleClick = (id) => {
    if (!props.detailed) history.push(`/${id}`);
  }

  const src_image = `${process.env.REACT_APP_IMAGES_CDN}/${props.ingredient.name}`;

  return (
    <div className="w-full py-4 px-4">
      {props.detailed &&  (
        <div className="w-6">
          <div className="cursor-pointer" onClick={() => history.go(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
          </div>
        </div>
      )}

      <div class="cursor-pointer" onClick={() => handleClick(props.ingredient.id)}>
        <div className="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">
          {props.detailed &&  (
            <div className="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-green-500">
              Consistency: {props.ingredient.consistency}
            </div>
          )}
          
          {!imgLoaded && (
            <div className="flex flex-col items-center justify-center w-full h-32 rounded-lg bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )}
          <img alt="Ingredient" src={src_image} className={`h-32 rounded-lg w-full object-cover ${imgLoaded ? '' : 'hidden'}`} onLoad={() => setImgLoaded(true)} />
          
          <div className="py-2 px-2">
            <div className=" font-bold font-title text-center">
              {props.ingredient.name}
            </div>
            
            {props.detailed &&  (
              <div className="text-gray-700 text-center">
                {props.ingredient.aisle}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;