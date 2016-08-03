export const getElementHeight = (element) => (
  Math.max(element.scrollHeight, element.offsetHeight, element.clientHeight)
);

export const getWindowHeight = () => (
  window.innerHeight || window.clientHeight
);

