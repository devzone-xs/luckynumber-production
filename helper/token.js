export const getToken = async () => {
    const token = await JSON.parse(localStorage.getItem('jwt'))
    return await token
}

export const setToken = async (payload) => {
    localStorage.setItem('jwt', JSON.stringify(payload))
    return true
}

export const removeToken = async () => {
    localStorage.removeItem('jwt')
    return true
}