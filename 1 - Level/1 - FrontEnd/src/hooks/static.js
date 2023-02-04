import { useState, useEffect } from "react";

const useStickyState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null && stickyValue.length !== 0
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export { useStickyState };
