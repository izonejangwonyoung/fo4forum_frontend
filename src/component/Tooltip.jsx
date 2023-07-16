import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import styles from './css/Tooltip.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
const cx = classNames.bind(styles)
function TraitsOverlay (props) {
    const { it } = props
    const [trait, setTrait] = useState('')
    const apiUrl = process.env.REACT_APP_API_URL
    useEffect(() => {
        if (it === '아웃 사이드 슈팅크로스') { setTrait('아웃사이드 슈팅/크로스') } else setTrait(it)
    }, [it])

    return (
        <div className={cx('tooltip-container')}>
            <img
                src={`${apiUrl}/searchTrait?filename=` + props.it}
                alt=""
                onLoad={() => console.log('성공')}
                onError={() => console.log('실패')}
            />
            <div className={cx('tooltip-text')}>
                {trait}
            </div>
        </div>
    )
}
export default TraitsOverlay
