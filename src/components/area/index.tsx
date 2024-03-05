import { ReactNode } from "react";
import style from "./style.module.css";

export const Area = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <div className={style.area}>
        <ul className={style.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};
