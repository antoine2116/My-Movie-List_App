import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { BeatLoader } from "react-spinners";
import Maybe from "../Maybe";
import styles from "./Button.module.css";

export type ButtonColor =
  | "orange"
  | "white"
  | "transparent"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type: "button" | "submit" | "reset";
  color?: ButtonColor;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Button({
  className,
  type,
  color = "orange",
  onClick = () => { },
  loading = false,
  children,
}: ButtonProps) {

  const classes = clsx(
    styles.root,
    {
      [styles.orange]: color === "orange",
      [styles.white]: color === "white",
      [styles.transparent]: color === "transparent",
    },
    className,
  )

  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      className={classes}
    >
      <Maybe condition={loading}>
        <BeatLoader
          className="py-1"
          color={"#FFFFFF"}
          loading={true}
          size={7}
        />
      </Maybe>

      <Maybe condition={!loading}>
        {children}
      </Maybe>
    </button>
  )
}

export default Button;