import { useState } from 'react'

// 입력된 문자열을 반점 기준으로 분리하여 배열로 반환하는 함수
function splitString (str) {
    return str.split(',')
}

// 문자열을 입력받아 처리하는 이벤트 핸들러

// 컴포넌트 내부에서 useState 훅을 사용하여 문자열을 저장하는 예시 코드
function ShowTraits (props) {
    const [stringArray, setStringArray] = useState([])

    function handleInput (str) {
        const arr = splitString(str)
        setStringArray(arr)
    }

    // props로 전달된 문자열을 처리하는 이벤트 핸들러
    handleInput(props.data)

    return (
        <div>
            <ul>
                {stringArray.map((str, index) => (
                    <li key={index}>{str}</li>
                ))}
            </ul>
        </div>
    )
}
export default ShowTraits
