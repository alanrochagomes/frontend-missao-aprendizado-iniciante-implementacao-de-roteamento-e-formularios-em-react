import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { ToastContainer, toast } from 'react-toast'
import { Api } from './api/api'
// import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [devmons, setDevmons] = useState([])

  async function fetchData() {
    const apiUrl = Api.personagem.readAll()
  
      const response = await Api.buildApiGetRequest(apiUrl)
    
      if (response.ok) {
        const data = await response.json()
    
        setDevmons(data)
      } else {
        toast.error('Erro ao carregar lista de Devmon.')
      }
  }

  useEffect(function () {
    fetchData()
  }, [])

  return (
    <>
    <div className="cards">
      {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />
        })}
      </div>
      <ToastContainer />
    </>
  )
}

export default App
