import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
interface Iprops {
  content: string | undefined;
}
const FileSyntaxHighlighter = ({ content }: Iprops) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={docco}
      customStyle={{
        background: "transparent",
        color: "white",

        width: "100%",
        maxHeight: "100vh",
      }}
      showLineNumbers
    >
      {String(content)}
    </SyntaxHighlighter>
  );
};
export default FileSyntaxHighlighter;
