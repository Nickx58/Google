import EmployeeDatabase from "./employee-database/EmployeeDatabase";
import FileExplorer from "./file-explorer/FileExplorer";
import Pagination from "./pagination/Pagination";
import PasswordChecker from "./password-checker/PasswordChecker";
import Tabs from "./tabs/Tabs";

import './app.css'
import DebounceSearch from "./debounce-search/DebounceSearch";

const tabs = [
  { title: 'Employee Data Base', content: <EmployeeDatabase /> },
  { title: 'File Explorer', content: <FileExplorer /> },
  { title: 'Pagination', content: <Pagination /> },
  { title: 'Password Checker', content: <PasswordChecker /> },
  { title: 'Debounce Search', content: <DebounceSearch /> }
]

function App() {
  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
