import Clients from "../../components/clients/Clients"
import EmpowerSection from "../../components/empowersection/EmpowerSection"
import Header from "../../components/header/Header"
import Headercards from "../../components/headercards/Headercards"
import HeroSection from "../../components/herosection/Herosection"
import Victimssection from "../../components/victimssection/Victimssection"

const Home = ({headerimg, imgheader2, womenhug, huggingpeople, location, womenlaptop, handsshake, manshakehand, womenblond, emily, together, togetherhug}) => {
  return (
    <div>
      <Header headerimg={headerimg} imgheader2={imgheader2} womenhug={womenhug}/>
      <Headercards huggingpeople={huggingpeople} location={location}/>
      <HeroSection womenlaptop={womenlaptop}/>
      <Victimssection handsshake={handsshake} manshakehand={manshakehand} womenblond={womenblond}/>
      <Clients emily={emily} together={together}/>
      <EmpowerSection togetherhug={togetherhug}/>
    </div>
  )
}

export default Home