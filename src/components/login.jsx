import {useState} from "react"
export function Login() {

  const handleSubmit = (evento) => {
    evento.preeventDefault()
    
    if (nombre ==="" || apellido==="" || genero==="" || dni==="" || edad ===""){
      alert("necesita rellenar todos los campos de informacion")
    }

    setUser([nombre, apellido, dni, genero, edad])
  }
/*const [user, setUser]= useState([])
user.length>0
?<formulario setUser=(setUser)/>
:<app/>
como se importa bootstrap      import { Button } from 'react-bootstrap';
*/

  const [nombre, SetNombre] = useState("")
  const [apellido, SetApellido] = useState("")
  const [genero, SetGenero] = useState("")
  const [dni, SetDni] = useState("")
  const [edad, SetEdad] = useState("")
  
  return (<form className="formulario" onSubmit="handleSubmit">
    <input type="text" 
    value={nombre}
    onChange={ evento => SetNombre (evento.target.value)}></input>

    <input type="text" 
    value={apellido}
    onChange={ evento => SetApellido (evento.target.value)}></input>

    <input type="text" 
    value={genero}
    onChange={ evento => SetGenero (evento.target.value)}></input>

    <input type="number" 
    value={dni}
    onChange={ evento => SetDni (evento.target.value)}></input>

    <input type="number" 
    value={edad} 
    onChange={ evento => SetEdad (evento.target.value)}></input>

    <button onClick={algo aaaa} >Registrate!</button>

   </form>)
    

  

}
