import React from "react";
import { CSSProperties } from "react";

interface Props {
  text?: string;
  callback: () => void;
  children?: React.ReactNode;
}

export default function Button({ text, callback, children }: Props) {
  const styles: CSSProperties = {
    padding: "5px 20px",
    fontSize: "1rem",
    maxHeight: "100%",
  };

  return (
    <button style={styles} onClick={callback}>
      {children ?? text}
    </button>
  );
}
