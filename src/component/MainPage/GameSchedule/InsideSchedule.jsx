import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import moment from 'moment-timezone'
import styles from '../css/LL_GameSchedule.module.scss'

const cx = classNames.bind(styles)

function InsideSchedule (props) {
    const { higherScoreTag, lowerScoreTag, it, formattedTime } = props
    const [statusText, setStatusText] = useState()
    const [isStopped, setIsStopped] = useState(false)
    const [isStarted, setIsStarted] = useState(false)
    const [isJeonban, setIsJeonban] = useState(false)
    const [isHarfTime, setIsHarfTime] = useState(false)
    const [isHuban, setIsHuban] = useState(false)
    const [minutesElapsed, setMinutesElapsed] = useState(0)
    const apiUrl = process.env.REACT_APP_API_URL

    // const nowTime = moment.utc().tz(timeZone);
    function formatTime (minutesElapsed) {
        minutesElapsed = Math.abs(minutesElapsed)
        const secondsInDay = 86400 // 60 * 60 * 24
        const secondsInHour = 3600 // 60 * 60
        const secondsInMinute = 60

        const days = Math.floor(minutesElapsed / secondsInDay)
        const hours = Math.floor((minutesElapsed % secondsInDay) / secondsInHour)
        const minutes = Math.floor((minutesElapsed % secondsInHour) / secondsInMinute)
        const seconds = Math.floor(minutesElapsed % secondsInMinute)

        if (days > 0) {
            return `${days}D:${hours}H:${minutes}M`
        } if (hours > 0) {
            return `${hours}H:${minutes}M:${seconds}S`
        }
        return `${minutes}M:${seconds}S`
    }

    const [nowTime, setNowTime] = useState(moment())

    useEffect(() => {
        const interval = setInterval(() => {
            setNowTime(moment())
        }, 1000)

        return () => clearInterval(interval)
    }, [setNowTime])

    useEffect(() => {
        const diffInMinutes = nowTime.diff(formattedTime, 'seconds')
        if (diffInMinutes >= 105 * 60) {
            setIsStopped(true)
            setMinutesElapsed(diffInMinutes)
        } else if (diffInMinutes < 0) {
            setIsStarted(true)
            setMinutesElapsed(diffInMinutes)
        } else {
            if (diffInMinutes <= 45 * 60) {
                setIsJeonban(true)
                setIsHarfTime(false)
                setIsHuban(false)
            } else if (45 * 60 < diffInMinutes && diffInMinutes < 60 * 60) {
                setIsHarfTime(true)
                setIsJeonban(false)
                setIsHuban(false)
            } else {
                setIsHuban(true)
                setIsJeonban(false)
                setIsHarfTime(false)
            }
            setMinutesElapsed(diffInMinutes)
        }
    }, [nowTime, formattedTime, setMinutesElapsed, setIsStopped, setIsStarted, setIsJeonban, setIsHarfTime, setIsHuban])

    let statusMessage

    if (isStopped) {
        statusMessage = <div>종료</div>
    } else if (isStarted) {
    // statusMessage = <div>예정{minutesElapsed}</div>;
        statusMessage = (
            <div>
                <div className={cx('timer')}>
                    {' '}
                    {formatTime(minutesElapsed)}
                </div>
            </div>
        )
    } else if (isJeonban) {
        const secondsInHour = 3600 // 60 * 60
        const secondsInMinute = 60

        const minutes = Math.floor((minutesElapsed % secondsInHour) / secondsInMinute)
        const seconds = Math.floor(minutesElapsed % secondsInMinute)

        // statusMessage = <div>전반{minutesElapsed}</div>;
        statusMessage = (
            <div>
        전반
                {minutes}
        :
                {seconds}
            </div>
        )
    } else if (isHarfTime) {
        statusMessage = <div>하프타임</div>
    } else if (isHuban) {
        const secondsInHour = 3600// 60 * 60
        const secondsInMinute = 60
        const convertedMinutesElapsed = minutesElapsed - 3600 // 전체 시간에서 전반+하프타임 시간 제외한 시간을 초로 환산한 것.

        const minutes = Math.floor((convertedMinutesElapsed % secondsInHour) / secondsInMinute)
        const seconds = Math.floor(convertedMinutesElapsed % secondsInMinute)
        // statusMessage = <div>후반{minutesElapsed-60}</div>;
        statusMessage = (
            <div>
        후반
                {minutes}
        :
                {seconds}
            </div>
        )
    }

    return (

        <div className={cx('outerTag')}>
            <div className={cx('leftbox')}>
                <div className={cx('firstline')}>
                    <div className={cx('home-div')}>
                        <img className={cx('team-logo')} src={it.home_photourl} alt="" />
                        <p className={cx('home')}>{it.HOME}</p>
                        {higherScoreTag}

                    </div>

                    <div className={cx('stadium')}>
                        <div className={cx('stadium-text')}>
                            <img src={`${apiUrl}/etc?filename=stadium`} alt="경기장" />
                            {it.STADIUM}
                        </div>
                        <div className={cx('playdate')}>{formattedTime}</div>
                    </div>
                    <div className={cx('away-div')}>
                        {lowerScoreTag}
                        <p className={cx('away')}>{it.AWAY}</p>
                        <img className={cx('team-logo')} src={it.away_photourl} alt="" />
                    </div>
                </div>
            </div>
            <div className={cx('rightbox')}>
                <div className={cx('status')}>
                    {statusText}
                    {statusMessage}
                    {/* <Counter/> */}
                    {/* {diffInMinutes} */}
                </div>
            </div>
        </div>
    )
}

export default InsideSchedule
