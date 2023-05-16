import axios from "axios";

// 숙소등록
const registration = async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/rooms/host`, data)
    console.log(response)
    return response
}


export {registration}