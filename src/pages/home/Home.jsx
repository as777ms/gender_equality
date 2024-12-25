import Header from "../../components/header/Header"
import Headercards from "../../components/headercards/Headercards"
import HeroSection from "../../components/herosection/Herosection"
import Victimssection from "../../components/victimssection/Victimssection"

const Home = ({headerimg, imgheader2, womenhug, huggingpeople, location, womenlaptop, handsshake, manshakehand, womenblond}) => {
  return (
    <div>
      <Header headerimg={headerimg} imgheader2={imgheader2} womenhug={womenhug}/>
      <Headercards huggingpeople={huggingpeople} location={location}/>
      <HeroSection womenlaptop={womenlaptop}/>
      <Victimssection handsshake={handsshake} manshakehand={manshakehand} womenblond={womenblond}/>
    </div>
  )
}

export default Home