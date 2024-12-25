import Header from "../../components/header/Header"
import Headercards from "../../components/headercards/Headercards"

const Home = ({headerimg, imgheader2, womenhug, huggingpeople, location}) => {
  return (
    <div>
      <Header headerimg={headerimg} imgheader2={imgheader2} womenhug={womenhug}/>
      <Headercards huggingpeople={huggingpeople} location={location}/>
    </div>
  )
}

export default Home