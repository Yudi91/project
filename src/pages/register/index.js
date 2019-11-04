import React, { useContext } from "react";
import { ContainerContext } from "../../App";

const Register = () => {
  const [state, dispatch] = useContext(ContainerContext);

  return (
    <div>
       <h3>Register</h3>
       <p><label for="name">Name:</label>
       <input id="name" name="name" type="text" value="" /></p>
       <p><label for="tid">Password:</label>
       <input id="password" name="password" type="password" value="" /></p>
       <input type="submit" value="Register" />
       <p id="messageUpdate"></p>
    </div>
  );
};
  
export default Register;