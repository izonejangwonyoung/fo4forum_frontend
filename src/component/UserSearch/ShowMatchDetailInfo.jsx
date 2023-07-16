import styles from '../css/ShowMatchDetailInfo.module.scss'

import classNames from 'classnames/bind'
import ShowMatchDetailPlayerInfo from './ShowMatchDetailPlayerInfo'

const cx = classNames.bind(styles)

const ShowMatchDetailInfo = (props) => {
    const { matchInfo } = props
    const p1_score = matchInfo[0].shoot.goalTotal
    const p2_score = matchInfo[1].shoot.goalTotal
    const p1_name = matchInfo[0].nickname
    const p2_name = matchInfo[1].nickname
    console.log('fuck', matchInfo)
    return (
        <div>
            <div className={cx('container_score')}>
                <div className={cx('player1_score')}>
                    {p1_score}
                </div>
                <div className={cx('player1_name')}>
                    {p1_name}
                </div>
                <div className={cx('player2_name')}>
                    {p2_name}
                </div>
                <div className={cx('player2_score')}>
                    {p2_score}
                </div>
            </div>
            <div className={cx('container_playerinfo')}>
                <ShowMatchDetailPlayerInfo matchInfo={matchInfo}/>
            </div>
        </div>

    )
}
export default ShowMatchDetailInfo
