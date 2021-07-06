import {Switch,Route} from "react-router-dom";
import { PATHS } from "./config";
import Home from "./containers/Home";
import Posts from "./containers/Posts";
 

const App = () => {
  return (
    <Switch>
      <Route exact={true} path={PATHS.HOME} component={Home}/>
      <Route exact={true} path={PATHS.POSTS} component={Posts}/>
    </Switch>
   
  )
}

export default App;
