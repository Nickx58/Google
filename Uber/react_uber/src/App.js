import './App.css';
import Tree from './components/Tree';
import PhoneBook from './components/PhoneBook';
import ColorInput from './components/ColorInput';
import CBox from './components/CBox';

function App() {
  return (
    <div>
      <h1>For Uber</h1>
      <Tree />
      <PhoneBook />
      <ColorInput />
      <CBox />
    </div>
  );
}

export default App;
