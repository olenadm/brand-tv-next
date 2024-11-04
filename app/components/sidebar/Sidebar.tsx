"use client";
import React, { useState } from "react";

import styles from "./sidebar.module.css";
import OffcanvasSide from "./Offcanvas";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <OffcanvasSide />
      </nav>
    </div>
  );
};
export default Sidebar;
