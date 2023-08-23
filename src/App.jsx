import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Trending from "./pages/Trending";
import DiscoverFilms from "./pages/DiscoverFilms";
import DisoverTVShows from "./pages/DiscoverTVShows";
import TopRatedFilms from "./pages/TopRatedFilms";
import TopRatedTVShows from "./pages/TopRatedTVShows";
import Search from "./pages/Search";

import ErrorPage from "./pages/ErrorPage";

import TrendingInformation from "./pages/MoreInfoPages/TrendingInformation";
import DiscoverFilmsInformation from "./pages/MoreInfoPages/DiscoverFilmsInformation";
import DiscoverTVShowsInformation from "./pages/MoreInfoPages/DiscoverTVShowsInformation";
import TopRatedFilmsInformation from "./pages/MoreInfoPages/TopRatedFilmsInformation";
import TopRatedTVShowsInformation from "./pages/MoreInfoPages/TopRatedTVShowsInformation";
import SearchInformation from "./pages/MoreInfoPages/SearchInformation";

function App() {
  return (
    <>
      <Navbar />
      <div id="app" className="main_content">
        <BrowserRouter>
          <Routes>
            {/* Trending */}
            <Route element={<Trending />} path="/"></Route>
            <Route element={<Trending />} path="/trending"></Route>
            <Route element={<TrendingInformation />} path="/trending/:url" />
            {/* Discover Films */}
            <Route element={<DiscoverFilms />} path="/discover-films"></Route>
            <Route
              element={<DiscoverFilmsInformation />}
              path="/discover-films/:url"
            ></Route>
            {/* Discover TV Shows */}
            <Route
              element={<DisoverTVShows />}
              path="/discover-tv-shows"
            ></Route>
            <Route
              element={<DiscoverTVShowsInformation />}
              path="/discover-tv-shows/:url"
            ></Route>
            {/* Top Rated Films */}
            <Route element={<TopRatedFilms />} path="/top-rated-films"></Route>
            <Route
              element={<TopRatedFilmsInformation />}
              path="/top-rated-films/:url"
            ></Route>
            {/* Top Rated TV Shows */}
            <Route
              element={<TopRatedTVShows />}
              path="/top-rated-tv-shows"
            ></Route>
            <Route
              element={<TopRatedTVShowsInformation />}
              path="/top-rated-tv-shows/:url"
            ></Route>
            {/* Search */}
            <Route element={<Search />} path="/search" />
            <Route
              element={<SearchInformation />}
              path="/search/:url"
            />
            {/* Error */}
            <Route element={<ErrorPage />} path="*"></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
