"use client";
import React, { useState } from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
  const [isNotActive, setNotActive] = useState(true);
  const barsIcon = "-";
  const crossIcon = "x";
  return (
    <div>
      <div className={styles.wrapper}>
        <nav id={styles.sidebar} className={isNotActive ? styles.active : ""}>
          <button
            type="button"
            id={styles.sidebarCollapse}
            onClick={() => setNotActive(!isNotActive)}
            className={styles.btnCustom}
          >
            <span className={isNotActive ? "" : styles.hidden}>{barsIcon}</span>
            <span className={isNotActive ? styles.hidden : ""}>
              {crossIcon}
            </span>
          </button>
          <div className={styles.sidebarHeader}>
            <h3>User Name</h3>
          </div>

          <ul>
            <li className={styles.listItem}>
              <Link href="/">Text</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
