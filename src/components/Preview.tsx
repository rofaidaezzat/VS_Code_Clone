import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenFileBar from "./OpenFileBar";
import { RootState } from "../app/store";

const Preview = () => {
  const { clickedFile } = useSelector((state: RootState) => state.tree);
  return (
    <>
      <OpenFileBar />
      <FileSyntaxHighlighter content={clickedFile.filecontent} />
    </>
  );
};
export default Preview;
