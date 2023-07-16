import { useEffect, useState } from 'react'
import styles from '../css/LL_TeamRank.module.scss'
import classNames from 'classnames/bind'
import axiosInstance from '../../Instance'

const cx = classNames.bind(styles)

const KL_Team_Rank = () => {
    const apiUrl = process.env.REACT_APP_API_URL
    const [data, setData] = useState([])
    useEffect(() => {
        axiosInstance.get('/KL/TEAMRANK', {
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
                                </p>
                            </div>
                            <div className={cx('goalCount')}>
                                {it.POINTS}
                            </div>
                            <div className={cx('goalCount')}>
                                {it.LEAGUE_STATUS == 2 && <img className={cx('teamrank_img')} src={`${apiUrl}/etc?filename=CL_logo.png`} alt={'챔피언스리그 진출ㄹㄹ'}/>}
                                { it.LEAGUE_STATUS == 0 && <img className={cx('teamrank_img')} src={`${apiUrl}/etc?filename=europaleague_logo.png`} alt={'유로파 리그 진출'}/>}
                                {it.LEAGUE_STATUS == -1 && <img className={cx('teamrank_img')} src={`${apiUrl}/etc?filename=skull-head.png`} alt={'강등'}/>}
                            </div>
                        </div>
                    ))
                ) : '데이터가 존재하지 않습니다.'
            }        </div>

    )
}
export default KL_Team_Rank
