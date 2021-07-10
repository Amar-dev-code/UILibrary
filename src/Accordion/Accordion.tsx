import { title } from "process";
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
      {testingData.map((item) => {
        return (
          <div>
            <AccordionItem title={item.title} content={item.content} />
          </div>
        );
      })}
    </>
  );
}
