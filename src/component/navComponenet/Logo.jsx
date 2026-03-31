// const  Logo = ()=>{
//     return(
//     <div className="flex items-center gap-2">
      
//       <span className="text-2xl">✈️</span>
//       <h1 className="text-xl font-bold text-blue-600">EduJspider</h1>

//     </div>
//     )
// }
// export default Logo;

const Logo = () => {
  return (
    <div
      className="flex items-center gap-3 
      cursor-pointer select-none group"
    >

      {/* icon */}
      <span
        className="text-3xl 
        group-hover:rotate-12 
        transition duration-300"
      >
        🚀
      </span>

      {/* text */}
      <h1
        className="text-2xl font-extrabold tracking-wide
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        bg-clip-text text-transparent
        group-hover:opacity-90 transition"
      >
        EduJspider
      </h1>

    </div>
  );
};

export default Logo;