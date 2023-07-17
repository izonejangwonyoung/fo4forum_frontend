import styles from './css/UpdatePage.module.scss'
import classNames from 'classnames/bind'
import Slider from 'react-slick'

const cx = classNames.bind(styles)

function PatchNote () {
    return (
        <div className={cx('changelog')}>

            <h1 id="firebase_ios_release_notes" className={cx('page-title')}>FO4FORUM PATCH NOTE</h1>

            <h2 id="_version_4130_april_13_2018"><a name="1.0.0"> Version 1.0.0 - <span className={cx('date')}>Sep 17, 2023</span></a></h2>

            <h3 id="authentication">Publish</h3>
            <ul>
                <li><span className={cx('badge', 'badge-added')}>START</span> 실서버 운영 시작</li>
            </ul>

            {/* <ul> */}
            {/*    <li><span className={cx('badge', 'badge-added')}>Confirmed</span> Resolved a crash which occurred when certain <span className={cx('quote')}>Firebase IDTokens</span> were */}
            {/*        being parsed.</li> */}
            {/* </ul> */}

            {/* <h3 id="analytics">Analytics</h3> */}

            {/* <ul> */}
            {/*    <li><span className={cx('badge', 'badge-added')}>added</span> Added a new public method <code>resetAnalyticsData</code> to clear all */}
            {/*        Analytics data as well as reset App Instance ID.</li> */}
            {/*    <li><span className={cx('badge', 'badge-changed')}>changed</span> Improved In-App Purchase report: Analytics can report accurate */}
            {/*        discounted price for introductory offer purchases.</li> */}
            {/*    <li><span className={cx('badge', 'badge-fixed')}>fixed</span> Other bug fixes.</li> */}
            {/* </ul> */}

        </div>
    )
}
export default PatchNote
