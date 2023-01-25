import React from "react";
import { useLoaderData } from "react-router";
import Topic from "../Topic/Topic";

const Topics = () => {
    const topics = useLoaderData().data;
  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 container my-3">
      {
          topics.map(topic => <Topic
            topic = {topic}
            key = {topic.id}
          ></Topic>)
      }
      </div>
    </div>
  );
};

export default Topics;
