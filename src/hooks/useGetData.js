import baseUrl from '../Api/baseURL'

const useGetData = async (url, parmas) => {

    const res = await baseUrl.get(url, parmas);
    return res.data;
}


const useGetDataToken = async (url, parmas) => {
    const config = {
        headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2ZhMmM0ZTk4NTdhZGVhOTFiNmViNDMiLCJpYXQiOjE2ODEwMTM5MjMsImV4cCI6MTY4ODc4OTkyM30.1L5IPKutDOU9r4ACXTK9nJVFqBegn8eQ_IraUzEk4Yk' }
    }
    const res = await baseUrl.get(url, config);
    return res.data;
}

export { useGetData, useGetDataToken };