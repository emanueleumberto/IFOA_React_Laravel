import './App.css';
import PrimoComp from './components/PrimoComp';
import SecondoComp from './components/SecondoComp';
import TerzoComp from './components/TerzoComp';

const users = [
  {id: 1, name: 'John', lastName: 'Smith', city: 'San Francisco'}, 
  {id: 2, name: 'Mario', lastName: 'Rossi', city: 'Roma'},
  {id: 3, name: 'Jane', lastName: 'Smith', city: 'London'},
  {id: 4, name: 'Mario', lastName: 'Verdi', city: 'Milano'},
]

function App() {
  return (
    <div className="App">
      <h1>Prima App React!</h1>
      <PrimoComp title="User List" list={users} />
      <hr />
      <SecondoComp title="User List" list={users} />
      <hr />
      <TerzoComp title="User List" list={users} />
    </div>
  );
}

export default App;
