// import styles from ".";
import {useEffect} from "react"

function DadJokes(props) {
  useEffect(() => {
    async function generateJoke() {
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      const res = await fetch("https://icanhazdadjoke.com", config);
      const data = await res.json();
      console.log(data);
    }
    generateJoke()
  }, []);
  return <div></div>;
}

export default DadJokes;
