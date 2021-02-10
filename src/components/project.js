
import React from "react"

const Project = props => {
  return (
    <table className="project-table">
      <tbody>
        <a className="project-links" href={props.link}>
          <div className="project-text">
            <tr>
              <td className="project-name">{props.name || ""}</td>
            </tr> 
            <tr>
              <td className="project-desc">{props.desc || ""}</td>  
            </tr>
          </div>
          <div className="project-img-div">
              <img src={props.img || ""} alt = "snap shot of the project"></img>
          </div>
        </a>
      </tbody>
    </table>
  )
}

export default Project