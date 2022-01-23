export const Error = () => (
  <div className="pokedex_error flex_ui">
    <div className="error_details">
      <div className="error_container">
        <div className="error_header">
          <h1>Oops an error occurred...</h1>
          <h2>Tips</h2>
        </div>
        <div className="error_list card_ui">
          <span>404 Pokémon not found...</span>
          <ul className="list_divider">
            <li>
              <p>There are currently only 898 Pokémon</p>
            </li>
            <li>
              <p>Verify your network connection</p>
            </li>
            <li>
              <p>Please use alphanumeric characters only</p>
            </li>
            <li>
              <p>Verify that you are using the correct spelling</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="pokeball_error">
      <img src="/images/pokeball.svg" alt="spinning poke ball" />
    </div>
  </div>
)
