import {useState} from 'react'
export function Form(){
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newcurso = {
      title:title
    }
    createTask(newcurso)
  }
  return (
    <div>
        <form onSubmit={handleSubmit} >
          <input placeholder='crear nuevo curso'
          onChange={(e) => setTitle(e.target.value)}
          />
          <button>crear</button>
        </form>
    </div>
  )
}

