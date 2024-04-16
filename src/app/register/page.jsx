"use client";
import styles from "./register.module.css";
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
            name="username"
            id="username"
            placeholder="johndoe"
            icon="/assets/svg/email.svg"
            alt="email icon"
          />
          <Input
            label="Name:"
            type="text"
            name="name"
            id="name"
            placeholder="johndoe doo"
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
        <Button type="submit" value="Register" bg="purple" />
      </form>
      <p>
        <Link href="/login">Already Registerd?</Link>{" "}
      </p>
    </section>
  );
}
