import { llamarGetAll } from "../api/apiPropia";
import { useState, useEffect } from "react";

export const LandingPage = () => {

  return(

    <>
      <h1> Landing Page </h1>
      {`${llamarGetAll()}`}
    </>
  )
}
