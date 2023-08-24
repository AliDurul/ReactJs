import Products from "./component/Products"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "./features/productSlice"

function App() {
  const { data, status } = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  if(status === "loading"){
    return <h1 className="text-center">Loading..</h1>
  }
  if(status === "error"){
    return <h1 className="text-center">SomeThing went wrong.. Try Agin Later..</h1>
  }
  

  return (
    <>
      <h1>hi</h1>
      <div className="d-flex justify-content-center gap-5  flex-wrap ">
        {
          data?.map(item => <Products item={item} key={item.id} />)
        }
      </div>
    </>
  )
}

export default App
