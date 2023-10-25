
import './App.css'
import CoffeeComponent from './CoffeesComponent'
import DateComponent from './DateComponents'

function ChildComponent() {
  return (
    <div>
      <h2> MUCH  WOW</h2>
      <GrandChild />
    </div>
  )
}

const GrandChild = (props) => {
  let firstName = props.firstName

  console.log('props ->', props.firstName)
  return (
    <div>
      <h2> Hi im a Grandchild {firstName} </h2>
    </div>
  )
}




function App() {
  
  return (
    <div className="App">
      <header className="App-header">
     
        <ChildComponent />
        <DateComponent />
        <CoffeeComponent />
      </header>
    </div>
  );
}

export default App;
