export const transition1 = { duration: 0.4, delay: 0.4, ease: "easeIn" };
export const transition2 = { duration: 0.3, delay: 0.2, ease: "easeIn" };

export const hiddenVisible = {
  hidden: { opacity: 0, y: 75, transition: { ease: "easeOut" } },
  visible: { opacity: 1, y: 0, transition: transition1 },
};

export const hiddenVisibleSkills = {
  hidden: { opacity: 0, y: 75, transition: { ease: "easeOut" } },
  visible: { opacity: 1, y: 0, transition: transition2 },
};
