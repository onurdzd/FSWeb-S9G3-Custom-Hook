import { useState } from "react";

const useLocalStorageKullan = (keyValue, initialValue) => {
  const [localDeger, setLocalDeger] = useState(() => {
    const item = localStorage.getItem(keyValue);
    const initialVal = item ? JSON.parse(item) : initialValue;
    localStorage.setItem(keyValue, JSON.stringify(initialVal));
    return initialVal;
  });

  const clickHookHandler = () => {
    setLocalDeger(!localDeger);
    localStorage.setItem(keyValue, JSON.stringify(!localDeger));
  };
  return [localDeger, clickHookHandler];
};

export default useLocalStorageKullan;
