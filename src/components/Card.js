import { useHistory } from "react-router-dom";

const Card = (props) => {
  const history = useHistory();

  const handleClick = (id) => {
    if (!props.detailed) history.push(`/${id}`);
  }

  return (
    <div className="w-full py-4 px-4">
      {props.detailed &&  (
        <div class="w-6">
          <a href="javascript:;" onClick={() => history.go(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
          </a>
        </div>
      )}

      <a href="javascript:;" onClick={() => handleClick(props.ingredient.id)}>
        <div className="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">
          <div className="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-green-500">
            Ingredient
          </div>
          
          <img src={props.ingredient.image} className="h-32 rounded-lg w-full object-cover"/>
          
          <div className="py-2 px-2">
            <div className=" font-bold font-title text-center">
              {props.ingredient.name}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Card;