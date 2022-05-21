import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ item }) => {
  return (
    <div>
      <div className="box">
        <div className="image">
          <img src={item.name} alt=""></img>
        </div>
        <div className="content">
          <h3>{item.title}</h3>

          <Link className="button btn-success" to={`/rules/${item._id}`}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
