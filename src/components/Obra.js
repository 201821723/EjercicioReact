import { useState } from "react";

function Obra(props) {
  let [name] = useState(props.artwork.name);
  let [description] = useState(props.artwork.description);
  let [image] = useState(props.image);
  
}

export default Obra;
