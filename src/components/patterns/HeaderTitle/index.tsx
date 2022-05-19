import styles from "./HeaderTitle.module.scss";

interface Props {
  subtitle: string,
  title: string
}

export default function HeaderTitle({
  subtitle,
  title,
}: Props) {
  return (
    <div className={styles.titleBg}>
      <div className={styles.titleContainer}>
        <p>{subtitle}</p>
        <h1>{title}<span>.</span></h1>
      </div>
    </div>
  );
}