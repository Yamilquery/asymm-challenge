const Search = (props) => {
  return (
    <div className="w-full my-2 p-1 bg-white flex border border-gray-200 rounded">
      <div className="flex flex-auto flex-wrap"></div>
      <input
        placeholder="Search"
        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        onChange={(e) => props.onChange(e.target.value)}
      />
      <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
        <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button>
      </div>
    </div>
  )
};

export default Search;