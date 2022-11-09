import Avatar from '@mui/material/Avatar'
import { CommentUser } from './PostComment.style'
import { useState } from 'react'
import PostCommentReply from './PostCommentReply'

const PostSingleComment = (props) => {
    const [openReply, setOpenReply] = useState(false)
    const { comment, accessToken, idx, nickname, refreshFunction } = props

    const clickReply = () => {
        setOpenReply(!openReply)
    }
    return (
        <>
            <CommentUser>
                <Avatar alt='User Image' src='/topgun.jpeg' />
                <span>이름: {nickname}</span>
                <span>내용: {comment?.comment}</span>
                <button onClick={clickReply}>Reply to</button>
            </CommentUser>
            {openReply && (
                <PostCommentReply refreshFunction={refreshFunction} reply={comment?.resposneTo} accessToken={accessToken} idx={idx} nickname={nickname} />
            )}
        </>
    )
}

export default PostSingleComment
