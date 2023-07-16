import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowRadarGraphShoot from './UserSearch/Graph/ShowRadarGraphShoot'
import InsideAccordian from './UserSearch/InsideAccordian'
import styles from './css/ShowMatchHistory.module.scss'
import classNames from 'classnames/bind'
import ModalBasic from './ModalBasic'
import ShowMatchDetailTableP1 from './UserSearch/ShowMatchDetailTableP1'
import ShowMatchDetailTableP2 from './UserSearch/ShowMatchDetailTableP2'
import MatchHistoryList from './MatchHistoryList'
const cx = classNames.bind(styles)
function ShowMatchHistory (props) {
    const { useraccessId, searchMatchData, matchdatadetail } = props
    console.log('데이터 마이그 확인', matchdatadetail)
    const [isModalOpen, setModalIsOpen] = useState(false)
    const [selectedMatch, setSelectedMatch] = useState()

    const toggleModal = (it) => {
        setSelectedMatch(it)
        setModalIsOpen(!isModalOpen)
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
    // 모달창 노출
    return (
        <div style={{ width: '100%' }}>
            <div className={cx('container')}>
                {matchdatadetail && matchdatadetail.map((it, index) => {
                    matchdatadetail.sort((a, b) => new Date(b.matchDate) - new Date(a.matchDate))
                    console.log('here', it)
                    return (
                        <>
                            <div className={cx('list-item')} >
                                {/* {it.matchInfo && it.matchInfo.map((info, index) => ( */}
                                {/*    <MatchHistoryList info={info} selectedMatch={selectedMatch} /> */}
                                {/* ))} */}
                                <MatchHistoryList it={it} />
                            </div>
                        </>
                    )
                }
                )
                }

            </div>

        </div>

    )
}

export default ShowMatchHistory
