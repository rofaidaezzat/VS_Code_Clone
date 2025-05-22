import { useEffect, useRef } from "react";
import { setOpenFiles } from "../../app/features/fileTreeSlice";
import { useDispatch } from "react-redux";
interface Iprops {
  setshoeMenu: (val: boolean) => void;
  position: {
    x: number;
    y: number;
  };
}
const ContextMenu = ({ position: { x, y }, setshoeMenu }: Iprops) => {
  const menuref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  /*-------------Handler------------- */
  useEffect(() => {
    const handleclickoutside = (event: MouseEvent) => {
      if (menuref.current && !menuref.current.contains(event?.target as Node)) {
        setshoeMenu(false);
      }
    };
    window.addEventListener("click", handleclickoutside);
    return () => {
      window.removeEventListener("click", handleclickoutside);
    };
  }, []);
  const closeall = () => {
    dispatch(setOpenFiles([]));
    setshoeMenu(false);
  };

  return (
    <div ref={menuref}>
      <ul
        className="bg-white text-black px-7 py-3 w-fit rounded-md"
        style={{
          position: "absolute",
          left: x,
          right: y,
        }}
      >
        <li className="cursor-pointer" onClick={closeall}>
          close all
        </li>
      </ul>
    </div>
  );
};
export default ContextMenu;
