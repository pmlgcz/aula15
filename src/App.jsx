import { Link } from 'react-router-dom'
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <h3>Extras</h3>
      <Link to="/ciclo-de-vida">Ciclo de Vida com useEffect</Link>
    </div>
  )
}
