import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalDialog } from 'react-bootstrap'
import './UserSearch/test.css'
import Loader from 'react-spinners/RotateLoader'
import { css } from '@emotion/react'
const override = css`
    display: block;
    margin: 0 auto;
`
const LoadingModal = (props) => {
    const [loading, setLoading] = useState(true)
    const [color, setColor] = useState('#19DBB4')

    return (
        <>
            <Modal
                {...props}
                centered
                show={props.show}
                // onHide={() => props.setShow(false)}
                dialogClassName="loading-container"
                // style={{ backgroundColor: 'rgba(30,30,30,0.5)' }}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}

            >
                <Modal.Body style={{ display: 'none' }}></Modal.Body>
                <div className="overlay-box" width="100%">
                    <Loader
                        color={color}
                        loading={props.show}
                        css={override}
                        size={15}
                        // height={400}
                        // width={100}
                        // radius={10}
                        // margin={20}
                        speedMultiplier={0.4}
                    />
                </div>

            </Modal>
        </>
    )
}

export default LoadingModal
