import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import { Form, LifeCycle, Menu } from './components'

ReactDOM.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/nosso-time" element={<h1>Nosso Time</h1>} />
      <Route path="contato" element={<Form />}>
        <Route path=":nomeUsuario" element={<Form />} />
      </Route>
      <Route path="/ciclo-de-vida" element={<LifeCycle />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
