// import {useState} from "react";
// import axios from "axios";
//
// function Picture(props) {
//     const [responseData, setresponseData] = useState(null)
//     const [url,setUrl]=useState()
//     setresponseData(props.data)
//     console.log(responseData)
//     return (
//         <div>
//             {
//                 responseData && responseData.map((it) => {
//                     axios
//                         .get("http:///searchs", {params: {filename: it.id}, responseType: "blob"})
//                         .then((response) => {
//                             let ee = URL.createObjectURL(response.data)
//                             ee=`http:///searchs?filename=${it.id}`
//                             setUrl(ee)
//                             console.log('success  ', ee)
//
//                             // setImgSrc(null)
//                             // setImgSrc(ee)
//                             // console.log('response_data: ', response.data)
//                             if (response.data.length < 1) {
//                                 alert('해당 선수 이름이 DB에 존재하지 않습니다!')
//                             }
//                         })
//                         .catch((error) => {
//                             console.log(error);
//                         });
//
// return(
//     <div>
//         <img src={url} alt=""/>
//     </div>
// )
//                 })
//
//             }
//
//
//         </div>
//
//     )
// }
//
// export default Picture
