import Table from 'react-bootstrap/Table'
import positionJSON from '../../data/spposition.json'
import spidJOSN from '../../data/spid.json'
import SeasonJson from '../../data/season.json'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'

function ShowMatchDetailTableTest (props) {
    const {} = props
    const [showModal, setShowModal] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)
    const handleSort = (column, sortOrder) => {
        // handle sorting logic here
    }
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('#', 'asc')}>#</th>
                        <th onClick={() => handleSort('firstName', 'asc')}>시즌</th>
                        <th onClick={() => handleSort('lastName', 'asc')}>포지션</th>
                        <th onClick={() => handleSort('lastName', 'asc')}>포지션</th>
                        <th onClick={() => handleSort('username', 'asc')}>강화</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {matchInfo && matchInfo.map((it, indexk) => { */}
                    {/*    it && it.player.map((ot, index) => { */}
                    {/*        console.log(ot.spId) */}
                    {/*        return ( */}
                    {/*            <tr onClick={() => handleRowClick(index + 1)}> */}
                    {/*                <td>{index + 1}</td> */}
                    {/*                <td>{ot.spId}</td> */}
                    {/*                <td>Otto</td> */}
                    {/*                <td>@mdo</td> */}
                    {/*            </tr> */}
                    {/*        ) */}

                    {/*    }) */}
                    {/* }) */}
                    {/* } */}
                    {matchInfo && matchInfo.map((it, indexk) => {
                        return it && it.player.map((ot, index) => {
                            const convertPosition = positionJSON.find((position) => position.spposition === ot.spPosition)
                            const convertspId = spidJOSN.find((spid) => spid.id === ot.spId)
                            console.log(convertspId)
                            const firstThreeDigits = convertspId ? String(convertspId.id).substr(0, 3) : '' // 첫 3자리 숫자를 잘라내어 변수에 저장하고, convertspId가 존재하지 않는 경우 빈 문자열 할당
                            console.log(firstThreeDigits)
                            const convertSeason = SeasonJson.find((data) => data.seasonId == firstThreeDigits)
                            console.log(convertSeason)
                            const spIdName = convertspId ? convertspId.name : '선수 정보가 없습니다. API 업데이트가 되지 않았습니다. '
                            const seasonName = convertSeason ? convertSeason.className : '시즌 정보가 없습니다. API 업데이트가 되지 않았습니다. '
                            const seasonImg = convertSeason ? convertSeason.seasonImg : '시즌 정보가 없습니다. API 업데이트가 되지 않았습니다. '

                            return (
                                <tr key={index} onClick={() => handleRowClick(index + 1)}>
                                    <td>{index + 1}</td>
                                    <td><img src={seasonImg} alt="이미지 호출 실패. 관리자에게 문의하세요."/></td>
                                    <td>{spIdName}</td>
                                    <td>{convertPosition.desc}</td>
                                    <td>{ot.spGrade}강</td>
                                </tr>
                            )
                        })
                    })}

                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                {selectedRow && <Modal.Body>{`${showModal}`}</Modal.Body>}
            </Modal>
        </>
    )
}
