import React, {useEffect, useState} from 'react';
import "./Home.css";
let str1 = "Hello!, My Name Is Divyansh Tiwari "
let str2 = "";
let i = 0;
function Home(){
    const [intro,setIntro] = useState(str2);
    const [phase,setPhase] = useState('typing')
    const handler=()=>{
        if(i<str1.length-1){
            str2 += str1[i];
            i = i + 1;
            setIntro(str2);
        }
        else{
            i = 0;
            str2 = "";
            setPhase('waiting');
            setTimeout(()=>{
                setPhase('typing');
            },1000)
        }
    }
    useEffect(() => { 
        const interval = setInterval(() => {
            if(phase==='typing'){
                handler();
            } 
        }, 100); 
        return () => clearInterval(interval); 
    },[]);
    return(
        <div className="home-elem">
            <div className='intro-elem-container'><h1 className='intro-elem'>{intro}</h1></div>
        </div>
    )
}
export default Home;