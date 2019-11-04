import React, { useContext } from "react";
import { ContainerContext } from "../../../../App";

const DataCreate = () => {
  const [state, dispatch] = useContext(ContainerContext);

  return (
    <div>
       <h3>Create</h3>
       <p><label for="name">Name:</label>
       <input id="name" name="name" type="text" value="" /></p>
       <p><label for="comment">Comment:</label><br/>
       <textarea id="comment" name="comment" cols="40"></textarea></p>
       <input type="submit" value="Create" />
       <p id="messageUpdate"></p>
    </div>
  );
};
  
export default DataCreate;