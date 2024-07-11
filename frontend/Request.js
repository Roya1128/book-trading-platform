export default function Request(){
    const req = axios.create({
        baseURL: 'http://localhost/系統開發/backend/public',
        headers: { 'Authorization': window.localStorage.getItem("jwtToken")}
    })
    return req;
}
