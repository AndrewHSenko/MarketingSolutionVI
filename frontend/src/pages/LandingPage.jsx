import Landing from '../components/Landing.jsx'
import Stats from '../components/Stats.jsx'
import Shoutout from '../components/Shoutout.jsx'
import CountyMap from '../components/CountyMap.jsx'

const LandingPage = () => {
  return (
    <>
        <Landing />
        <Stats />
        <Shoutout title={"How It Works"} desc={"Choose which counties you want. Pay by the amount of listings."}/>
        <CountyMap />
    </>
  )
}

export default LandingPage