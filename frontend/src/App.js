import Home from './pages/Home';
import StyledProvider from './theme/StyledProvider';
import './theme/fonts.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Editor from './pages/Editor/Editor';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Uploading from './pages/Editor/Uploading';
import Done from './pages/Editor/Done';
import View from './pages/View';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <StyledProvider>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/editor" exact>
              <Editor />
            </Route>

            <Route path="/editor/uploading">
              <Uploading/>
            </Route>

            <Route path="/editor/done/:id">
              <Done />
            </Route>

            <Route path="/v/:id">
              <View />
            </Route>
          </Switch>
        </StyledProvider>
      </Router>
    </Provider>


  );
}

export default App;
