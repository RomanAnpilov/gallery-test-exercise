import React from "react";

interface Image {
  url: string;
  username: string;
}

const Card = ({ url, username }: Image) => {
  return (
    <div className="card">
      <h2>{username}</h2>   
      <img src={url} alt={username} />
      <div></div>
    </div>
  );
};

export default Card;
