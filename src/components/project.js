
import React from "react"



const Project = props => {
  let alt = "snap shot of" + props.name;
  let size = "_".repeat(100);
  return (
        <a className="project-links" href={props.link}>
            <div className="project-break">{size}</div>
            <h3 className="project-name">{props.name || ""}</h3>
            <p className="project-desc">{props.desc || ""}</p>  
            <img src={props.img || ""} alt = {alt}></img>
            <div className="project-break">{size}</div>
            <br></br>
        </a>
        
  )
}

export default Project