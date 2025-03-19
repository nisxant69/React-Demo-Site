function Blog(){
    return(
    <div className="animate-pulse block-item shadow-md max-w-xl mx-auto mt-20">
  {/* Head line */}
  <div className="bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 h-6 rounded-t-3xl" />
  <div className="py-4 px-6">
    {/* User card (avatar + username) */}
    <div className="flex items-center space-x-2">
      <div className="h-7 w-7 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full" />
      <div className="h-3 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-1/3" />
    </div>
    {/* Text block */}
    <div className="my-6">
      {/* Heading */}
      <div className="h-5 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-3/4" />
      {/* Description */}
      <div className="my-4">
        <div className="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-full" />
        <div className="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-5/6" />
        <div className="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-4/6" />
        <div className="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-5/6" />
        <div className="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-3/6" />
        <div className="h-3 my-2 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-2/6" />
      </div>
    </div>
    <div className="my-4">
      {/* Button */}
      <div className="h-11 bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-lg w-full" />
      {/* Post data + time */}
      <div className="h-3 my-4 mx-auto bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 rounded-full w-1/2" />
    </div>
  </div>
</div>

    )
}

export default Blog