import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  console.log(planetsList)

  return (
    <div data-testid="planets" className="bg-container">
      <h1 className="main-heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} eachPlanet={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
