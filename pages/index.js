import React, { useEffect } from "react";
import Navigation from "./Main/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
const index = () => {
  return (
    <div>
      <title>Mynewsapp</title>
      <meta name="newsapp" content="Top news app" />
      <Navigation />
    </div>
  );
};

export default index;
