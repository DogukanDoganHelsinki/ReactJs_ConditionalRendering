import React from "react";

function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  /**
   * Challenge:
   * - Only display the punchline paragraph if `isShown` is true
   */

  function toggleShown() {
    setIsShown((prevVal) => !prevVal);
  }

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <hr />
    </div>
  );
}
export default Joke;
