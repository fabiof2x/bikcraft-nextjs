import { ReactNode } from "react";
import { Link } from "../Link";

import styles from "./Button.module.scss";

interface Props {
  children: ReactNode,
  href: string,
}

export default function Button({
  children,
  href
}: Props) {
  return (
    <Link href={href} className={styles.buttonContainer}>
      {children}
    </Link>
  );
}