
import React from "react"

const Project = props => {
  return (
    <table className="project-table">
      <tbody>
        <a className="project-links" href={props.link}>
          <tr>
            <td className="project-name">{props.name || ""}</td>
            <td className="project-desc">{props.desc || ""}</td>
          </tr>
          <tr>
            <td className="project-img">
              <img src = {props.img || ""} alt=""></img>
            </td>
          </tr>
        </a>
      </tbody>
    </table>
  )
}

export default Project