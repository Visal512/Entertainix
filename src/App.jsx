import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Trending from "./pages/Trending";
import DiscoverFilms from "./pages/Films/DiscoverFilms";
import DiscoverTVShows from "./pages/TVShows/DiscoverTVShows";
import TopRatedFilms from "./pages/Films/TopRatedFilms";
import TopRatedTVShows from "./pages/TVShows/TopRatedTVShows";
import Search from "./pages/Search";

import MoreInformation from "./pages/MoreInformation";
import CastInformation from "./pages/CastInformation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div id="app" className="content">
        <Routes>
          {/* Trending */}
          <Route element={<Trending />} path="/" />
          <Route element={<Trending />} path="/trending" />
          {/* Films */}
          <Route element={<DiscoverFilms />} path="/discover-films" />
          <Route element={<TopRatedFilms />} path="/top-rated-films" />
          {/* TV */}
          <Route element={<DiscoverTVShows />} path="/discover-tv" />
          <Route element={<TopRatedTVShows />} path="/top-rated-tv" />
          {/* Search */}
          <Route element={<Search />} path="/search" />
          {/* More */}
          <Route element={<MoreInformation />} path="/:url" />
          <Route element={<CastInformation />} path="/cast/:cast" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
