import React, { useContext } from "react";
import { ContainerContext } from "../../../../App";

const UserShow = () => {
  const [state, dispatch] = useContext(ContainerContext);

  return (
    <div>
      <table id="datatable" border='1'>
      </table>
      <div id="messageRetrieve"></div>
    </div>
  );
};
  
export default UserShow;