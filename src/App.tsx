import { useSelector } from "react-redux";
import "./App.css";

import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/FileTree";
import { RootState } from "./app/store";
import WelcomTab from "./components/WelcomTab";

// import FolderComponent from "./components/FolderComponent";

function App() {
  const { openFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div className="">
      <div className="flex h-screen">
        <ResizablePanel
          showLeftPanel
          leftPanel={
            <div className="">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={openFiles.length ? <Preview /> : <WelcomTab />}
        />
      </div>
    </div>
  );
}

export default App;
