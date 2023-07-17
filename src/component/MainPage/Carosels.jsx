import React, { useEffect, useRef, useState } from 'react'
import styles from './css/cariosels.module.scss'
import classNames from 'classnames/bind'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

const cx = classNames.bind(styles)
const apiUrl = process.env.REACT_APP_API_URL

const UncontrolledExample = () => {
    // const images = useRef([{ src: `${apiUrl}/etc?filename=pl_logo` }, { src: `${apiUrl}/etc?filename=laliga_logo` }, { src: `${apiUrl}/etc?filename=CL_logo` }])
    // const [current, setCurrent] = useState(0)
    // const [style, setStyle] = useState({
    //     transform: `translate(-${current}00%)`
    // })
    // const imgSize = useRef(images.current.length)
    //
    // const moveSlide = (i) => {
    //     let nextIndex = current + i
    //
    //     if (nextIndex < 0) nextIndex = imgSize.current - 1
    //     else if (nextIndex >= imgSize.current) nextIndex = 0
    //
    //     setCurrent(nextIndex)
    // }
    //
    // useEffect(() => {
    //     let i = 1
    //     const intervalId = setInterval(() => {
    //         moveSlide(i)
    //         i = (i % 3) + 1
    //     }, 5000)
    //     return () => clearInterval(intervalId)
    // }, [])
    //
    // useEffect(() => {
    //     setStyle({ marginLeft: `-${current}00%` })
    // }, [current])
    //
    // return (
    //     <div className={cx('container')}>
    //         <div className={cx('slide')}>
    //             {/* <div className={cx("btn")} onClick={() => { */}
    //             {/*    moveSlide(-1); */}
    //             {/* }}>&lt;</div> */}
    //             <div className={cx('window')}>
    //                 <div className={cx('flexbox')} style={style}>
    //                     {images.current.map((img, i) => (
    //                         <div
    //                             key={i}
    //                             className={cx('img')}
    //                             style={{ backgroundImage: `url(${img.src})` }}
    //                         ></div>
    //                     ))}
    //                 </div>
    //             </div>
    //             {/* <div className={cx("btn")} onClick={() => { */}
    //             {/*    moveSlide(1); */}
    //             {/* }}>&gt;</div> */}
    //         </div>
    //         <div className={cx('btn')}>
    //             {images.current.map((x, i) => (
    //                 <div
    //                     key={i}
    //                     className={cx('dot', { current: i === current })}
    //                 ></div>
    //             ))}
    //         </div>
    //     </div>
    // )
    return (
        <div className={cx('outer_container')}>
            <Carousel className={cx('carousel')} showThumbs={false} dynamicHeight={false} autoPlay={true} showArrows={false}>
                <div className={cx('container')}>
                    <img src={`${apiUrl}/etc?filename=pl_logo`} />
                </div>
                <div className={cx('container')}>
                    <img src={`${apiUrl}/etc?filename=laliga_logo`} />
                </div>
                <div className={cx('container')}>
                    <img src={`${apiUrl}/etc?filename=CL_logo`} />
                </div>
            </Carousel>
        </div>
    )
}
export default UncontrolledExample
