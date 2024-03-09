import { Route, Routes } from "react-router-dom"
import Chemverse from "./pages/Chemverse/page"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chemverse/>}></Route>
        {/* <Route path="/chemverse" element={<Chemverse />}></Route> */}
      </Routes>
    </>
  )
}