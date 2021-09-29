import Banner from './Banner'
import Topmenu from './Topmenu'
import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Wires from './Wires'
import About from './About'
import FadeIn from 'react-fade-in'

function App() {
  const [strikes, setStrikes] = useState(0);
  const addStrike = () => {
    strikes + 1 > 2 ? setStrikes(0) : setStrikes(strikes + 1)
  }
  const addSerial = (event) => {
    event.target.value.length >= 6 ? setSerial(event.target.value): setSerial('')
  }
  const[serial, setSerial] = useState('Enter serial')

  return (
    <div className="App">
      <Banner/>
      <Router>
      <Topmenu strikes={strikes} addStrike={addStrike} serial={serial} addSerial={addSerial}/>
      <Switch>
          <Route exact path="/" component={About} />
          <Route path="/wires" component={() => Wires(serial)} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
