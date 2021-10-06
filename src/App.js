import './App.css';
import CommitList from './Components/Commit/CommitList/CommitList';
import TopBar from './Components/Navbar/TopBar/TopBar';

function App() {

  return (
    <>
      <TopBar name="Watch your commits" />
      <div className="container">
        <CommitList />
      </div>
    </>
  );
}

export default App;
