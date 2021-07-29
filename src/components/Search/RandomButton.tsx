import { useHistory } from 'react-router'

export const RandomButton = () => {
  const history = useHistory()

  return (
    <div className="random_pokemon">
      <button
        title="Random pokemon"
        onClick={() =>
          history.push(`/pokedex?search=${Math.floor(Math.random() * 898) + 1}`)
        }
      >
        <img src="/images/pokeball.svg" alt="pokeball" />
      </button>
    </div>
  )
}
