const Button = props => {
  const {color, name} = props
  return <button className={color}>{name}</button>
}

const element = (
  <div className='container'>
    <h1>Social Buttons</h1>
    <div></div>
    <Button name='Like' color='yellow' />
    <Button name='Comment' color='white' />
    <Button name='Share' color='blue' />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
