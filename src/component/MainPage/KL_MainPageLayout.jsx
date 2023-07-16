import SideBarLayout from '../SideBar/SideBarLayout'
import UncontrolledExample from './Carosels'
import News from './News'
import PL_GoalRanking from './PL_GoalRanking'
import styles from './css/Mainpage.module.scss'
import KL_GameSchedule from '../MainPage/GameSchedule/KL_GameSchedule'
import classNames from 'classnames/bind'
import KL_GoalRanking from './KL_GoalRanking'
import KL_Team_Rank from './TeamRank/KL_Team_Rank'

const cx = classNames.bind(styles)

function KL_MainPageLayout () {
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
                            오늘의 국내 축구 뉴스
                        </div>

                        <div className={cx('news-inside')}>
                            <News/>
                        </div>
                    </div>

                </div>

                <div className={cx('secondDiv')}>
                    <div className={cx('no')}>
                        <div>
                            득점 순위
                        </div>
                        <div className={cx('test2')}>
                            <KL_GoalRanking/>
                        </div>
                    </div>
                    <div className={cx('no1')}>
                        <div className={cx('parentdiv')}>
                            <div className={cx('more1')}>경기 일정</div>
                            <div className={cx('more2')}>More...</div>
                        </div>
                        <div className={cx('test3')}>
                            <KL_GameSchedule/>
                        </div>
                    </div>
                    <div className={cx('no2')}>
                        <div>
                            팀 순위
                        </div>
                        <div className={cx('teamrank')}>
                            <KL_Team_Rank/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KL_MainPageLayout
