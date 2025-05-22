import IconImg from "./IconImg";

interface Iprops {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}
const RenderFileIcon = ({ filename, isFolder, isOpen }: Iprops) => {
  const extention = filename.split(".").pop();
  //file
  if (extention === ".tsx") return <IconImg src="" />;
  //folder
  if (extention === "node_module" && isFolder)
    return isOpen ? <IconImg src="" /> : <IconImg src="" />;
};
export default RenderFileIcon;
