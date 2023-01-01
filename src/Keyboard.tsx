import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "ą",
    "b",
    "c",
    "ć",
    "d",
    "e",
    "ę",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "ł",
    "m",
    "n",
    "ń",
    "o",
    "ó",
    "p",
    "q",
    "r",
    "s",
    "ś",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "ź"
  ]

export function Keyboard(){
    return (
    <div 
    style={{
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", 
      gap: ".5rem",
        }}
    >
    {KEYS.map(key => {
      return <button  className={styles.btn} key={key}>{key}</button>
})}
    </div>
    )
}