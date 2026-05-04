import Landing from '../components/Landing.jsx'
import Stats from '../components/Stats.jsx'
import Shoutout from '../components/Shoutout.jsx'
import CountyMap from '../components/CountyMap.jsx'
import PriceScale from '../components/PriceScale.jsx'
import TempScale from '../components/TempScale.jsx'
import Sample from '../components/Sample.jsx'
import MapSample from '../components/MapSample.jsx'

const LandingPage = () => {
  return (
    <>
        <Landing />
        <Stats />
        <Shoutout title={"How It Works"} desc={"Choose which counties you want. Pay by the amount of listings."}/>
        <CountyMap />
        <PriceScale />
        <TempScale />
        <Sample />
        <MapSample />
    </>
  )
}

export default LandingPage
//