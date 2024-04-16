import styles from "./input.module.css";
import Image from "next/image";

export default function Input({
  label,
  name,
  id,
  type,
  placeholder,
  icon,
  alt,
}) {
  return (
    <div className={styles.form_group}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.input_group}>
        <input type={type} name={name} id={id} placeholder={placeholder} />
        <div className={styles.form_group_img}>
          <Image src={icon} alt={alt} width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
