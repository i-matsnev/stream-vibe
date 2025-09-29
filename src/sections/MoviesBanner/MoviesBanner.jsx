import './MoviesBanner.scss'
import classNames from 'classnames'
import Slider from "@/components/Slider"
import MovieBannerCard from "@/components/MovieBannerCard"

const MoviesBanner = (props) => {
  const {
    className,
  } = props

  const titleId = 'movies-banner-title'

  const movieCards = [
    {
      title: 'Avengers : Endgame',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
    {
      title: 'Kantara',
      description: 'A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.',
      imgSrc: '/src/assets/images/movie-banner/2.jpg',
    },
    {
      title: 'Stranger Things',
      description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
      imgSrc: '/src/assets/images/movie-banner/3.jpg',
    },
  ]

  return (
    <section
      className={classNames(className, 'movies-banner container')}
      aria-labelledby={titleId}

    >
      <h1 className="visually-hidden" id={titleId}>
        Movies & Shows
      </h1>
      <Slider
        sliderParams={{
          sliderPerView: 1,
          breakpoints: {
            1024: {
              allowTouchMove: false,
            }
          },
        }}
        navigationPosition="abs-bottom"
        hasScrollBarOnMobile={false}
      >
        {movieCards.map((movieCard, index) => (
          <MovieBannerCard {...movieCard} key={index} />
        ))}
      </Slider>
    </section>
  )
}

export default MoviesBanner