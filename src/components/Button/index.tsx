import { ReactNode } from "react";
import { Link } from "../Link";

import styles from "./Button.module.scss";

interface Props {
  children: ReactNode,
  href: string,
  secondary?: boolean,
}

export default function Button({
  children,
  href,
  secondary
}: Props) {
  return (
    <Link
      href={href}
      className={`
        ${styles.buttonContainer} 
        ${secondary && styles.buttonSecondary}
    `} >
      {children}
    </Link>
  );
}