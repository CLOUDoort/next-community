import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setComponent, setUser } from '../../store/reducers/signupSlice'
import { RootState } from '../../store/store'
import CurrentStatusSecond from './CurrentStatus/CurrentStatusSecond'
import { EmailForm, SignupContainerDiv, SubmitInput } from './Signup_pw.style'

const Signuppw = () => {
    const signupComponent = useSelector((state: RootState) => {
        state.component.component
    })
    const userData = useSelector((state: RootState) => state.user.user)
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setPassword(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setUser({ password: password }))
        console.log(password)
        console.log(userData)
    }

    return (
        <>
            <SignupContainerDiv>
                <CurrentStatusSecond />
                <div>비밀번호 설정</div>
                <EmailForm onSubmit={handleSubmit}>
                    <div>비밀번호</div>
                    <input type='password' name='password' value={password} onChange={handleChange} placeholder='비밀번호를 입력해주세요' />
                    <div>비밀번호 확인</div>
                    <input type='password' name='pwCheck' placeholder='비밀번호를 다시 입력해주세요' />
                    <SubmitInput type='submit' value='계속하기' />
                </EmailForm>
            </SignupContainerDiv>
        </>
    )
}

export default Signuppw
