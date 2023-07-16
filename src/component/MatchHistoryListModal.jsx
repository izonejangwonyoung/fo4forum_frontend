import React, { useEffect, useState } from 'react'
import ShowMatchDetailTableP1 from './UserSearch/ShowMatchDetailTableP1'
import ShowMatchDetailTableP2 from './UserSearch/ShowMatchDetailTableP2'
import styles from './css/ShowMatchHistory.module.scss'

import classNames from 'classnames/bind'
import ShowMatchDetailInfo from './UserSearch/ShowMatchDetailInfo'
const cx = classNames.bind(styles)
const MatchHistoryListModal = (props) => {
    // Use useEffect to add an event listener to the document
    const { data, index, selectedMatch, toggleModal, it } = props
    console.log(selectedMatch)
    console.log('modal 내에 info가 전달되는지 체크하는 중입니다.', it)
    useEffect(() => {
        function onKeyDown (event) {
            if (event.keyCode === 27) {
                // Close the modal when the Escape key is pressed
                toggleModal()
            }
        }

        // Prevent scolling
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', onKeyDown)

        // Clear things up when unmounting this component
        return () => {
            document.body.style.overflow = 'visible'
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [toggleModal])
    return (
        <div className={cx('modal__backdrop')}>
            <div className={cx('modal__container')}>
                <h3 className={cx('modal__title')}>Match Detail</h3>
                <div className={cx('table_wrapper')}>
                    <div className={cx('table_1')}>
                        <ShowMatchDetailTableP1 matchInfo={it.matchInfo}/>
                    </div>
                    <div className={cx('info_container')}>
                        <ShowMatchDetailInfo matchInfo={it.matchInfo}/>
                    </div>
                    <div className={cx('table_2')}>
                        <ShowMatchDetailTableP2 matchInfo={it.matchInfo}/>
                    </div>
                </div>
                <button className={cx('button')} type="button" onClick={toggleModal}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default MatchHistoryListModal
