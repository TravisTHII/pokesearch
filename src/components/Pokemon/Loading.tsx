import { useSpring, animated } from 'react-spring'

export const Loading = () => {
  const styles = useSpring({
    loop: true,
    to: [{ transform: 'rotate(25deg)' }, { transform: 'rotate(-25deg)' }],
    from: { transform: 'rotate(-25deg)' },
  })

  return (
    <div className="flex_ui">
      <animated.div className="pokeball_loading" style={styles}>
        <img src="/images/pokeball.svg" alt="spinning poke ball" />
      </animated.div>
    </div>
  )
}
