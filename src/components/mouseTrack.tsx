import React, { useState } from "react"



export const MouseTrack = () => {
    

    const [X, setX] = useState<number>(0);
    const [Y, setY] = useState<number>(0);
    const [R, setR] = useState(0);

    const moonStyle : React.CSSProperties = {
        position:"absolute" ,
        left:"35vw" ,
        top:"25vh",
        width:"30vw" ,
        height:"auto",
        opacity:"85%",
        transition: "rotate 0.01s",
        rotate:`${R}deg`
    }
    const mouseCord = (e: any) => {
        setX(e.pageX-750)
        setY(e.pageY-350)
        let temp=0;
        
        if (X>=0 && Y>=0){
            temp =  (1* (Math.atan(Math.abs(Y/X)) * (180/Math.PI)))+180
        }
        else if (X<0 && Y>=0){
            temp = ( 1 * Math.atan(Math.abs(X/Y)) * (180/Math.PI)) +270
        }
        else if (X>=0 && Y<0){
            temp =  (1 * Math.atan(Math.abs(X/Y)) * (180/Math.PI)) +90
        }
        else {
            temp =  (1 * Math.atan(Math.abs(Y/X)) * (180/Math.PI)) 
        }

        
        setR(temp+200)
    }
    return (
        <div onMouseMoveCapture={(e) => mouseCord(e) } style={{height:"100vh" ,width:"100vw", position:"fixed",top:0,left:0}}>
            <h2 style={{color:"white"}}>x = {X} y = {Y} r = {R}</h2>
            <img src={require('../assets/moon1.webp') } style={{position:"absolute" ,left:"35vw" , width:"30vw" ,height:"auto",top:"25vh",}} />
            <img src={require('../assets/moonlight1.webp') } style={moonStyle} />
        </div>
    )
}