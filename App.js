// import logo from './logo.svg';
// import './App.css';
// import React,{useState} from 'react';
// import requests from './requests';  
// import Row from './Row';


// function App() {
  

//   return (
//     <div className="App">
//       <Row title = "NETFLIX ORIGINALS" fetchURL = {requests.fetchNetflixOriginals}/>
//       <Row title = "Action Movies" fetchURL = {requests.fetchActionMovies}/>
//       <Row title = "Comedy Movies" fetchURL ={requests.fetchComedyMovies}/>
//       <Row title = "Documentaries" fetchURL = {requests.fetchDocumentaries}/>
//       <Row title = "Horror Movies" fetchURL = {requests.fetchHorrorMovies}/>
//       <Row title = "Romance Movies" fetchURL = {requests.fetchRomanceMovies}/>
//       <Row title = "Top Rated" fetchURL = {requests.fetchTopRated}/>
//       <Row title = "Trending Movies" fetchURL = {requests.fetchTrending}/>

//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import requests from './requests';
import Row from './Row';
function App() {
  
 
  return (
    <div className="app">
        
       <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} />
       <Row title = "Trending" fetchUrl = {requests.fetchTrending} />
       <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated} />
       <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies} />
       <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
       <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
       <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
       <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries} />
    </div>
  );
}
 
export default App;

