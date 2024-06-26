"use client";

import { useState } from "react";
import styles from "./contact.module.css";

const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Message sent successfully!");
      } else {
        alert("An error occurred while sending the message");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <main className={styles.contact}>
        <form className={styles["contact-form"]} onSubmit={handleSubmit}>
          <h1>Contact Us</h1>
          <div>
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="number"
              name="phone"
              id="phone"
              required
              autoComplete="off"
              value={user.phone}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              autoComplete="off"
              value={user.message}
              onChange={handleInput}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default Contact;
