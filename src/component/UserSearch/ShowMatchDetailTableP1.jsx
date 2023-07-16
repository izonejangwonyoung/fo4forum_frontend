/// /유저 검색 내부 아코디안 내부의 선수 정보 테이블 담당 컴포넌트입니다.
import React, { useEffect, useState } from 'react'
import positionJSON from '../../data/spposition.json'
import SeasonJson from '../../data/season.json'
import spidJOSN from '../../data/spid.json'
import InsideModal from './InsideModal'
import styles from '../css/ShowMatchDetailTableP1.module.scss'
import { useDispatch } from 'react-redux'
import { setRowNumber, setTableNumber } from '../../Redux/myReducer'

import classNames from 'classnames/bind'

import { Button } from 'react-bootstrap'
import { createPortal } from 'react-dom'
import MatchHistoryListModal from '../MatchHistoryListModal'

const cx = classNames.bind(styles)
function ShowMatchDetailTableP1 (props) {
    const dispatch = useDispatch()
    const sendDataToChild = () => {
        const dataToSend = {
            tableNumber: 0,
            rowNumber: selectedRow
        }
        dispatch(setTableNumber(dataToSend.tableNumber))
        dispatch(setRowNumber(dataToSend.rowNumber))
    }
    // const [showModal, setShowModal] = useState(false)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [selectedRow, setSelectedRow] = useState(null)
    const [selectedTableNumber, setselectedTableNumber] = useState(null)
    const apiUrl = process.env.REACT_APP_API_URL
    const { matchInfo } = props
    useEffect(() => {
        console.log(selectedRow, '-> row number')
        sendDataToChild()
    }, [selectedRow])
    const handleSort = (column, sortOrder) => {
        // handle sorting logic here
    }
    const handleRowClick = (row, table) => {
        setSelectedRow(row)
        setselectedTableNumber(table)
        setShow(true)
        // sendDataToChild()
        console.log('row clicked!!!')
    }
    const closeModal = () => {
        setSelectedRow(null)
    }
    // const [isModalOpen, setIsModalOpen] = useState(false)
    // console.log('it', it)
    // const toggleModal = () => {
    //     setIsModalOpen(!isModalOpen)
    //     console.log('작동되었네요!')
    // }

    // const player1Nickname = matchInfo && matchInfo.length > 0 ? matchInfo[0].nickname : ''
    const player1Nickname = matchInfo[0].nickname
    matchInfo[0].player.sort((a, b) => b.spPosition - a.spPosition)
    // const player2Nickname = matchInfo && matchInfo.length > 1 ? matchInfo[1].nickname : ''
    // matchInfo = matchInfo[0]
    return (
        // {isModalOpen && createPortal(<MatchHistoryListModal it={it} toggleModal={toggleModal}/>, document.body)}
        // <>    <Modal show={show} onHide={handleClose}>
        <>

            {/* <Modal.Header closeButton> */}
            {/* <Modal.Title>Player Detail</Modal.Title> */}
            {/* </Modal.Header> */}
            {/* 2023-05-15 수정한 내용 */}
            {/* {selectedRow && createPortal(<InsideModal matchInfo={matchInfo} index={selectedRow} indexk={selectedTableNumber} closeModal={closeModal} />, document.body)} */}

            {/* {selectedRow && <Modal.Body><InsideModal matchInfo={matchInfo} index={selectedRow} */}
            {/*    indexk={selectedTableNumber}/></Modal.Body>} */}
            {/* <Modal.Footer> */}
            {/* <Button variant="secondary" onClick={handleClose}> */}
            {/*    Close */}
            {/* </Button> */}
            {/* <Button variant="primary" onClick={handleClose}> */}
            {/*    Save Changes */}
            {/* </Button> */}
            {/* </Modal.Footer> */}
            {/* <Modal style={{ position: 'relative', zIndex: '9999' }} show={show} onHide={handleClose}> */}
            {/*    {selectedRow && <Modal.Body><InsideModal matchInfo={matchInfo} index={selectedRow} */}
            {/*        indexk={selectedTableNumber}/></Modal.Body>} */}
            {/* </Modal> */}
            {/* <Table striped bordered hover className={cx('table')}> */}
            <div className={cx('table')}>
                <thead>
                    <tr>
                        {/* <th onClick={() => handleSort('#', 'asc')}>#</th> */}
                        <th onClick={() => handleSort('firstName', 'asc')}>시즌</th>
                        <th onClick={() => handleSort('lastName', 'asc')}>이름</th>
                        <th onClick={() => handleSort('lastName', 'asc')}>포지션</th>
                        <th onClick={() => handleSort('username', 'asc')}>강화</th>
                    </tr>
                </thead>
                <tbody>
                    <div>
                        {/* <tr> */}
                        {/*    <td colSpan={5} style={{ fontWeight: 'bold' }}>플레이어 이름: {player1Nickname}</td> */}
                        {/* </tr> */}

                    </div>

                    {matchInfo[0].player && matchInfo[0].player.map((it, indexk) => {
                    //    return (
                    // <>
                    //            it.player.map((ot, index) => {
                    //            // <tr>
                    //            //     <td colSpan={2}>Larry the Bird</td>
                    //            // </tr>
                    //            const convertPosition = positionJSON.find((position) => position.spposition === ot.spPosition);
                    //            const convertspId = spidJOSN.find((spid) => spid.id === ot.spId);
                    //            console.log(convertspId);
                    //            const firstThreeDigits = convertspId ? String(convertspId.id).substr(0, 3) : '';
                    //            console.log(firstThreeDigits);
                    //            const convertSeason = SeasonJson.find((data) => data.seasonId == firstThreeDigits);
                    //            console.log(convertSeason);
                    //            const spIdName = convertspId ? convertspId.name : '선수 정보가 없습니다. API 업데이트가 되지 않았습니다. ';
                    //            const seasonName = convertSeason ? convertSeason.className : '시즌 정보가 없습니다. API 업데이트가 되지 않았습니다. ';
                    //            const seasonImg = convertSeason ? convertSeason.seasonImg : '시즌 정보가 없습니다. API 업데이트가 되지 않았습니다. ';
                    //
                    //            return (
                    //            <tr key={index} onClick={() => handleRowClick(index + 1)}>
                    //            <td>{index + 1}</td>
                    //            <td><img src={seasonImg} alt="이미지 호출 실패. 관리자에게 문의하세요."/></td>
                    //            <td>{spIdName}</td>
                    //            <td>{convertPosition.desc}</td>
                    //            <td>{ot.spGrade}강</td>
                    //            </tr>
                    //            );
                    //        })</>);

                        const playerInfo = [player1Nickname] // player 정보 배열
                        // it.spPosition.sort((a, b) => b.spPosition - a.spPosition)
                        console.log('kekeke', matchInfo[0].player)
                        console.log('제가 찾는 놈 여기 있네요', it) /// 선수 하나하나의 정보가 들어있는 상태
                        console.log('또있ㄱ네여', it.player)
                        const convertPosition = positionJSON.find((position) => position.spposition === it.spPosition)
                        const convertspId = spidJOSN.find((spid) => spid.id === it.spId)
                        const firstThreeDigits = convertspId ? String(convertspId.id).substr(0, 3) : ''
                        const convertSeason = SeasonJson.find((data) => data.seasonId == firstThreeDigits)
                        const spIdName = convertspId ? convertspId.name : '선수 정보가 없습니다. API 업데이트가 되지 않았습니다. '
                        const seasonImg = convertSeason ? convertSeason.seasonImg : '시즌 정보가 없습니다. API 업데이트가 되지 않았습니다. '
                        const svgData = `${apiUrl}/etc/spGrade?filename=9%EA%B0%95.svg`
                        return (
                        // <Table striped bordered hover >
                        //     <thead>
                        //         <tr>
                        //             <th onClick={() => handleSort('#', 'asc')}>#</th>
                        //             <th onClick={() => handleSort('firstName', 'asc')}>시즌</th>
                        //             <th onClick={() => handleSort('lastName', 'asc')}>포지션</th>
                        //             <th onClick={() => handleSort('lastName', 'asc')}>포지션</th>
                        //             <th onClick={() => handleSort('username', 'asc')}>강화</th>
                        //         </tr>
                        //     </thead>
                        //     <tbody>
                            <>

                                {it.length == 0
                                    ? (
                                        <tr>
                                            <td colSpan={5} style={{ fontWeight: 'bold' }}>선수 정보가 없습니다. 경기가 비정상적으로 종료되었을 수도 있습니다.</td>
                                        </tr>
                                    )
                                    : null}
                                {/* {it.map((ot, index) => { */}
                                {/*   console.log('ot에는 뭐가 있지', ot) */}
                                {/*   const convertPosition = positionJSON.find((position) => position.spposition === ot.spPosition) */}
                                {/*   const convertspId = spidJOSN.find((spid) => spid.id === ot.spId) */}
                                {/*   const firstThreeDigits = convertspId ? String(convertspId.id).substr(0, 3) : '' */}
                                {/*   const convertSeason = SeasonJson.find((data) => data.seasonId == firstThreeDigits) */}
                                {/*   const spIdName = convertspId ? convertspId.name : '선수 정보가 없습니다. API 업데이트가 되지 않았습니다. ' */}
                                {/*   const seasonImg = convertSeason ? convertSeason.seasonImg : '시즌 정보가 없습니다. API 업데이트가 되지 않았습니다. ' */}
                                {/*   const svgData = `${apiUrl}/etc/spGrade?filename=9%EA%B0%95.svg` */}

                                {/*    return ( */}
                                {/*        <tr key={index} onClick={() => handleRowClick(index + 1, indexk + 1)}> */}
                                {/*            <td>{index + 1}</td> */}
                                {/*            <td><img src={seasonImg} alt="이미지 호출 실패. 관리자에게 문의하세요."/></td> */}
                                {/*            <td>{spIdName}</td> */}
                                {/*            <td>{convertPosition.desc}</td> */}
                                {/*            /!* <td>{ot.spGrade}강</td> *!/ */}
                                {/*            <td><img style={{ width: '48', height: '25px' }} */}
                                {/*                src={`${apiUrl}/etc/spGrade?filename=` + ot.spGrade} */}
                                {/*                alt="몰라시발아"/> */}
                                {/*            </td> */}
                                {/*        </tr> */}
                                {/*    ) */}
                                {/* })} */}
                                <tr key={indexk}
                                    onClick={() => handleRowClick(indexk + 1, 0)}
                                    className={cx('tr')}
                                >
                                    {/* <td className={cx('td-index')}>{indexk + 1}</td> */}
                                    <td className={cx('td-seasonimg')}><img src={seasonImg} alt="이미지 호출 실패"/></td>
                                    <td className={cx('td-name')}>{spIdName}</td>
                                    <td className={cx('td-position')}>{convertPosition.desc}</td>
                                    {/* <td>{ot.spGrade}강</td> */}
                                    <td><img className={cx('td-gradeimg')} style={{ width: '48', height: '25px' }}
                                        src={`${apiUrl}/etc/spGrade?filename=` + it.spGrade}
                                        alt="몰라시발아"/>
                                    </td>
                                </tr>
                            </>

                        )
                    })}

                    {/*    </tbody> */}
                    {/* </Table> */}

                    {/* <Modal show={show} onHide={handleClose}> */}
                    {/*    {selectedRow && <Modal.Body><InsideModal matchInfo={matchInfo} index={selectedRow} */}
                    {/*        indexk={selectedTableNumber}/></Modal.Body>} */}
                    {/* </Modal> */}

                </tbody>
                <button onClick={sendDataToChild}>test</button>
            </div>
        </>

    )
}

export default ShowMatchDetailTableP1
