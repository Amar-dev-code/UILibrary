import { useState } from "react";
import "./styles.css";
import { Close } from "../Icons/Close";
import { Open } from "../Icons/Open";
export interface AccordionItems {
  title: string;
  content: string[];
}
export function AccordionItem(props: AccordionItems) {
  const [open, setOpen] = useState<boolean>(false);
  const { title, content } = props;
  console.log(content);
  function openClose() {
    if (open) setOpen(false);
    else setOpen(true);
  }
  return (
    <div className="accordion">
      <div className="title" onClick={() => openClose()}>
        <div>{title}</div>
        {!open ? (
          <div className="icon">
            <Open />
          </div>
        ) : (
          <div className="icon">
            <Close />
          </div>
        )}
      </div>
      {open && (
        <div className="content">
          {content?.map((item, index) => {
            return (
              <div className="text">
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
