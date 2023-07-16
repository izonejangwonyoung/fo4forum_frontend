import SideBarLayout from '../SideBar/SideBarLayout'
import UncontrolledExample from './Carosels'
import News from './News'
import PL_GoalRanking from './PL_GoalRanking'
import styles from './css/Mainpage.module.scss'
import classNames from 'classnames/bind'
import LL_GameSchedule from '../MainPage/GameSchedule/LL_GameSchedule'
import LL_GoalRanking from './LL_GoalRanking'
import LL_Team_Rank from './TeamRank/LL_Team_Rank'
import { useEffect, useState } from 'react'
import axiosInstance from '../Instance'
import ToolTipForMainPage_playerscore from './ToolTipForMainPage_playerscore'
const apiUrl = process.env.REACT_APP_API_URL

const cx = classNames.bind(styles)

function PL_MainPageLayout () {
    const [LastPlayerScoreUpdateDate, setLastPlayerScoreUpdateDate] = useState()
    const [LastTeamScoreUpdateDate, setLastTeamScoreUpdateDate] = useState()
    const [LastMatchScheduleUpdateDate, setLastMatchScheduleUpdateDate] = useState()
    useEffect(() => {
        axiosInstance.get(`${apiUrl}/LL/PLAYERRANK/RECENTDATE`).then((response) => {
            setLastPlayerScoreUpdateDate(response.data)
        })
        axiosInstance.get(`${apiUrl}/LL/TEAMRANK/RECENTDATE`).then((response) => {
            setLastTeamScoreUpdateDate(response.data[0].REG_DATE)
        })
        axiosInstance.get(`${apiUrl}/LL/MATCHSCHEDULE/RECENTDATE`).then((response) => {
            setLastMatchScheduleUpdateDate(response.data[0].REG_DATE)
        })
    })
    console.log(styles)
    return (

        <>

            <div className={cx('MainPageLayout')}>
                <div className={cx('yes')}>
                    <div className={cx('carousel')}>
                        <UncontrolledExample/>
                    </div>
                    <div className={cx('news')}>
                        <div className={cx('news-title')}>
                            오늘의 해외 축구 소식
                        </div>

                        <div className={cx('news-inside')}>
                            <News/>
                        </div>
                    </div>

                </div>

                <div className={cx('secondDiv')}>
                    <div className={cx('no')}>
                        <div>
                            <ToolTipForMainPage_playerscore REGDATE={LastPlayerScoreUpdateDate}/>
                        </div>
                        <div className={cx('test2')}>
                            <LL_GoalRanking/>
                        </div>
                    </div>
                    <div className={cx('no1')}>
                        <div className={cx('parentdiv')}>
                            <div className={cx('more1')}>경기 일정</div>
                            <div className={cx('more2')}>More...</div>
                        </div>
                        <div className={cx('test3')}>
                            <LL_GameSchedule/>
                        </div>
                    </div>
                    <div className={cx('no2')}>
                        <div>
                            팀 순위
                        </div>
                        <div className={cx('teamrank')}>
                            <LL_Team_Rank/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PL_MainPageLayout
