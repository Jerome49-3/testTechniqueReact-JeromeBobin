import Title from '../title/Title'

const Article = (props) => {
  const { movie, key } = props
  return (
    <>
      <div key={key} className='container'>
        <Image src={movie.background} alt={movie.name} classImg="backgMovies" />
        {/* <Header classBtn1={movies[0].name} classBtn2={movies[1].name} classBtn3={movies[2].name} setShowMov1={setShowMovies1} setShowMov2={setShowMovies2} setShowMov3={setShowMovies3} /> */}
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

export default Article