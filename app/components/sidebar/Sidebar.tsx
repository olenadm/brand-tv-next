"use client";

import styles from "./sidebar.module.css";
import OffcanvasSide from "./Offcanvas";

const Sidebar = () => {
  const classname =  `${styles.wrapper} bg-body-tertiary bg-gradient border-right`
  return (
    <div className={classname}>
      <nav>
        <OffcanvasSide />
      </nav>
    </div>
  );
};
export default Sidebar;
