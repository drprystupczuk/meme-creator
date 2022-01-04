import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [img, setImg] = useState('fire');

  const onChangeLinea1 = function (evento) { 
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function (evento) { 
    setLinea2(evento.target.value)
  }

  const onChangeImg = function (evento) { 
    setImg(evento.target.value)
  }

  const exportImg = function () { 
    html2canvas(document.querySelector("#meme")).then(canvas => {
      //document.body.appendChild(canvas) 

      var img = canvas.toDataURL("image/png");
      // document.write('<img scr="'+img+'"/>');

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">

      <select onChange={onChangeImg}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br/>
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'></input> <br/>
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'></input> <br/>

      <button onClick={exportImg}>Exportar</button>
      <br/>


      <div className='meme' id='meme'>
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={'./img/'+ img +'.jpg'}></img>
      </div>

    </div>
  );
}

export default App;
