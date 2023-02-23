import useLocalStorageKullan from "./localStorageKullan";

export const useGeceModuAc = (initialValue) => {
  const [localModeDegeri, setLocalModeHandler] = useLocalStorageKullan(
    "verilenKey",
    initialValue
  );

  return [localModeDegeri, setLocalModeHandler];
};

export default useGeceModuAc;
