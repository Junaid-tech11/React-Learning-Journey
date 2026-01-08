import './App.css'
import Product from './components/Product'
import Cart from './components/Cart'


function App() {
  return (
    <div className="App">
      <h1>Redux Shop 🛒</h1>
      <p>The cart system is ready.</p>


      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Product />
        <Cart />
      </div>

    </div>
  )
}

export default App