import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './css/LL_GoalRanking.module.scss'
import classNames from 'classnames/bind'
import axiosInstance from '../Instance'
const cx = classNames.bind(styles)
function KL_GoalRanking () {
    const apiUrl = process.env.REACT_APP_API_URL
    const [data, setData] = useState([])
    useEffect(() => {
        axiosInstance.get('/KL/PLAYERRANK', {
            // params: {date: formattedDate, nextdate: formattedNextDate}
        }
        ).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }, [])
    return (

        <div>
            {
                data && data.length ? (
                    data.map((it, index) => (
                        <div className={cx('outerTag')}>
                            <div className={cx('main')}>
                                <p className={cx('main-ptag')}>

                                    {index >= 0 && index <= 2 ? (
                                        <img
                                            src={`${apiUrl}/etc?filename=${index + 1}-medal.png`}
                                            alt={`medal_${index}`}
                                            className={cx('medal')} // medal 클래스 추가
                                        />
                                    ) : (
                                        <div className={cx('medalPlaceholder')} /> // medalPlaceholder 클래스 추가
                                    )}
                                    <img style={{ width: '24px', height: '24px' }} src={it.PHOTOURL} alt={it.TEAM}/>

                                    {it.NAME}
                                    {/* ({it.TEAM}) */}
                                </p>
                            </div>
                            <div className={cx('goalCount')}>
                                {it.GOAL}
                            </div>

                        </div>
                    ))
                ) : '데이터가 존재하지 않습니다.'
            }        </div>
    )
}
export default KL_GoalRanking
