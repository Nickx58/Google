import EmployeeDatabase from "./employee-database/EmployeeDatabase";
import FileExplorer from "./file-explorer/FileExplorer";
import Pagination from "./pagination/Pagination";
import PasswordChecker from "./password-checker/PasswordChecker";
import DebounceSearch from "./debounce-search/DebounceSearch";
import CountryCapital from "./country-capital/CountryCapital";
import ProgressBar from "./progress-bar/ProgressBar";
import GridLight from "./grid-light/GridLight";
import QuizApp from "./quiz-app/QuizApp";
import DynamicProgressBar from "./dynamic-progress-bar/DynamicProgressBar";
import Tabs from "./tabs/Tabs";

import "./app.css";

const tabs = [
  { title: "Employee Data Base", content: <EmployeeDatabase /> },
  { title: "File Explorer", content: <FileExplorer /> },
  { title: "Pagination", content: <Pagination /> },
  { title: "Password Checker", content: <PasswordChecker /> },
  { title: "Debounce Search", content: <DebounceSearch /> },
  { title: "Country Capital", content: <CountryCapital /> },
  { title: "Progress Bar", content: <ProgressBar /> },
  { title: "Grid Light", content: <GridLight /> },
  { title: "Quiz App", content: <QuizApp /> },
  { title: "Dynamic Progress", content: <DynamicProgressBar /> },
];

function App() {
  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
