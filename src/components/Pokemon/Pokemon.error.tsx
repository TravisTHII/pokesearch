
export const Error = () =>
  <div className="pokeball_error_container">
    <div className="error_tips">
      <h1>Oops an error occurred...</h1>
      <h2>Tips</h2>
      <ul>
        <li>There are currently only 898 Pokemon make sure your search is in that range.</li>
        <li>Verify your network connection.</li>
        <li>Please use alphanumeric characters only.</li>
        <li>Verify that you are using the correct spelling.</li>
      </ul>
    </div>
    <div className="pokeball_error">
      <img src="/images/pokeball.svg" alt="spinning poke ball" />
    </div>
  </div>