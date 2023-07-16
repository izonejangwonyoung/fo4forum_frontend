import SideBarLayout from '../SideBar/SideBarLayout'
import UncontrolledExample from './Carosels'
import News from './News'
import PL_GoalRanking from './PL_GoalRanking'
import styles from './css/Mainpage.module.scss'
import classNames from 'classnames/bind'
import PL_GameSchedule from '../MainPage/GameSchedule/PL_GameSchedule'
import PL_Team_Rank from './TeamRank/PL_Team_Rank'
import { useContext, useEffect, useState } from 'react'
import axiosInstance from '../Instance'
import ToolTipForMainPage_playerscore from './ToolTipForMainPage_playerscore'
import ToolTipForMainPage_teamscore from './ToolTipForMainPage_teamscore'
import ToolTipForMainPage_matchschedule from './ToolTipForMainPage_matchschedule'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Vote from './Vote/Vote'
const apiUrl = process.env.REACT_APP_API_URL
const cx = classNames.bind(styles)
function PL_MainPageLayout () {
    const [LastPlayerScoreUpdateDate, setLastPlayerScoreUpdateDate] = useState()
    const [LastTeamScoreUpdateDate, setLastTeamScoreUpdateDate] = useState()
    const [LastMatchScheduleUpdateDate, setLastMatchScheduleUpdateDate] = useState()
    const [IsLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        axiosInstance.get(`${apiUrl}/PL/PLAYERRANK/RECENTDATE`).then((response) => {
            setLastPlayerScoreUpdateDate(response.data[0].REG_DATE)
        })
        axiosInstance.get(`${apiUrl}/PL/TEAMRANK/RECENTDATE`).then((response) => {
            setLastTeamScoreUpdateDate(response.data[0].REG_DATE)
        })
        axiosInstance.get(`${apiUrl}/PL/MATCHSCHEDULE/RECENTDATE`).then((response) => {
            setLastMatchScheduleUpdateDate(response.data[0].REG_DATE)
        })
    }, [])
    useEffect(() => {
        try {
            axios({
                url: `${apiUrl}/login/success`,
                method: 'GET',
                withCredentials: true
            })
                .then((result) => {
                    console.log(result, '/login/success 실행 결과')
                    if (result.data) {
                        setIsLogin(true)
                        setUser(result.data[0])
                        console.log(result)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])
    const handleLogout = () => {
        try {
            axios({
                url: `${apiUrl}/logout`,
                method: 'post',
                withCredentials: true
            })
                .then((result) => {
                    console.log(result, '/logout 실행 결과')
                    window.open('/mainPL', '_self')
                })
                .catch((error) => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
    }
    const handleJWTValidCheck = () => {
        try {
            axios({
                url: `${apiUrl}/login/authCheck`,
                method: 'get'
            })
        } catch (error) {
            console.log(error)
        }
    }
    const accessToken = () => {
        axios({
            url: `${apiUrl}/login/accesstoken`,
            method: 'GET',
            withCredentials: true
        })
    }

    const refreshToken = () => {
        axios({
            url: `${apiUrl}/login/refreshtoken`,
            method: 'GET',
            withCredentials: true
        })
    }

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
                {/* {IsLogin */}
                {/*    ? ( */}
                {/*        <> */}
                {/*            <h3> {user.ID}님이 로그인했습니다.</h3> */}
                {/*            <button className="loginButton" onClick={handleLogout}> */}
                {/*                Logout */}
                {/*            </button> */}
                {/*            <button onClick={handleJWTValidCheck}>검증 버튼</button> */}
                {/*            <button onClick={refreshToken}>리프레시토큰</button> */}
                {/*            <button onClick={accessToken}>엑세스토큰</button> */}
                {/*        </> */}
                {/*    ) */}
                {/*    : <div>로그인을 해주세요</div> */}
                {/* } */}
                <div className={cx('secondDiv')}>
                    <div className={cx('no')}>
                        {/* <div className={cx('score_div')}> */}
                        {/*    득점 순위 */}
                        {/* </div> */}
                        <div className={cx('score_div')}>
                            <ToolTipForMainPage_playerscore REGDATE={LastPlayerScoreUpdateDate}/>
                        </div>
                        <div className={cx('test2')}>
                            <PL_GoalRanking/>
                        </div>
                    </div>
                    <div className={cx('no1')}>
                        <div className={cx('parentdiv')}>
                            {/* <div className={cx('more1')}>경기 일정</div> */}
                            <div className={cx('more1')}>
                                <ToolTipForMainPage_matchschedule REGDATE={LastMatchScheduleUpdateDate}/>
                            </div>
                            <div className={cx('more2')}>
                                <Link to='/detailSchedule'>전체 일정 보기</Link>
                            </div>
                        </div>
                        <div className={cx('test3')}>
                            <PL_GameSchedule/>
                        </div>
                    </div>
                    <div className={cx('no2')}>
                        <div>
                            <ToolTipForMainPage_teamscore REGDATE={LastTeamScoreUpdateDate}/>
                        </div>
                        <div className={cx('teamrank')}>
                            <PL_Team_Rank/>
                        </div>
                    </div>
                </div>
                <div className={cx('thirdDiv')}>
                    <div className={cx('vote_container_desc')}>
                        <div className={cx('vote_div1')}>진행중인 투표</div>
                        <div className={cx('vote_div2')}><Link to="/voteRegister">투표 등록 바로가기</Link></div>
                    </div>
                    <div className={cx('container_vote')}>
                        <Vote/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PL_MainPageLayout
