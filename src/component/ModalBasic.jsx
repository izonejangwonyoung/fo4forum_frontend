import { useEffect } from 'react'
import styles from './css/ModalBasic.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
const ModalBasic = (props) => {
    // Use useEffect to add an event listener to the document
    const { onRequestClose, data } = props
    console.log('data=> ', data)
    useEffect(() => {
        function onKeyDown (event) {
            if (event.keyCode === 27) {
                // Close the modal when the Escape key is pressed
                onRequestClose()
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
    }, [onRequestClose])

    return (
        <div className={cx('modal__backdrop')}>
            <div className={cx('modal__container')}>
                <h3 className={cx('modal__title')}>Im a modal!</h3>
                <p>
                    When this modal is open, we disable scrolling the <code>body</code> using{' '}
                    <code>overflow: hidden</code>. This allows users to scroll the modal
                    without losing their position on the page.
                </p>
                <button className={cx('button')} type="button" onClick={onRequestClose}>
                    Close this modal
                </button>
            </div>
        </div>
    )
}

export default ModalBasic
