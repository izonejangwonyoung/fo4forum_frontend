import Convertdivision from '../data/division.json'
import React, { useState } from 'react'
import ConvertMatchType from '../data/matchType.json'
import styles from './css/ShowUserData.module.scss'
import classNames from 'classnames/bind'
import ShowMatchHistory from './ShowMatchHistory'
const cx = classNames.bind(styles)
function ShowUserData (props) {
    console.log(props.dete)
    const { data, dete, matchdatadetail, useraccessId } = props
    // const [ee,setEe]=useState([])
    // console.log(props.dete[0].division)

    if (props.data) {
        return (

            <div className={cx('user-information')}>
                <section className={cx('profile')}>
                    <header className={cx('header')}>
                        <div className={cx('details')}>
                            <img
                                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=b38c22a46932485790a3f52c61fcbe5a"
                                alt="John Doe" className={cx('profile-pic')}/>
                            <h1 className={cx('heading')}>{data.nickname}</h1>
                            <div className={cx('stats')}>
                                <div className={cx('col-4')}>
                                    <h4>{data.level}</h4>
                                    <p>Level</p>
                                </div>
                                {dete.map((it, index) => {
                                    const ex = Convertdivision.find((item) => item.divisionId === it.division)
                                    const fx = ConvertMatchType.find((item) => item.matchtype === it.matchType)
                                    console.log('ex', ex)
                                    console.log(it)
                                    return (
                                        <div key={index} className={cx('col-4')}>
                                            <h4>{ex ? ex.divisionName : ''}</h4>
                                            <p>{fx ? fx.desc : ''}</p>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        <div>
                            {/* <ShowMatchHistory useraccessId={useraccessId} matchdatadetail={matchdatadetail}/> */}
                        </div>
                    </header>

                </section>
            </div>

        )
    }
}

export default ShowUserData
