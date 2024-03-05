import { BackgroundImage, Button } from "@mantine/core";
import { IconCategory } from "@tabler/icons-react";
import { SectionItem } from "../../components/sectionItem";
import { DataUser } from "../../data";
import style from "./style.module.css";
import { Animation } from "../../components/animation";
import { hiddenVisible } from "../../utils/animation";
// import { useInView } from "../../assets/hooks/useInView";

const Portfolio = () => {
  return (
    <SectionItem
      title="Portfolio"
      icon={<IconCategory size="0.9rem" style={{ marginRight: "5px" }} />}
    >
      <Animation variants={hiddenVisible}>
        <div className={style.bigText}>
          Featured <span>Projects</span>
        </div>
      </Animation>

      <div>
        {DataUser.portfolio.coding.map(
          ({ demo, frontend, backend, image, title }) => (
            <div key={title} className={style.item}>
              <Animation width="100%" variants={hiddenVisible}>
                <BackgroundImage
                  src={image}
                  radius="sm"
                  classNames={{
                    root: style.inner,
                  }}
                >
                  <div className={style.button}>
                    <Button
                      onClick={() => window.open(frontend, "_blank")}
                      classNames={{ root: style.root }}
                      variant="filled"
                      radius="xl"
                    >
                      Frontend
                    </Button>
                    {backend && (
                      <Button
                        onClick={() => window.open(backend, "_blank")}
                        classNames={{ root: style.root }}
                        variant="filled"
                        radius="xl"
                      >
                        Backend
                      </Button>
                    )}
                    <Button
                      onClick={() => window.open(demo, "_blank")}
                      classNames={{ root: style.root }}
                      variant="filled"
                      radius="xl"
                    >
                      Demo
                    </Button>
                  </div>
                </BackgroundImage>
                <h3 className={style.h3}>
                  <span className={style.span}>{title}</span>
                </h3>
              </Animation>
            </div>
          )
        )}
      </div>
    </SectionItem>
  );
};

export default Portfolio;
