import useScreenClassContext from "../hooks/useScreenClassContext";

const useIsMobile = () => {
  const screenClass = useScreenClassContext();

  return ["xs", "sm"].includes(screenClass);
};

export default useIsMobile;