import React from "react";
import { Card } from "./Card.jsx";
import { Header } from "./Header.jsx";
import data from "./data.jsx";

const cards = data.map((item, idx) => {
  return <Card key={idx} data={item} />;
});

export default function App() {
  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}
