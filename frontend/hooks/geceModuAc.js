import { useState } from "react";
// import localStorageKullan from "./localStorageKullan";

const geceModuAc = (initialValue) => {
  const [geceModu, setGeceModu] = useState(initialValue);
  const toggleDegis = () => setGeceModu(!geceModu);

  return [geceModu, toggleDegis];
};

export default geceModuAc;
