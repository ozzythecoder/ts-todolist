import { CSSProperties } from "react";

interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export default function TextInput({ value, onChange, placeholder }: Props) {
  
  const styles: CSSProperties = {
    width: "100%",
    height: "1.5rem",
    padding: "5px",
    textAlign: 'left',
    fontSize: '1.3rem'
  };

  return (
    <input
      style={styles}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}
