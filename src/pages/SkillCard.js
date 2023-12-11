import "./SkillCard.css"
function SkillCard(props){
    const skill = props.skill;
    const proof = props.proof;
    return(
        <div className='skill-card'>
            <div className="skill"><p>{skill}</p></div>
            <div className="proof"><a href={proof}>View</a></div>
            
        </div>
    );
}
export default SkillCard;