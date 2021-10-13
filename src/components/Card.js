const Card = (props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 py-4 px-4">
      <a href="#">
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