import Landing from '../components/Landing.jsx'
import Stats from '../components/Stats.jsx'
import Shoutout from '../components/Shoutout.jsx'
import HoverMap from '../components/HoverMap.jsx'
import AddOns from '../components/AddOns.jsx'
import MSVISolution from '../components/MSVISolution.jsx'

const LandingPage = () => {
  return (
    <>
        <Landing />
        <Stats />
        <Shoutout title={"How it works"} desc={"Choose which counties you want to target. Pay by the amount of listings."} theme={"dark"}/>
        <HoverMap />
        <Shoutout title={"Complete your package."} desc={"Visualize your target HOAs on an interactive map and reach out to HOAs directly."} theme={"light"}/>
        <AddOns />
        <Shoutout id="marketing-solution" title={<p><i>The</i> Marketing Solution</p>} desc={"Want it all? Try the all-inclusive MSVI package"} theme={"dark"}/>
        <MSVISolution />
        <Shoutout title={"Want to learn more?"} desc={"Contact us for a quote today!"} theme={"light"}/>
    </>
  )
}

export default LandingPage