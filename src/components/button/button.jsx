import styles from "./buttom.module.css";

export default function Button({ value, bg, type, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${styles[bg]}`}
    >
      {value}
    </button>
  );
}
