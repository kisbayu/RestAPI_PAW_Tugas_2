import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookList from "./components/BookList";
import AddBooks from "./components/AddBooks";
import EditBooks from "./components/EditBooks";

function App() {
  return (
    <Router>
    <div className="container">
      <div className="column">
        <div>
          <Switch>
            <Route exact path="/">
              <BookList />
            </Route>
            <Route path="/add"> 
              <AddBooks /> 
            </Route>
            <Route path="/edit/:id">
              <EditBooks />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App
