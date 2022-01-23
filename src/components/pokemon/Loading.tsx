import { useSpring, animated } from 'react-spring'

export const Loading = () => {
  const styles = useSpring({
    loop: true,
    to: [{ transform: 'rotate(25deg)' }, { transform: 'rotate(-25deg)' }],
    from: { transform: 'rotate(-25deg)' },
  })

  return (
    <div className="pokeball_loading">
      <animated.img
        src="/images/pokeball.svg"
        alt="spinning poke ball"
        style={styles}
      />
    </div>
  )
}
