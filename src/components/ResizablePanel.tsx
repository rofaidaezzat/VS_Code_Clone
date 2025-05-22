import { ReactNode } from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
interface Iprops {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel: boolean;
}
const ResizablePanel = ({
  defaultLayout = [33, 67],
  leftPanel,
  rightPanel,
  showLeftPanel,
}: Iprops) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId="condition"
    >
      {showLeftPanel && (
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible>
            {leftPanel}
          </Panel>
          <PanelResizeHandle className=" border border-zinc-500" />
        </>
      )}

      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
};
export default ResizablePanel;
