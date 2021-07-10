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
    <div className="title">
      <div>{props.title}</div>
      <div>+</div>
    </div>
  );
}
