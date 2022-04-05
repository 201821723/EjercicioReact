import { useState } from "react";

function Museum(props) {
  let [name] = useState(props.museum.name);
  let [city] = useState(props.museum.city);
  let [image] = useState(props.museum.image);

  return (
    <>
      <div className="col-3">
        <div className="card">
          <img src={image} className="card-img-top" alt="Foto museo" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{city}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Museum;
