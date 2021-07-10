import { AccordionItem } from "./AccordionItem";
import "./styles.css";
import { AccordionItems } from "./AccordionItem";

interface AccordionProps {
  data: AccordionItems[];
}
export function Accordion(props: AccordionProps) {
  return (
    <>
      {props.data.map((item) => {
        return <AccordionItem title={item.title} content={item.content} />;
      })}
    </>
  );
}
