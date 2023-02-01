import css from "./Button.module.css";

export const Button = ({ text }) => (
  <button className={css.button}>
    <span className={css.text}>{text}</span>
  </button>
);
