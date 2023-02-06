import styles from "./button.module.scss"

export default function Button ({title, color}) {
  const generationClassByColor = () => {
    if (color === "secundary") return styles.secundary
    
    return styles.primary
  };

  return (
    <button className={`${styles.button} ${generationClassByColor()}`}>
      {title}
    </button>
  )
}

 