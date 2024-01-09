import './App.css';
import FormComponent from './components/FormComponent';
import LifeCycleComponent from './components/LifeCycleComponent';
import PropsComponent from './components/PropsComponent';
import StateComponent from './components/StateComponent';

let title = "Props Title";

function App() {
  return (
    <div className="App">
      <PropsComponent title={title}/>
      <StateComponent />
      {/* <LifeCycleComponent /> */}
      <FormComponent />
    </div>
  );
}

export default App;
