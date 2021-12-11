import { useNavigate } from 'react-router-dom'

export const RandomButton = () => {
  const navigate = useNavigate()

  return (
    <div className="random_pokemon">
      <button
        title="Random pokemon"
        onClick={() =>
          navigate(`/pokedex?search=${Math.floor(Math.random() * 898) + 1}`)
        }
      >
        <img src="/images/pokeball.svg" alt="pokeball" />
      </button>
    </div>
  )
}
