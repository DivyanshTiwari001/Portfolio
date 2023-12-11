import React, {useEffect, useState} from 'react';
import Footer from "./Footer.js";
import SkillCard from "./SkillCard.js"
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
    });
    const skills = [
    {
        'skill':'C/C++',
        'proof':''
    },
    {
        'skill':'HTML,CSS,Javascript',
        'proof':''
    },
    {
        'skill':'Data Structures',
        'proof':''
    },
    {
        'skill':'Algorithm',
        'proof':''
    },
    {
        'skill':'DBMS',
        'proof':''
    },
    {
        'skill':'Linux',
        'proof':''
    },
    {
        'skill':'JAVA',
        'proof':''
    },
    {
        'skill':'Python',
        'proof':''
    },
    {
        'skill':'NodeJs and ExpressJs',
        'proof':''
    },
    {
        'skill':'React (learning)',
        'proof':''
    },
    ]
    const arr=[];
    skills.forEach(elem=>{
        arr.push(<SkillCard skill={elem.skill} proof={elem.proof}></SkillCard>);

    })
    return(
        <div className="home-elem">
            <div className='intro-elem-container'><h1 className='intro-elem'>{intro}</h1></div>
            <div className='content'>
                <h3 className='content-header'>A Computer Science and Engineering Student and an aspiring Software Developement Engineer.
                I have a huge interest in computer science and a dream to do something worth remembering in this field.</h3>
                <div className='content-body'>
                    <h4>My Skill Set:</h4>
                    {arr}
                </div>
            </div>
            <div className='footer'><Footer></Footer></div>
        </div>
    )
}
export default Home;