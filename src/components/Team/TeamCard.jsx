import React from "react";

export default function TeamCard(props) {
  return (
    <div className="team-card">
      <div className="card-body">
        <img className="card-image" src={props.image} alt="team" />
        <h2 className="card-title">{props.name}</h2>
        <h2 className="card-subtitle">{props.title}</h2>
        <hr className="card-hr" />
        <p className="card-description">{props.description}</p>
      </div>
      <div className="card-icons">
        <a href={props.linkedin} target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href={props.twitter} target="_blank">
          <i className="fa-brands fa-square-twitter"></i>
        </a>
      </div>
    </div>
  );
}
