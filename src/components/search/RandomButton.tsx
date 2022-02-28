import { useNavigate } from 'react-router-dom'

export const RandomButton = () => {
  const navigate = useNavigate()

  return (
    <button
      title="Random pokemon"
      className="randomize_pokemon"
      onClick={() =>
        navigate(`/pokedex?search=${Math.floor(Math.random() * 898) + 1}`)
      }
    >
      <img src="/images/pokeball.svg" alt="pokeball" />
    </button>
  )
}
