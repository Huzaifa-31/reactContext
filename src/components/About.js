import React from "react";
import { useUserContext } from "../context/userContext";

function About() {
  const userData = useUserContext();

  return <h1>{userData.name}</h1>;
}

export default About;
