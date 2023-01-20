import router from 'next/router'
import { useState } from 'react'
import { PostContentArea, PostInfo } from './Post.style'
import PostConfirmModal from './PostConfirmModal'

const PostContent = (props) => {
    const { data, idx } = props
    const [confirmModal, setConfirmModal] = useState(false)
    const clickCheck = () => setConfirmModal(!confirmModal)
    return (
        <PostContentArea>
            <PostInfo>
                <div>{data.title}</div>
                <div>
                    <div>
                        <div>{data.nickname}</div>
                        <div>{data.created_at}</div>
                    </div>
                    <div>
                        <div onClick={() => {
                            router.push(`/community/modify/${idx}`)
                        }}>수정</div>
                        <div onClick={clickCheck}>삭제</div>
                        {confirmModal ? <PostConfirmModal idx={idx} confirmModal={confirmModal} clickCheck={clickCheck} /> : null}
                    </div>
                </div>
            </PostInfo>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </PostContentArea>
    )
}

export default PostContent
