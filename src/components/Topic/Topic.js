import React from "react";
import { Link } from "react-router-dom";
import "./Topic.css";

const Topic = (props) => {
  const { id, name, logo, total } = props.topic;
  return (
    <div class="col">
      <div class="card h-100">
        <img src={logo} class="card-img-top" alt="..." />
        <div class="card-body">
          <div>
            <h5 class="card-title">{name}</h5>
            <p>Questions: {total}</p>
          </div>
          <p><small><Link to={`/quiz/${id}`} className="topic-btn">Quiz -</Link></small></p>
        </div>
      </div>
    </div>
  );
};

export default Topic;
