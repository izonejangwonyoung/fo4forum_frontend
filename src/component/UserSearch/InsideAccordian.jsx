import { Modal, Tab, Tabs } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import positionJSON from '../../data/spposition.json'
import spidJOSN from '../../data/spid.json'
import SeasonJson from '../../data/season.json'
import ShowMatchDetailStats from './ShowMatchDetailStats'
import React, { useState } from 'react'
import ShowMatchDetailTableP1 from './ShowMatchDetailTableP1'
import ShowMatchDetailTableP2 from './ShowMatchDetailTableP2'
import styles from '../css/InsideAccordian.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
function InsideAccordian (props) {
    const { matchInfo } = props

    return (
        <div className={cx('outer')}>
            <ShowMatchDetailTableP1 className={cx('table1')} matchInfo={matchInfo} />
            <ShowMatchDetailTableP2 className={cx('table2')} matchInfo={matchInfo}/>
        </div>
    )
}

export default InsideAccordian
