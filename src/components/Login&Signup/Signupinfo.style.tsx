import styled from '@emotion/styled'

export const SignupInfoContainer = styled.div`
    height: 1100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 1px 2px 6px rgba(255, 255, 255, 0.5);
    margin: 20px;
`

export const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    height: 70px;
`

export const UserProfile = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
        background-color: white;
    }
`

export const UserInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-left: 20px;
    > label {
        width: 200px;
        display: inline-block;
        padding: 8px;
        background-color: #3b3939;
        color: white;
        cursor: pointer;
        font-size: 20px;
    }
    > input {
        width: 400px;
        border: none;
        font-size: 20px;
        padding: 10px;
        background-color: #3b3939;
        margin-bottom: 20px;
    }
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    > div {
        display: inline-block;
        text-align: start;
    }
    > input {
        width: 600px;
        font-size: 20px;
        padding: 8px 16px;
        background-color: black;
        border: none;
        margin-bottom: 10px;
        color: white;
        margin: auto;
    }
`
export const UserSex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    > button {
        border: none;
        color: white;
        background-color: black;
        padding: 8px 12px;
        font-size: 20px;
        width: 300px;
    }
`

export const CurrentStatusDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    position: relative;
`

export const CurrentTextDiv = styled.div`
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 15px;
    position: absolute;
    z-index: 100;
`
export const HorizontalRule = styled.div`
    width: 600px;
    position: relative;
    margin-top: 420px;
`

export const CircleBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    position: absolute;
`
export const StatusCircleDiv = styled.div`
    background-color: #3434f2;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 25px;
`
export const CircleDiv = styled.div`
    background-color: white;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    border-radius: 25px;
`

export const ProgressBtn = styled.button`
    width: 300px;
    border: none;
    background-color: gray;
    font-size: 15px;
    padding: 10px;
    margin-bottom: 30px;
    :hover {
        background-color: white;
    }
`
