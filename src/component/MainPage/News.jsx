import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './css/news.module.scss'
import classNames from 'classnames/bind'
import axiosInsatance from '../Instance'
const cx = classNames.bind(styles)
function News () {
    const [data, setData] = useState([])
    useEffect(() => {
        axiosInsatance.get('/news', {
            // params: {date: formattedDate, nextdate: formattedNextDate}
        }
        ).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }, [])

    return (

        <>
            {
                data && data.length
                    ? (
                        data.map((it, index) => (
                            <p key={index} className={cx('ptag')}><a href={it.URL} onClick={(e) => { e.preventDefault(); window.location.href = it.URL }}>{it.TITLE} - [{it.DATE}]</a></p>
                        ))
                    )
                    : '뉴스가 존재하지 않습니다.'
            }

        </>

    )
}

export default News
