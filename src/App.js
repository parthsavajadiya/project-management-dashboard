import "./App.css";
import Header from "./Header";
import ProjectTitle from "./ProjectTitle";
import Tasks from "./Tasks";
import PieChart from "./PieChart";
import Budget from "./Budget";
import PendingItems from "./PendingItems";
import Datess from "./Datess";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectTitle />
      <div className="flex">
        <Tasks />
        <Datess />
      </div>
      <div className="flex">
        <PieChart />
        <Budget />
        <PendingItems />
      </div>
    </div>
  );
}

export default App;
