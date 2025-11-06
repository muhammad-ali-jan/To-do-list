import profilePic from "../assets/ali pic.jpg";
function Card ({name,pic}){

    return(
        <div className="w-50 h-60  border border-gray-300 shadow-2xl">
            <img src={pic?pic:profilePic} alt="my profile"  className="w-33 h-33 mt-2 mx-auto rounded-full object-cover"/>
            {console.log(pic)
            }
            <h2 className="text-center mt-2 font-bold">{name}</h2>
            <p className="text-center text-gray-500 text-sm">Hello everyone! this is my profile</p>
        </div>
    )
}

export default Card