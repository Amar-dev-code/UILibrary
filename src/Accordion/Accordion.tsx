import { AccordionItem } from "./AccordionItem";
import "./styles.css";

export function Accordion() {
  const testingData = [
    {
      title: "Section 1",
      content: "Hello World!",
    },
    {
      title: "Section 1",
      content: "Hello World!",
    },
    {
      title: "Section 1",
      content: "Hello World!",
    },
    {
      title: "Section 1",
      content: "Hello World!",
    },
    {
      title: "Section 1",
      content: "Hello World!",
    },
  ];

  return (
    <>
      <div>
        <AccordionItem title="What is Netflix?" content="Hello World!" />
      </div>
    </>
  );
}
