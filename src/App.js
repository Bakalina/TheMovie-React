import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import {Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import FilmPage from "./pages/FilmPage";

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path='/films/:id' component={FilmPage}/>
                <Route path='/popular'>
                    <PopularPage/>
                </Route>
                <Route path='/'>
                    <HomePage/>;
                </Route>
            </Switch>
        </div>
    )
}

export default App;
