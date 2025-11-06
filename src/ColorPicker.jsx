import React,{useState} from "react";
function ColorPicker(){
    const [color,setColor]=useState("#ffffff");

    function changeColor(event){
       setColor(event.target.value);
    }

    return (<>
        <div className= "flex flex-col items-center">
            <h1 className="m-7 text-3xl font-bold"> Color Picker</h1>
            <div className="w-72 h-72 flex justify-center items-center border-2 border-solid shadow-2xl rounded-2xl mb-6 transition-all duration-[230ms] ease-in-out" style={{backgroundColor:color}}>
                <p >Selected Color: {color}</p>
            </div>
            <label>Select a color</label>
            <input type="color" value={color} onChange={changeColor} />
        </div>    
    </>)
}


export default ColorPicker;