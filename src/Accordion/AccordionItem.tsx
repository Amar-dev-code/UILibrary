import { useState } from "react";
import "./styles.css";

interface AccordionProps {
  title: string;
  content: string;
}
export function AccordionItem(props: AccordionProps) {
  console.log("Sonali");
  const [open, setOpen] = useState<boolean>(false);

  function openClose() {
    if (open) setOpen(false);
    else setOpen(true);
  }

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => openClose()}>
        {props.title}
      </div>
      {open && <div className="accordion-content">{props.content}</div>}
    </div>
  );
}
