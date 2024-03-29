import React from "react"
import "./Project.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router"

const Project = (props) => {
  const { id, title, shortDesc, images, links } = props.project
  const navigate = useNavigate()

  const redirectToDetails = (id) => {
    const redirectURL = `/${id}`
    navigate(redirectURL)
  }

  return (
    <div className="col">
      <div className="project-img-container">
        {links.url && (
          <div className="icons">
            <a href={links.url} target="_blank" rel="noopener noreferrer">
              {" "}
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        )}
        <div className="details">
          <button
            className="btn-details"
            onClick={() => {
              redirectToDetails(id)
            }}>
            Details
          </button>
        </div>
        <img className="project-img" src={images[0]} alt="" />
      </div>
      <div className="text-start mx-2 mt-2">
        <h4>{title}</h4>
        <p>{shortDesc}</p>
      </div>
    </div>
  )
}

export default Project
