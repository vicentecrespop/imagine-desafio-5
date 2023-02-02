import Sidebar from './components/Sidebar';
import Content from './components/Content';

import './App.css';

function App() {
  return (
    <div className="App h-min-screen w-max-screen flex">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
