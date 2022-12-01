export const getElementSizePx = (el: HTMLElement, property: string) => {
  const [size] = window
    .getComputedStyle(el)
    .getPropertyValue(property)
    .split("px");

  return Number(size);
};
