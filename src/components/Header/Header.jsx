import styles from "./Header.module.css";

import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="#" alt="" />
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/login">Login</Link>{" "}
          </li>
          <li>About Me</li>
        </ul>
      </nav>
    </header>
  );
}
