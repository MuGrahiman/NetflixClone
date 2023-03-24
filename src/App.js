import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./request";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        fetchUrl={requests.fetchNetflixOriginals}
        title="Netflix Originals"
        isLargeRow={true}
      />
      <Row fetchUrl={requests.fetchTrending} title="Trending Now" />
      <Row fetchUrl={requests.fetchTopRated} title="Top Rated " />
      <Row fetchUrl={requests.fetchActionMovies} title="Action Movies" />
      <Row fetchUrl={requests.fetchComedyMovies} title="Comedy Movies" />
      <Row fetchUrl={requests.fetchHorrorMovies} title="Horror Movies" />
      <Row fetchUrl={requests.fetchRomanceMovies} title="Romance Movies" />
      <Row fetchUrl={requests.fetchDocumentaries} title="Documentaries" />
    </div>
  );
}

export default App;
