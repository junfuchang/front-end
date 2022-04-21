import React from "react";
import Count from "./containers/Count";
import Title from "./containers/Title";

export default function App() {
  return (
    <>
      <Title render={() => <Count />} />
    </>
  );
}
