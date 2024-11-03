import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h2>Homework MVC</h2>
      </div>
    </header>
  );
}
