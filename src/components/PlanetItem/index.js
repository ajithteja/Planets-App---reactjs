import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {imageUrl, description, name} = eachPlanet

  return (
    <div key={eachPlanet.id} className="each-planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
