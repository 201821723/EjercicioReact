import { useState } from "react";

function MuseumDetail(props) {
  let [name] = useState(props.museum.name);
  let [artworks] = useState(props.museum.artworks);
  let [image] = useState(props.museum.image);

}

export default MuseumDetail;
