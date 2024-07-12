import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree.js";
import "./style.css";
import explorer from './utils/mockData'

export default function FileExplorer() {
    const [explorerData, setExplorerData] = useState(explorer);

    const { insertNode } = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(finalTree);
    };

    return (
        <div className="App">
            <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
        </div>
    );
}
