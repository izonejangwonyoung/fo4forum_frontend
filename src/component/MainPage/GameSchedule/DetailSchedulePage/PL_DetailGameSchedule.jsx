
import styles from './css/PL_DetailGameSchedule.module.scss'
import classNames from 'classnames/bind'
import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import 'react-datepicker/dist/react-datepicker.css' // 스타일 시트를 가져옵니다. 스타일을 설정하려면 이 부분을 더 조정할 수 있습니다.
import DatePicker from 'react-datepicker'
import { parse, format } from 'date-fns'

const cx = classNames.bind(styles)
const apiKey = process.env.REACT_APP_FOOTBALL_DATA_ORG_TOKEN

function PL_DetailGameSchedule () {
    const [startDate, setStartDate] = useState(new Date())
    const [convertedStartDate, setConvertedStartDate] = useState(null)
    const [endDate, setEndDate] = useState()
    const [convertedEndDate, setConvertedEndDate] = useState(null)
    const [selectLeague, setSelectLeague] = useState()
    const [data, setData] = useState()

    const handleStartDate = (date) => {
        console.log(date)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        console.log(year, month, day)
        setStartDate(date)
        setConvertedStartDate(`${year}-${month}-${day}`)
        console.log(startDate)
        console.log(convertedStartDate)
    }
    const handleEndDate = (date) => {
        console.log(date)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        console.log(year, month, day)
        setEndDate(date)
        setConvertedEndDate(`${year}-${month}-${day}`)
        console.log(startDate)
        console.log(convertedStartDate)
    }
    // const handleYearValue = (e) => {
    //     setEndDate(e.target.value)
    // }
    // const handleMonthValue = (e) => {
    //     setSelectMonth(e.target.value)
    // }
    const handleLeagueValue = (e) => {
        setSelectLeague(e.target.value)
    }

    const groupMatchesByTime = (matches) => {
        const groupedMatches = []

        // Sort matches by time
        const sortedMatches = [...matches].sort((a, b) => {
            return a.utcDate.localeCompare(b.utcDate)
        })

        let currentTime = null
        let currentGroup = []

        for (let i = 0; i < sortedMatches.length; i++) {
            const match = sortedMatches[i]

            // Check if the current match belongs to the same time group
            if (match.utcDate === currentTime) {
                currentGroup.push(match)
            } else {
                // Start a new time group
                if (currentGroup.length > 0) {
                    groupedMatches.push(currentGroup)
                }
                currentTime = match.utcDate
                currentGroup = [match]
            }
        }

        // Add the last time group
        if (currentGroup.length > 0) {
            groupedMatches.push(currentGroup)
        }

        return groupedMatches
    }
    /// DB에서 스크래핑 가져오는 부분(외부 api 사용으로 인해 임시 주석 처리)
    // useEffect(() => {
    //     axiosInstance.get(`/${selectLeague}/matchSchedule/all`, {
    //         params: { year: selectYear, month: selectMonth }
    //     }).then((response) => {
    //         console.log(response.data)
    //         setData(response.data)
    //     })
    // }, [selectYear, selectMonth, selectLeague])
    /// football-data.org api 테스트
    useEffect(() => {
        const config = {
            headers: {
                'X-Auth-Token': apiKey
            },
            params: {
                // dateFrom: `${selectYear}-${selectMonth - 1}-31`,
                dateFrom: convertedStartDate,
                // dateTo: `${selectYear}-${selectMonth}-31`
                dateTo: convertedEndDate
            }
        }

        // axios.get(`https://api.football-data.org/v4/competitions/${selectLeague}/matches`, config)
        //     .then((response) => {
        //         console.log(response.data)
        //         setData(response.data)
        //     })
        //     .catch((error) => {
        //         console.error(error)
        //     })
    }, [endDate])

    return (
        <div className={cx('container')}>
            <div className={cx('selectbox_div')}>
                <div className={cx('selectbox_container')}>
                    <select className={cx('selectbox_league')} name="test" id="" onChange={handleLeagueValue}>
                        <option disabled={true} selected={true} >League</option>
                        <option value="PL">프리미어리그</option>
                        <option value="LL">라리가</option>
                    </select>
                </div>
                {/* <div className={cx('selectbox_container')}> */}
                {/*    <select className={cx('selectbox_year')} name="test" id="" onChange={handleYearValue}> */}
                {/*        <option disabled={true} selected={true}>Year</option> */}
                {/*        <option value="2021">2021</option> */}
                {/*        <option value="2022">2022</option> */}
                {/*        <option value="2023">2023</option> */}
                {/*    </select> */}
                {/* </div> */}
                {/* <div className={cx('selectbox_container')}> */}
                {/*    <select className={cx('selectbox_month')} name="test" id="" onChange={handleMonthValue}> */}
                {/*        <option disabled={true} selected={true} >Month</option> */}
                {/*        <option value="01">1</option> */}
                {/*        <option value="02">2</option> */}
                {/*        <option value="03">3</option> */}
                {/*        <option value="04">4</option> */}
                {/*        <option value="05">5</option> */}
                {/*        <option value="06">6</option> */}
                {/*        <option value="07">7</option> */}
                {/*        <option value="08">8</option> */}
                {/*        <option value="09">9</option> */}
                {/*        <option value="10">10</option> */}
                {/*        <option value="11">11</option> */}
                {/*        <option value="12">12</option> */}
                {/*    </select> */}
                {/* </div> */}
                <div>
                    <DatePicker selected={startDate} onChange={handleStartDate} dateFormat="yyyy-MM-dd" showTimeSelect={false} // 시간 선택을 비활성화
                    />
                </div>
                <div>
                        ~
                </div>
                <div>
                    <DatePicker selected={endDate} onChange={handleEndDate} showTimeInput={false}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
            </div>
            <table className={cx('table')}>
                <thead>
                    <tr className={cx('table_tr')}>
                        <th></th>
                        <th className={cx('table_th')}>
                            홈
                        </th>
                        <th className={cx('table_th')}>점수
                        </th>
                        <th className={cx('table_th')}>경기장</th>
                        <th className={cx('table_th')}>점수</th>
                        <th className={cx('table_th')}>어웨이</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className={cx('table_tbody')}>
                    {data
                        ? (
                            groupMatchesByTime(data.matches).map((group, index) => (
                                <Fragment key={index}>
                                    <tr className={cx('table_group_row')} >
                                        {/* <td colSpan="7" className={cx('table_time')}>{group[0].utcDate}</td> */}
                                        <td colSpan="7" className={cx('table_time')}>
                                            {new Date(group[0].utcDate).toLocaleString('ko-KR', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </td>
                                    </tr>
                                    {group.map((match, matchIndex) => (
                                        <tr key={matchIndex} className={cx('table_group_row_main')}>
                                            <td className={cx('table_team_logo_td_home')}><img src={match.homeTeam.crest} className={cx('table_team_logo')} alt=""/></td>
                                            <td>{match.homeTeam.name} </td>
                                            <td>{match.score.fullTime.home > match.score.fullTime.away ? <b>{match.score.fullTime.home}</b> : match.score.fullTime.home}</td>
                                            <td>{match.STADIUM}</td>
                                            <td>{match.score.fullTime.away > match.score.fullTime.home ? <b>{match.score.fullTime.away}</b> : match.score.fullTime.away}</td>
                                            <td>{match.awayTeam.name} </td>
                                            <td className={cx('table_team_logo_td_away')}><img src={match.awayTeam.crest} className={cx('table_team_logo')} alt=""/></td>
                                        </tr>
                                    ))}
                                </Fragment>
                            ))
                        )
                        : (
                            <tr>
                                <td colSpan="7">None</td>
                            </tr>
                        )}
                </tbody>

            </table>

        </div>

    )
}

export default PL_DetailGameSchedule
