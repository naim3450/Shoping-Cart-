import Product from "./Component/Product"
import RemoveState from "./Context/RemoveState"

function App() {

  return (
    <>
      <RemoveState>
        <Product />
      </RemoveState>
    </>
  )
}

export default App
