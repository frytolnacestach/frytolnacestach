export const useAccountData = () => {
    const accountData = useState('accountData', () => [])

    const setAccountData = (newAccountData: Object<[]>) => {
        accountData.value = newAccountData
    }

    return {
        accountData,
        setAccountData
    }
}