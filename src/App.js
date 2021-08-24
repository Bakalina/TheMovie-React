import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import {Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import FilmPage from "./pages/FilmPage";
import Expected from "./pages/Expected";

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path='/films/:id' component={FilmPage}/>
                <Route path='/expected'>
                    <Expected/>
                </Route>
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
