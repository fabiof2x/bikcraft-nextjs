import { ReactNode } from "react";
import { Link } from "../Link";

import styles from "../../styles/components/Button.module.scss";

interface Props {
  children: ReactNode,
  href?: string,
  secondary?: boolean,
  arrow?: boolean,
}

export default function Button({
  children,
  href = "#",
  secondary,
  arrow,
}: Props) {
  return (
    <Link
      href={href}
      className={`
        ${styles.buttonContainer} 
        ${secondary && styles.buttonSecondary}
        ${arrow && styles.buttonArrow}
    `} >
      {children}
    </Link>
  );
}