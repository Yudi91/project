import React, { useContext } from "react";
import { ContainerContext } from "../../App";

const Create = () => {
  const [state, dispatch] = useContext(ContainerContext);

  return (
    <div>
      Lorem ipsum dolor sit amet
    </div>
  );
};
  
  export default Create;