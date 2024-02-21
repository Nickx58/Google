import React from "react";

import Accordion from "../components/Accordion";

const items = [
  {
    label: "React",
    content: "Can I use react",
  },
  {
    label: "Vue",
    content: "Can I use Vue",
  },
  {
    label: "Angular",
    content: "Can I use Angular",
  },
];

function AccordianPage() {
  return (
    <div className="app">
      <Accordion items={items} />
    </div>
  );
}

export default AccordianPage;
