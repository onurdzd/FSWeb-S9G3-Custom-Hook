import { useState } from "react";

const geceModuAc = () => {
  const [toogle, setToogle] = useState(true);

  return setToggle(!toogle);
};

export default geceModuAc;
