import './App.css'


 const App = (props) => {
  
  return (

    


    <div className="contenedorImg">
      <div className='contenedor'>
          <div className="Reloj"><i class="fa-regular fa-clock"></i></div>
          <div className="five">{Math.floor(props.five5 / 10000 % 10)}</div>
          <div className="four">{Math.floor(props.four4 / 1000 % 10)}</div>
          <div className="three">{Math.floor(props.three3 / 100 % 10)}</div>
          <div className="two">{Math.floor(props.two2 / 10 % 10)}</div>
          <div className="one">{Math.floor(props.one1 / 1 % 10)}</div>
      </div>
    </div>



  )

}




export default App