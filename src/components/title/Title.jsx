
const Title = (props) => {
  const { title, classTxt, id } = props;
  return (
    <>
      <h1 className={classTxt} id={id}>
        {title}
      </h1>
    </>
  )
}

export default Title