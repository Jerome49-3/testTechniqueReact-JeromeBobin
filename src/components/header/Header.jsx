import Button from '../button/Button'

const Header = ({ classBtn1, classBtn2, classBtn3, setShowMov1, setShowMov2, setShowMov3 }) => {
  return (
    <div>
      <header>
        {/* <Button name={classBtn1} setShowMov={setShowMov1} /> */}
        <button onClick={() => {
          setShowMov1(true);
          setShowMov2(false);
          setShowMov3(false);
          console.log('click')
        }}>
          {classBtn1}
        </button>
        {/* <Button name={classBtn2} setShowMov={setShowMov2} /> */}
        <button onClick={() => {
          setShowMov2(true);
          setShowMov1(false);
          setShowMov3(false);
          console.log('click')
        }}>
          {classBtn2}
        </button>
        {/* <Button name={classBtn3} setShowMov={setShowMov3} /> */}
        <button onClick={() => {
          setShowMov3(true);
          setShowMov2(false);
          setShowMov1(false);
          console.log('click')
        }}>
          {classBtn3}
        </button>
      </header>
    </div>
  )
}

export default Header