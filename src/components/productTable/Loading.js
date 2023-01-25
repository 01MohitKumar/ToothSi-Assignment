import React from "react";
import styles from "./Loading.module.css";

export default function Loading({ classes }) {
  const customClasses = `${styles["lds-roller"]} ${classes}`;
  return (
    <div className={customClasses}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
