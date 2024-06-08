
const Button = ({ name, setShowMov }) => {
  return (
    <button onClick={() => {
      setShowMov(true);
    }}>
      {name}
    </button>
  )
}

export default Button