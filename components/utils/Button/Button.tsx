import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { BeatLoader } from "react-spinners";
import Maybe from "../Maybe";
import styles from "./Button.module.css";
import Link, { LinkProps } from "next/link";

export type ButtonColor =
  | "orange"
  | "white"
  | "transparent"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type: "button" | "submit" | "reset";
  color?: ButtonColor;
  contentType?: "icon" | "text";
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Button({
  className,
  type,
  color = "orange",
  contentType = "text",
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
      [styles.icon]: contentType === "icon",
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

interface LinkButtonProps extends ButtonProps {
  href: string;
  target?: string;
}

function LinkButton({
  href,
  target,
  ...props
}: LinkButtonProps) {
  return (
    <Link 
      href={href} 
      passHref
      target={target}
    >
      <Button {...props}>
      </Button>
    </Link>
  )
}

export {
  Button,
  LinkButton,
};