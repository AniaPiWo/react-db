import css from "./Button.module.css";
import React from "react";

export const Button = ({ text }) => (
  <button className={css.button}>
    <span className={css.text}>{text}</span>
  </button>
);
