"use client";
import styles from "./login.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/button/button";
import { useRouter } from "next/navigation";

import Link from "next/link";

export default function Login() {
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form enviado");
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Login into your account</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.input_group_container}>
          <Input
            label="Username:"
            type="text"
            name="user"
            id="user"
            placeholder="johndoe"
            icon="/assets/svg/email.svg"
            alt="email icon"
          />
          <Input
            label="Password:"
            type="password"
            name="password"
            id="password"
            placeholder="******"
            icon="/assets/svg/locker.svg"
            alt="locker icon"
          />
        </div>
        <Button type="submit" value="Login Now" bg="purple" />
      </form>
      <p>
        <Link href="/">Forgot Password?</Link>{" "}
      </p>
      <div className={styles.divider}>
        <div className={styles.divider_line}></div>
        <span>OR</span>
        <div className={styles.divider_line}></div>
      </div>
      <Button
        onClick={() => router.push("/register")}
        value="SignUp Now"
        bg="purple_border"
      />
    </section>
  );
}
