import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment-timezone'
import styles from '../css/KL_GameSchedule.module.scss'
import classNames from 'classnames/bind'
import axiosInstance from '../../Instance'
import InsideSchedule from './InsideSchedule'
const cx = classNames.bind(styles)

function KL_GameSchedule () {
    const [data, setData] = useState([])
    const date = new Date()
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const nextDate = new Date(date.getTime() + 24 * 60 * 60 * 1000) // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const apiUrl = process.env.REACT_APP_API_URL
    const Nextyear = nextDate.getFullYear()
    const Nextmonth = (nextDate.getMonth() + 1).toString().padStart(2, '0')
    const Nextday = nextDate.getDate().toString().padStart(2, '0')
    const [newstatusText, setnewStatusText] = useState('')

    const formattedNextDate = `${Nextyear}-${Nextmonth}-${Nextday}`
    const formattedDate = `${year}-${month}-${day}`
    console.log(formattedNextDate)
    console.log(formattedDate)
    useEffect(() => {
        axiosInstance.get('/KL/matchSchedule', {
            // params: {date: formattedDate, nextdate: formattedNextDate}
        }
        ).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }, [])

    // return (
    //     <div>
    //         {
    //             data && data.length ? (
    //                 data.map((it, index) => {
    //                     const timeZone = 'Asia/Seoul'
    //                     const nowTime = moment.utc().tz(timeZone)
    //                     const localTime = moment.utc(it.TIME).tz(timeZone)
    //                     const formattedTime = localTime.format('YYYY-MM-DD HH:mm')
    //                     const diffInMinutes = nowTime.diff(formattedTime, 'minutes') // 현재 시간과 데이터에 저장된 시간의 차이(분 단위)
    //                     // console.log(localTime, '현재 시간입니다.')
    //                     // console.log('차이:', diffInMinutes)
    //                     let statusText = '' // 경기 상태를 나타내는 문자열
    //                     const statusImgUrl = '' // 경기 상태를 나타내는 문자열
    //                     if (diffInMinutes >= 105) {
    //                         statusText = '종료'
    //                     } else if (diffInMinutes < 0) {
    //                         statusText = '예정'
    //                     } else {
    //                         // let currentgametime;
    //                         if (diffInMinutes <= 45) {
    //                             statusText = `진행중 전반${diffInMinutes}`
    //                             setnewStatusText(statusText)
    //                         } else if (diffInMinutes > 45 < 60) {
    //                             statusText = '하프타임'
    //                             setnewStatusText(statusText)
    //                         } else {
    //                             statusText = `진행중 후반${diffInMinutes}`
    //                             setnewStatusText(statusText)
    //                         }
    //                     }
    //
    //                     const homescore = it.HOMESCORE
    //                     const awayscore = it.AWAYSCORE
    //                     let higherScoreTag, lowerScoreTag
    //
    //                     if (homescore > awayscore) {
    //                         higherScoreTag = <p className={cx('homescore')} style={{ color: 'red' }}>
    //                             {homescore}
    //                         </p>
    //                         lowerScoreTag = <p className={cx('awayscore')}>{awayscore}</p>
    //                     } else if (homescore === awayscore) {
    //                         higherScoreTag = <p className={cx('homescore')}>
    //                             {homescore}
    //                         </p>
    //                         lowerScoreTag = <p className={cx('awayscore')}>{awayscore}</p>
    //                     } else {
    //                         higherScoreTag = <p className={cx('homescore')}>
    //                             {homescore}
    //                         </p>
    //                         lowerScoreTag = <p className={cx('awayscore')} style={{ color: 'red' }}>{awayscore}</p>
    //                     }
    //
    //                     return (
    //                         <div className={cx('outerTag')}>
    //                             <div className={cx('leftbox')}>
    //                                 <div className={cx('firstline')}>
    //                                     <div className={cx('home-div')}>
    //                                         <img className={cx('team-logo')} src={it.home_photourl} alt=""/>
    //                                         <p className={cx('home')}>{it.HOME}</p>
    //                                         {higherScoreTag}
    //
    //                                     </div>
    //
    //                                     <div className={cx('stadium')}>
    //                                         <div className={cx('stadium-text')}>
    //                                             <img src={`${apiUrl}/etc?filename=stadium`} alt="경기장"/>
    //                                             {it.STADIUM}
    //                                         </div>
    //                                         <div className={cx('playdate')}>{formattedTime}</div>
    //                                     </div>
    //                                     <div className={cx('away-div')}>
    //                                         {lowerScoreTag}
    //                                         <p className={cx('away')}>{it.AWAY}</p>
    //                                         <img className={cx('team-logo')} src={it.away_photourl} alt=""/>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className={cx('rightbox')}>
    //                                 <div
    //                                     className={cx('status')}>{statusText}</div>
    //                             </div>
    //                         </div>
    //                     )
    //                 }
    //                 )
    //             )
    //                 : (
    //                     <p className={cx('outerTag')}>오늘 경기가 없습니다.</p>
    //                 )
    //         }
    //     </div>
    //
    // )
    return (
        <div>
            {
                data && data.length ? (
                    data.map((it, index) => {
                        // let HOMEPHOTOURL, AWAYPHOTOURL, HOMENAME, AWAYNAME;
                        // HOMEPHOTOURL = it.home_photourl
                        // AWAYPHOTOURL = it.away_photourl
                        // HOMENAME = it['HOME']
                        // AWAYNAME = it['AWAY']

                        const timeZone = 'Asia/Seoul'
                        const nowTime = moment.utc().tz(timeZone)
                        const localTime = moment.utc(it.TIME).tz(timeZone)
                        const formattedTime = localTime.format('YYYY-MM-DD HH:mm')
                        // const diffInMinutes = nowTime.diff(formattedTime, 'minutes'); // 현재 시간과 데이터에 저장된 시간의 차이(분 단위)
                        // console.log(localTime, '현재 시간입니다.')
                        // console.log('차이:', diffInMinutes)
                        const statusText = '' // 경기 상태를 나타내는 문자열
                        const statusImgUrl = '' // 경기 상태를 나타내는 문자열
                        // if (diffInMinutes >= 105) {
                        //     statusText = '종료';
                        // } else if (diffInMinutes < 0) {
                        //     statusText = '예정';
                        //
                        // } else {
                        //     // let currentgametime;
                        //     if (diffInMinutes <= 45) {
                        //         statusText = `진행중 전반${diffInMinutes}`;
                        //         setnewStatusText(statusText)
                        //
                        //     } else if (45 < diffInMinutes < 60) {
                        //         statusText = `하프타임`;
                        //         setnewStatusText(statusText)
                        //
                        //
                        //     } else {
                        //         statusText = `진행중 후반${diffInMinutes}`;
                        //         setnewStatusText(statusText)
                        //
                        //     }
                        // }

                        const homescore = it.HOMESCORE
                        const awayscore = it.AWAYSCORE
                        let higherScoreTag, lowerScoreTag

                        if (homescore > awayscore) {
                            higherScoreTag = <p className={cx('homescore')} style={{ color: 'red' }}>
                                {homescore}
                            </p>
                            lowerScoreTag = <p className={cx('awayscore')}>{awayscore}</p>
                        } else if (homescore === awayscore) {
                            higherScoreTag = <p className={cx('homescore')}>
                                {homescore}
                            </p>
                            lowerScoreTag = <p className={cx('awayscore')}>{awayscore}</p>
                        } else {
                            higherScoreTag = <p className={cx('homescore')}>
                                {homescore}
                            </p>
                            lowerScoreTag = <p className={cx('awayscore')} style={{ color: 'red' }}>{awayscore}</p>
                        }

                        return (
                            <InsideSchedule
                                it={it}
                                statusText={statusText}
                                formattedTime={formattedTime}
                                higherScoreTag={higherScoreTag}
                                lowerScoreTag={lowerScoreTag}
                                // diffInMinutes={diffInMinutes}
                                //                 statusText={statusText}
                                //                 formattedTime={formattedTime}
                                //                 HOMEPHOTOURL={HOMEPHOTOURL}
                                //                 AWAYPHOTOURL={AWAYPHOTOURL}
                                //                 diffInMinutes={diffInMinutes}
                                //                 awayscore={awayscore}
                                //                 homescore={homescore}
                                //                 HOME={HOMENAME}
                                //                 AWAY={AWAYNAME}
                            />
                        // <div className={cx("outerTag")}>
                        //     <div className={cx("leftbox")}>
                        //         <div className={cx("firstline")}>
                        //             <div className={cx("home-div")}>
                        //                 <img className={cx("team-logo")} src={it.home_photourl} alt=""/>
                        //                 <p className={cx("home")}>{it.HOME}</p>
                        //                 {higherScoreTag}
                        //
                        //             </div>
                        //
                        //             <div className={cx("stadium")}>
                        //                 <div className={cx("stadium-text")}>
                        //                     {it.STADIUM}
                        //                 </div>
                        //                 <div className={cx("playdate")}>{formattedTime}</div>
                        //             </div>
                        //             <div className={cx("away-div")}>
                        //                 {lowerScoreTag}
                        //                 <p className={cx("away")}>{it.AWAY}</p>
                        //                 <img className={cx("team-logo")} src={it.away_photourl} alt=""/>
                        //             </div>
                        //         </div>
                        //     </div>
                        //     <div className={cx("rightbox")}>
                        //         <div
                        //             className={cx("status")}>{statusText}</div>
                        //     </div>
                        // </div>
                        )
                    }
                    )
                )
                    : (
                        <p className={cx('outerTag')}>오늘 경기가 없습니다.</p>
                    )
            }
        </div>
    )
}

export default KL_GameSchedule
