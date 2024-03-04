import { useNavigate } from "react-router-dom";
import Page404 from "../../assets/img/background/404page.webp";
import style from "./style.module.css";
import { Image } from "@mantine/core";

export const ErrorTemplate = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <Image onClick={() => navigate("/")} src={Page404} alt="Page404" />
    </div>
  );
};
