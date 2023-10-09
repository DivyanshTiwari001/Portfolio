import React, {useState} from 'react'
import AchievementElement from './AchievementElement.js' 
import './Achievement.css'
let i = 0;
function Achievement(){
    const [index ,setIndex] = useState(0);
    function prevcard(){
        console.log(i);
        if(i>0){
            i = i - 2;
            setIndex(i); 
        }
        else{
            i = 0;
            setIndex(i);
        }
    }
    function nextcard(){
        console.log(i);
        if(i<=8){
            i = i + 2;
            setIndex(i); 
        }
        else{
             i = 0;
             setIndex(i);  
        }
    }
    const ref = [
        {
            title:'Postman Student Expert',
            desc :'placeholder'
        },
        {
            title:'Achievements in Coding',
            desc:`5-star in cpp,4-star in c at Hackerrank,
                  2-star at Codechef,
                  solved 90+ problems at Leetcode,
                  solved 50+ problems at GeeksForGeeks,
                  solved 118+ problems at Code Studio,
                  solved 80+ problems at Codechef.
                  `
        },
        {
            title:'9.41 CGPA in Btech 2nd Year',
            desc:'placeholder'
        },
        {
            title:'Cracked JEE Advance in Year 2021',
            desc:'placeholder'
        },
        {
            title:'Cracked JEE Mains in Year 2021',
            desc:'placeholder'
        },
        {
            title:'98% in SENIOR SCHOOL CERTIFICATION EXAMINATION',
            desc:'place holder'
        },
        {
            title:'96.67% in SECONDARY SCHOOL EXAMINATION',
            desc:'placeholder'
        },
        {
            title:'Cracked NMMS Examination',
            desc:'placeholder'
        },
        {
            title:"'A' Certificate Holder in NCC",
            desc:'placeholder'
        },
        {
            title:'Four Time Zonal Group Yoga Competition Winner',
            desc:'placeholder'
        },
        {
            title:'Zonal Individual Yoga Competition Winner',
            desc:'placeholder'
        }
    ]
    const arr = ref.map(element=>{
        return <AchievementElement title={element.title} desc={element.desc}></AchievementElement>
    })
    return(
        <div className='my-ach'>
            <p onClick={prevcard} className='next-prev' id='prev'>&#8249;</p>
            <div className='card-container'>{arr[index]}{arr[index+1]}</div>
            <p onClick={nextcard} className='next-prev' id='next'>&#8250;</p>
        </div>
    );
}
export default Achievement;