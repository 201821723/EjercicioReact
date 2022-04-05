import { useEffect, useState } from "react";
import Museum from "./Museum";
import MuseumDetail from "./MuseumDetail";

function MuseumList() {
  const url = "https://back-museums-uniandes.herokuapp.com/api/museums";

  let [museums, setMuseums] = useState([]);

  let [clickedMuseum, setClickedMuseum] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((museums) => {
        setMuseums(museums);
      });
  });

    return (
      <>
        <div className="row">
          <div className="col-12">
            <div className="category-title-bg">
              <center><h1 className="category-title bg-secondary">MUSEOS</h1></center>
              <hr></hr>
            </div>
          </div>
        </div>
        <div className="row">
          {museums.map((museum) => (
            <Museum
              museum={museum}
            ></Museum>
          ))}
        </div>
      </>
    )
}

export default MuseumList;
