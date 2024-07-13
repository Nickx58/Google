import EmployeeDatabase from "./employee-database/EmployeeDatabase";
import FileExplorer from "./file-explorer/FileExplorer";
import Pagination from "./pagination/Pagination";
import Tabs from "./tabs/Tabs";

import './app.css'

const tabs = [
  { title: 'Employee Data Base', content: <EmployeeDatabase /> },
  { title: 'File Explorer', content: <FileExplorer /> },
  { title: 'Pagination', content: <Pagination /> }
]

function App() {
  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
