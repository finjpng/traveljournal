import React from "react";
import pin from "../images/pin.png";

export default function TravelCard(props) {
  return (
    <div className="travcard">
      <div className="image--container">
        <img src={props.imageUrl} className="coverimg"></img>
      </div>
      <div className="trav--info">
        <img src={pin} className="pin" />
        <p className="location">{props.location}</p>{" "}
        <a href={props.googlemap} className="gmap">
          View on Google Maps
        </a>
        <p className="travcard--title">{props.title}</p>
        <span>
          <strong>
            {props.date.startDate} - {props.date.endDate}
          </strong>
        </span>
        <p className="trav--desc">{props.description}</p>
        <p className="travcard--price"></p>
      </div>
    </div>
  );
}
{
  /* <img
src={require(`../images/${props.coverImg}`)}
className="card--image"
/> */
}
