import "./sizes.css";
import "./styles.css";

interface buttonProps {
  href?: string;
  buttonLabel?: any;
  type?: "button" | "reset" | "submit";
  onClick?: () => {} | void;
  buttonStyles: string;
  buttonSize?: string;
  disabled?: boolean;
}

const styles = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--warning--outline",
];

const sizes = ["btn--medium", "btn--large", ".btn--small"];

export const Button = (props: buttonProps) => {
  let checkButtonStyle = styles.includes(props.buttonStyles)
    ? props.buttonStyles
    : styles[0];

  let checkButtonLabel = props.buttonLabel;
  let buttonSize = sizes[0];

  props.disabled
    ? (checkButtonStyle = "btn--primary--disabled") &&
      (checkButtonLabel = "Submit")
    : (checkButtonStyle = "btn--success--solid");

  return (
    <a
      href={props.href}
      onClick={props.onClick}
      type={props.type}
      className={`btn ${buttonSize} ${checkButtonStyle}`}
    >
      {checkButtonLabel}
    </a>
  );
};
