import styles from './css/MatchHistoryList.module.scss'
import classNames from 'classnames/bind'
import React, { Fragment, useEffect, useState } from 'react'
import ShowMatchDetailTableP1 from './UserSearch/ShowMatchDetailTableP1'
import ShowMatchDetailTableP2 from './UserSearch/ShowMatchDetailTableP2'
import MatchHistoryListModal from './MatchHistoryListModal'
import { createPortal } from 'react-dom'
const cx = classNames.bind(styles)

function MatchHistoryList (props) {
    // const { info, index, selectedMatch ,it} = props
    const { it, info } = props
    const [isModalOpen, setIsModalOpen] = useState(false)
    console.log('it', it)
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
        console.log('작동되었네요!')
    }
    const score_p1 = it.matchInfo[0].shoot.goalTotal
    const score_p2 = it.matchInfo[1].shoot.goalTotal

    return (
        <Fragment>
            {isModalOpen && createPortal(<MatchHistoryListModal it={it} toggleModal={toggleModal}/>, document.body)}
            <div className={cx('container')} onClick={toggleModal}>
                <div className={cx('nickname_p1')} >
                    {it.matchInfo[0].nickname}
                </div>
                <div className={cx('score_p1')} style={{ color: score_p1 > score_p2 ? 'red' : 'black' }}>
                    {it.matchInfo[0].shoot.goalTotal}
                </div>
                <div className={cx('vs')}>
                    VS
                </div>
                <div className={cx('score_p2')} style={{ color: score_p1 < score_p2 ? 'red' : 'black' }} >
                    {it.matchInfo[1].shoot.goalTotal}
                </div>
                <div className={cx('nickname_p2')}>
                    {it.matchInfo[1].nickname}
                </div>
            </div>
            {/*    /!* {isModalOpen && <MatchHistoryListModal selectedMatch={selectedMatch} toggleModal={toggleModal} />} *!/ */}
        </Fragment>
    )
}

// const ModalMain = (props) => {
//     // Use useEffect to add an event listener to the document
//     const { data, onRequestClose, it, index } = props
//     useEffect(() => {
//         function onKeyDown (event) {
//             if (event.keyCode === 27) {
//                 // Close the modal when the Escape key is pressed
//                 onRequestClose()
//             }
//         }
//
//         // Prevent scolling
//         document.body.style.overflow = 'hidden'
//         document.addEventListener('keydown', onKeyDown)
//
//         // Clear things up when unmounting this component
//         return () => {
//             document.body.style.overflow = 'visible'
//             document.removeEventListener('keydown', onKeyDown)
//         }
//     })
//     console.log()
//     return (
//         <div className={cx('modal__backdrop')}>
//             <div className={cx('modal__container')}>
//                 <h3 className={cx('modal__title')}>Match Detail</h3>
//                 {selectedMatch.matchDate}
//                 <div>
//                     <ShowMatchDetailTableP1 matchInfo={selectedMatch.matchInfo}/>
//                 </div>
//                 <div>
//                     <ShowMatchDetailTableP2 matchInfo={selectedMatch.matchInfo}/>
//                 </div>
//                 {/* <ShowMatchDetailTableP2 matchInfo={selectedMatch.matchInfo}/> */}
//                 <button className={cx('button')} type="button" onClick={onRequestClose}>
//                     Close
//                 </button>
//             </div>
//         </div>
//     )
// }

export default MatchHistoryList
