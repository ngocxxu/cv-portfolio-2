export const onClickHeaderItem = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Ensure element exists before scrolling
    element.scrollIntoView({
      behavior: "smooth", // Enable smooth scrolling
      block: "start", // Align to top edge of element
      inline: "nearest", // Snap to nearest horizontal position
    });
  } else {
    console.warn(`Element with ID '${sectionId}' not found.`); // Inform user if element not found
  }
};
