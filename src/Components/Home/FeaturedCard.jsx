import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ item }) => {
  return (
    <div>
      <div className="box">
        <div className="image">
          <img src={item.img.src} alt=""></img>
        </div>

        <h5>{item.title}</h5>
        <Link className="button btn-success" to={`/rules/${item._id}`}>
          Attempt Quiz
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
