import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import {Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import FilmPage from "./pages/FilmPage";
import Expected from "./pages/Expected";
import NowPlaying from "./pages/NowPlaying";
import People from "./people/People";
import Footer from "./components/Footer";


export default  function App() {
    return (
        <div style={{background: "#FAF9F6"}}>
            <NavBar/>
            <Switch>
                <Route path='/films/:id' component={FilmPage}/>
                <Route path='/people'>
                    <People/>
                </Route>
                <Route path='/now_playing'>
                    <NowPlaying/>
                </Route>
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
            <Footer/>
        </div>
    )
}
