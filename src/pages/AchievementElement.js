import react from 'react'
import './AchievementElement.css'

function AchievementElement(props){
    const title = props.title;
    const desc  = props.desc; 
    return(
        <div className="ach-elem">
            <h2 className="ach-title">{title}</h2>
            <p className='ach-desc'>{desc}</p>
        </div>
    );
}
export default AchievementElement;