import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenFileBarTab from "./OpenFileBarTab";

import { useState } from "react";
import ContextMenu from "./ui/ContextMenu";

//interface Iprops {}
const OpenFileBar = () => {
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [showMenu, setshoeMenu] = useState(false);
  const { openFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div
      className="bg-gray-900 w-full text-white p-2 rounded-md shadow-md"
      onContextMenu={(e) => {
        e.preventDefault();
        setMenuPosition({ x: e.clientX, y: e.clientY });
        setshoeMenu(true);
      }}
    >
      <div className="flex space-x-2 border-b border-gray-700 pb-2">
        {openFiles.map((file) => (
          <OpenFileBarTab file={file} key={file.id} />
        ))}
      </div>
      {showMenu && <ContextMenu position={menuPosition} />}
    </div>
  );
};

export default OpenFileBar;
