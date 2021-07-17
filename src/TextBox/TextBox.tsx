import "./styles.css";

interface textboxProps {
  placeholder: string;
  type: "Password" | "Text";
}

export function TextBox(props: textboxProps) {
  return (
    <div>
      <input className="inputText" type={props.type} required={true} />
      <span className="floating-label">{props.placeholder}</span>
    </div>
  );
}
