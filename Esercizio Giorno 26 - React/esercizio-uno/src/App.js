import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import { TableComponent } from './components/TableComponent';

/* const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  }
]; */

let users = [];

/* fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => users => json) */

const promise = await fetch('https://jsonplaceholder.typicode.com/users');
users = await promise.json();


function App() {
  return (
    <div className="App">
      <ButtonComponent txtButton="Click!" />
      <ImageComponent image="https://cms-cdn.placeholder.co/toronto_be6ed650f3.png?width=384" title="Toronto" />
      <TableComponent listaUtenti={users} />
    </div>
  );
}

export default App;
