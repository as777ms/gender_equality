import Header from "../../components/header/Header"
import Headercards from "../../components/headercards/Headercards"
import HeroSection from "../../components/herosection/Herosection"

const Home = ({headerimg, imgheader2, womenhug, huggingpeople, location, womenlaptop}) => {
  return (
    <div>
      <Header headerimg={headerimg} imgheader2={imgheader2} womenhug={womenhug}/>
      <Headercards huggingpeople={huggingpeople} location={location}/>
      <HeroSection womenlaptop={womenlaptop}/>
    </div>
  )
}

export default Home