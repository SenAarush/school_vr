import { Route, Routes } from "react-router-dom"
import Chemverse from "./pages/Chemverse/page"
import Landing from "./pages/Landing/page"
import SpaceVerse from "./pages/SpaceVerse/page"
import AtomVerse from "./pages/AtomVerse/page"
import BioVerse from "./pages/BioVerse/page"
import GeoVerse from "./pages/GeoVerse/page"

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" Component={Landing}/>
      <Route path="/chemverse" Component={Landing}/>
      <Route path="/spaceverse" Component={SpaceVerse}/>
      <Route path="/atomverse" Component={AtomVerse}/>
      <Route path="/bioverse" Component={BioVerse}/>
      <Route path="/geoverse" Component={GeoVerse}/>
      <Route path="/chemverse" Component={Chemverse}/>
    </Routes>
    </>
  )
}