import { useState } from 'react';
import './assets/css/App.css';
import movies from './assets/json/movies.json';
import Image from './components/images/Image';
// import Header from './components/header/Header';
import Title from './components/title/Title'
import { v4 as uuidv4 } from 'uuid';
// import Article from './components/article/Article';

function App() {
  const [showMovies1, setShowMovies1] = useState(false);
  const [showMovies2, setShowMovies2] = useState(false);
  const [showMovies3, setShowMovies3] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  return (
    <>
      {/* <Header classBtn1={movies[0].name} classBtn2={movies[1].name} classBtn3={movies[2].name} setShowMov1={setShowMovies1} setShowMov2={setShowMovies2} setShowMov3={setShowMovies3} /> */}
      <header>
        {/* <Button name={classBtn1} setShowMov={setShowMov1} /> */}
        <div className="wrapper">
          <button onClick={() => {
            setShowMovies1(true);
            setShowMovies2(false);
            setShowMovies3(false);
            setShowTitle(false);
            // console.log('click');
          }}>
            {movies[0].name}
          </button>
          {/* <Button name={classBtn2} setShowMov={setShowMov2} /> */}
          <button onClick={() => {
            setShowMovies2(true);
            setShowMovies1(false);
            setShowMovies3(false);
            setShowTitle(false);
          }}>
            {movies[1].name}
          </button>
          {/* <Button name={classBtn3} setShowMov={setShowMov3} /> */}
          <button onClick={() => {
            setShowMovies3(true);
            setShowMovies2(false);
            setShowMovies1(false);
            setShowTitle(false);
          }}>
            {movies[2].name}
          </button>
        </div>
      </header>
      <Title title="Merci de choisir un film !" classTxt={showTitle ? "choice" : "hide"} />
      {/* faire apparaitre le film choisie */}
      {showMovies1 ? (
        <div className='containerPage'>
          {
            movies.map((movie, key = uuidv4()) => {
              // { console.log('movie:', movie); }
              { console.log('key:', key); }
              // { console.log('movie.name:', movie.name); }
              // const backgImage = movie.background;
              // { console.log('backgImage:', backgImage) }
              // const divBackg = {
              //   backgroundImage: 'url(' + backgImage + ')'
              // }
              // { console.log('divBackg:', divBackg) }
              if (key < 1) {
                return (
                  <>
                    <div key={key} className='container'>
                      <Image src={movie.background} alt={movie.name} classImg="backgMovies" />
                    </div>
                    <div key={key} className='containerPicActors'>
                      {movie.actors.map((acteur, key = uuidv4()) => {
                        return (
                          <>
                            <div className='boxPicActors'>
                              <Image src={acteur.picture} alt={acteur.name} classImg="backgActors" />
                              <Title classTxt="titleActors" title={acteur.name} />
                            </div>
                          </>
                        )
                      })}
                    </div>
                  </>
                )
              }
              else {
                return null
              }
            }
            )
          }
        </div>
      ) : (null)}
      {showMovies2 ? (
        <div className='containerPage'>
          {
            movies.map((movie, key = uuidv4()) => {
              // { console.log('movie:', movie); }
              { console.log('key:', key); }
              // { console.log('movie.name:', movie.name); }
              // const backgImage = movie.background;
              // { console.log('backgImage:', backgImage) }
              // const divBackg = {
              //   backgroundImage: 'url(' + backgImage + ')'
              // }
              // { console.log('divBackg:', divBackg) }
              if (key === 1) {
                return (
                  <>
                    <div key={key} className='container'>
                      <Image src={movie.background} alt={movie.name} classImg="backgMovies" />
                    </div>
                    <div key={key} className='containerPicActors'>
                      {movie.actors.map((acteur, key = uuidv4()) => {
                        return (
                          <>
                            <div className='boxPicActors'>
                              <Image src={acteur.picture} alt={acteur.name} classImg="backgActors" />
                              <Title classTxt="titleActors" title={acteur.name} />
                            </div>
                          </>
                        )
                      })}
                    </div>
                  </>
                )
              }
              else {
                return null
              }
            }
            )
          }
        </div>
      ) : (null)}
      {showMovies3 ? (
        <div className='containerPage'>
          {
            movies.map((movie, key = uuidv4()) => {
              // { console.log('movie:', movie); }
              { console.log('key:', key); }
              // { console.log('movie.name:', movie.name); }
              // const backgImage = movie.background;
              // { console.log('backgImage:', backgImage) }
              // const divBackg = {
              //   backgroundImage: 'url(' + backgImage + ')'
              // }
              // { console.log('divBackg:', divBackg) }
              if (key > 1) {
                return (
                  <>
                    <div key={key} className='container'>
                      <Image src={movie.background} alt={movie.name} classImg="backgMovies" />
                    </div>
                    <div key={key} className='containerPicActors'>
                      {movie.actors.map((acteur, key = uuidv4()) => {
                        return (
                          <>
                            <div className='boxPicActors'>
                              <Image src={acteur.picture} alt={acteur.name} classImg="backgActors" />
                              <Title classTxt="titleActors" title={acteur.name} />
                            </div>
                          </>
                        )
                      })}
                    </div>
                  </>
                )
              }
              else {
                return null
              }
            }
            )
          }
        </div>
      ) : (null)}
    </>
  )
}

export default App
