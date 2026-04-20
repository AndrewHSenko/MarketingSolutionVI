import Stat from '../components/Stat.jsx'

const StatsGroup = ({stats}) => {
  return (
    <div className="row mx-2 align-items-center">
        {stats.map(({ num, title, pos }) => (
            <div key={title} className="col-12">
                <Stat num={num} title={title} pos={pos} />
            </div>
        ))}
        </div>
)
}

export default StatsGroup

// <img src={house} alt="A modified home by https://unsplash.com/@publicdomainvectors/illustrations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" />
   