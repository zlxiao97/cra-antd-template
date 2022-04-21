export const delay = (duration = 1000) =>
  new Promise((resolve, reject) => setTimeout(resolve, duration));
