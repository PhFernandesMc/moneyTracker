import "../styles/components/Button.scss";

type ButtonProps = {
  text: string,
  type: "button" | "submit" | undefined
  onClick?: () => void
}


export default function Button({ text, type, onClick}: ButtonProps) {
  return <button type={type} onClick={onClick}>{text}</button>;
}
