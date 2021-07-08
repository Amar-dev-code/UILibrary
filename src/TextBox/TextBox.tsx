import "./styles.css";

interface textboxProps {
  isDisabled?: boolean;
  placeholder?: string;
  isAutoFocus?: boolean;
  isReadonly?: boolean;
  type: "Password" | "Text";
  value?: string | number | readonly string[];
}

export function TextBox(props: textboxProps) {
  return (
    <div>
      <input
        className="inputText"
        type="Text"
        disabled={props.isDisabled}
        required={true}
      />
      <span className="floating-label">Email address</span>
    </div>
  );
}