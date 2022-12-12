export const getElementSizePx = (el: HTMLElement, property: string) => {
  const [size] = window
    .getComputedStyle(el)
    .getPropertyValue(property)
    .split("px");

  return Number(size);
};

export const transformDate = (createdAt: string) => {
  const date = new Date(createdAt);

  if (date.getDate().toString().length === 1) {
    return `${date.getFullYear()}.${date.getMonth()}.0${date.getDate()}`;
  }

  return `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
};
