import React from "react";
import image from '../assets/default_img1.png'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light m-2" style={{ width: "100%", maxWidth: "365px", minHeight: "450px" }}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={src ? src : image}
          alt="news"
          style={{ height: "100%", width: "auto", objectFit: "cover" }}
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title.slice(0, 50) + "..."}</h5>
          <p className="card-text">
            {description ? description.slice(0, 90) + "..." : "NO DESCRIPTION"}
          </p>
        </div>
        <a href={url} className="btn btn-primary mt-auto">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;