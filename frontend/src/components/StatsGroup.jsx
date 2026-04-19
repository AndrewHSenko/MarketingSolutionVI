import Stat from '../components/Stat.jsx'
const StatsGroup = ({stats}) => {
  return (
    <div className="row mx-2 align-items-center">
        {stats.map(({ num, title, pos }) => (
            <div key={title} className="col-4 col-md-12">
                <Stat num={num} title={title} pos={pos} />
            </div>
        ))}
    </div>
)
}

export default StatsGroup