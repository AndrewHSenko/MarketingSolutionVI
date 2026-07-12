import Landing from '../components/Landing.jsx'
import Stats from '../components/Stats.jsx'
import Shoutout from '../components/Shoutout.jsx'
import HoverMap from '../components/HoverMap.jsx'
import AddOns from '../components/AddOns.jsx'

const LandingPage = () => {
  return (
    <>
        <Landing />
        <Stats />
        <Shoutout title={"How it works"} desc={"Choose which counties you want to target. Pay by the amount of listings."} theme={"dark"}/>
        <HoverMap />
        <Shoutout title={"Complete your package."} desc={"Reach out to HOAs directly and visualize your target HOAs on an interactive map."} theme={"light"}/>
        <AddOns />
        <Shoutout title={"Want it all?"} desc={"Try the all-inclusive Marketing Solution VI package"} theme={"light"}/>
    </>
  )
}

export default LandingPage
//<Stats />