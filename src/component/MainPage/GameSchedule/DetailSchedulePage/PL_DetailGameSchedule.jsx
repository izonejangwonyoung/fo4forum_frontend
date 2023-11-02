
import styles from './css/PL_DetailGameSchedule.module.scss'
import classNames from 'classnames/bind'
import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import axiosInstance from '../../../Instance'
const cx = classNames.bind(styles)
const apiKey = process.env.REACT_APP_FOOTBALL_DATA_ORG_TOKEN

function PL_DetailGameSchedule () {
    const [selectYear, setSelectYear] = useState()
    const [selectMonth, setSelectMonth] = useState()
    const [selectLeague, setSelectLeague] = useState()
    const [data, setData] = useState()
    const handleYearValue = (e) => {
        setSelectYear(e.target.value)
    }
    const handleMonthValue = (e) => {
        setSelectMonth(e.target.value)
    }
    const handleLeagueValue = (e) => {
        setSelectLeague(e.target.value)
    }
    const groupMatchesByTime = (matches) => {
        const groupedMatches = []

        // Sort matches by time
        const sortedMatches = [...matches].sort((a, b) => {
            return a.TIME.localeCompare(b.TIME)
        })

        let currentTime = null
        let currentGroup = []

        for (let i = 0; i < sortedMatches.length; i++) {
            const match = sortedMatches[i]

            // Check if the current match belongs to the same time group
            if (match.TIME === currentTime) {
                currentGroup.push(match)
            } else {
                // Start a new time group
                if (currentGroup.length > 0) {
                    groupedMatches.push(currentGroup)
                }
                currentTime = match.TIME
                currentGroup = [match]
            }
        }

        // Add the last time group
        if (currentGroup.length > 0) {
            groupedMatches.push(currentGroup)
        }

        return groupedMatches
    }
    useEffect(() => {
        axiosInstance.get(`/${selectLeague}/matchSchedule/all`, {
            params: { year: selectYear, month: selectMonth }
        }).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }, [selectYear, selectMonth, selectLeague])
    /// football-data.org api 테스트
    useEffect(() => {
        const config = {
            headers: {
                'X-Auth-Token': apiKey
            },
            params: {
                season: selectYear
            }
        }

        axios.get(`https://api.football-data.org/v4/competitions/${selectLeague}/standings`, config)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [selectLeague, selectYear])

    return (
        <div className={cx('container')}>
            <div className={cx('selectbox_div')}>
                <div className={cx('selectbox_container')}>
                    <select className={cx('selectbox_league')} name="test" id="" onChange={handleLeagueValue}>
                        <option disabled={true} selected={true} >League</option>
                        <option value="PL">프리미어리그</option>
                        <option value="LL">라리가</option>
                        {/* <option value="KL">K리그</option> */}
                    </select>
                </div>
                <div className={cx('selectbox_container')}>
                    <select className={cx('selectbox_year')} name="test" id="" onChange={handleYearValue}>
                        <option disabled={true} selected={true}>Year</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>
                <div className={cx('selectbox_container')}>
                    <select className={cx('selectbox_month')} name="test" id="" onChange={handleMonthValue}>
                        <option disabled={true} selected={true} >Month</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
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
                            groupMatchesByTime(data).map((group, index) => (
                                <Fragment key={index}>
                                    <tr className={cx('table_group_row')} >
                                        <td colSpan="7" className={cx('table_time')}>{group[0].TIME}</td>
                                    </tr>
                                    {group.map((match, matchIndex) => (
                                        <tr key={matchIndex} className={cx('table_group_row_main')}>
                                            <td className={cx('table_team_logo_td_home')}><img src={match.home_photourl} className={cx('table_team_logo')} alt=""/></td>
                                            <td>{match.HOME} </td>
                                            <td>{match.HOMESCORE > match.AWAYSCORE ? <b>{match.HOMESCORE}</b> : match.HOMESCORE}</td>
                                            <td>{match.STADIUM}</td>
                                            <td>{match.AWAYSCORE > match.HOMESCORE ? <b>{match.AWAYSCORE}</b> : match.AWAYSCORE}</td>
                                            <td>{match.AWAY}</td>
                                            <td className={cx('table_team_logo_td_away')}><img src={match.away_photourl} className={cx('table_team_logo')} alt=""/></td>
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
