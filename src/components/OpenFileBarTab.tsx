import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import { setClickedFile, setOpenFiles } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { X } from "lucide-react";

interface Iprops {
  file: IFile;
}
const OpenFileBarTab = ({ file }: Iprops) => {
  const {
    openFiles,
    clickedFile: { activeTabid },
  } = useSelector((state: RootState) => state.tree);
  const dispatch = useDispatch();
  /*--------Handler-------------- */
  const onclick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFile({ filename: name, filecontent: content, activeTabid: id })
    );
  };
  const onRemove = (id: string) => {
    const filtered = openFiles.filter((file) => file.id !== id);
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(setOpenFiles([]));
      dispatch(
        setClickedFile({ activeTabid: null, filecontent: "", filename: "" })
      );
      return;
    }

    dispatch(setOpenFiles(filtered));
    dispatch(
      setClickedFile({
        activeTabid: lastTab.id,
        filecontent: lastTab.content,
        filename: lastTab.name,
      })
    );
  };

  return (
    <div
      style={{
        borderTop:
          file.id === activeTabid
            ? "2px solid #cf6ccf"
            : "2px solid transparent",
      }}
      className="flex items-center gap-2 px-4 py-2 border-b border-gray-600 bg-gray-800 text-white cursor-pointer transition-all duration-200 hover:bg-gray-700"
      onClick={onclick}
      // when click on bar what happend
    >
      <RenderFileIcon filename={file.name} />
      <span className="text-sm">{file.name}</span>
      <span
        className="flex justify-center items-center"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <X />
      </span>
    </div>
  );
};

export default OpenFileBarTab;
