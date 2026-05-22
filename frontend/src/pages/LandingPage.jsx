import Landing from '../components/Landing.jsx'
import Stats from '../components/Stats.jsx'
import Shoutout from '../components/Shoutout.jsx'
import CountyMap from '../components/CountyMap.jsx'
import PriceScale from '../components/PriceScale.jsx'
import Samples from '../components/Samples.jsx'

const LandingPage = () => {
  return (
    <>
        <Landing />
        <Stats />
        <Shoutout title={"How it works"} desc={"1) Choose which counties you want. Pay by the amount of listings."}/>
        <CountyMap />
        <PriceScale />
        <Shoutout title={"Want to see more?"} desc={"Select our sample CID list or our sample CID map to download and see what we have to offer."} />
        <Samples />
    </>
  )
}

export default LandingPage
//