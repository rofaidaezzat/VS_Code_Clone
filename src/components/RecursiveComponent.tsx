import { useState } from "react";
import { IFile } from "../interfaces";
import FileIcon from "./SVG/File";
//export { fileTree } from "../data/FileTree";
import { ChevronDown, ChevronRight, FolderIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setClickedFile, setOpenFiles } from "../app/features/fileTreeSlice";
import { doesFileObjectExist } from "../utils/function";

interface Iprops {
  fileTree: IFile;
}
const RecursiveComponent = ({ fileTree }: Iprops) => {
  const { id, name, isFolder, children, content } = fileTree;
  const dispatch = useDispatch();
  const { openFiles } = useSelector((state: RootState) => state.tree);

  const [isOpen, setisOpen] = useState<boolean>(false);
  //Handler
  const toggle = () => setisOpen((prev) => !prev);
  const onFileClick = () => {
    const exists = doesFileObjectExist(openFiles, id);
    dispatch(
      setClickedFile({ filename: name, filecontent: content, activeTabid: id })
    );
    if (exists) {
      return;
    }
    dispatch(setOpenFiles([...openFiles, fileTree]));
  };
  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <>
            <div onClick={toggle} className="flex items-center">
              {isOpen ? <ChevronDown /> : <ChevronRight />}
              <FolderIcon />
              <span>{name}</span>
            </div>
          </>
        ) : (
          <div className="mr-2 flex items-center ml-2" onClick={onFileClick}>
            <FileIcon />
            <span>{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children?.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};
export default RecursiveComponent;
