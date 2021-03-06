import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemGallery from "./components/ItemGallery/ItemGallery.js"
import ItemGalleryCategorical from "./components/ItemGallery/ItemGalleryCategorical.js"
import { Grid } from "@material-ui/core"
import "./App.scss"
import IosArrowDown from 'react-ionicons/lib/IosArrowDown'
import IosContactOutline from 'react-ionicons/lib/IosContactOutline'
import MdSearch from 'react-ionicons/lib/MdSearch'
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'

class App extends React.Component {
  render() {
    return <Router>
      <div className="content">
        <nav id="nav" className="nav">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <div className="m-right">{/* Empty div for easier flex positioning */}</div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              item={true}
              lg={10}
            >
              <Link className="btn-primary" to="/">Strona główna</Link>
              <Link className="btn-primary" to="/popularne">Popularne</Link>
              <Link className="btn-primary" to="/kategorie">Kategorie</Link>
              <Link className="btn-primary" to="/ostatnio-przegladane">Ostatnio przeglądane</Link>
              <div className="relative">
                <input className="search main-search" type="text" placeholder="Szukaj.." name="main-search"></input>
                <MdSearch className="search-icon" color="#888" fontSize="1.8em" />
              </div>
              <Link className="btn-primary btn-round flex-middle" to="/ulubione">
                <MdHeartOutline color="white" fontSize="1.5em" />
              </Link>
            </Grid>
            <div className="btn flex-middle">
                <IosContactOutline color="black" fontSize="3em" />
                <IosArrowDown color="black" fontSize="1.5em" />
              </div>
          </Grid>
        </nav>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/popularne">
            <ItemGallery key="popular" category="popular" />
          </Route>
          <Route exact path="/kategorie">
            <ItemGalleryCategorical key="categorical" />
          </Route>
          <Route exact path="/ostatnio-przegladane">
            <ItemGallery key="last-viewed" category="last-viewed" />
          </Route>
          <Route exact path="/ulubione">
            <ItemGallery key="favourites" category="favourites" />
          </Route>
          <Route exact path="*">
            <ItemGallery key="home" />
          </Route>
        </Switch>
      </div>
    </Router>
  }
}

export default App;
