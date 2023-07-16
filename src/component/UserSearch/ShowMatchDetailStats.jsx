import ShowRadarGraphShoot from './Graph/ShowRadarGraphShoot'

function ShowMatchDetailStats (props) {
    const { matchInfo } = props

    return (
        <div>
            <ShowRadarGraphShoot matchInfo={matchInfo}/>
        </div>

    )
}

export default ShowMatchDetailStats
