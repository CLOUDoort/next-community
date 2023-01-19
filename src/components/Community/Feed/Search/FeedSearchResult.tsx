import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import useGetFeedSearchData from '../../../../apis/CommunityData/FeedSearchData'
import { RootState } from '../../../../store/store'
import { FeedContainer } from '../Feed.style'
import FeedPagination from '../FeedPagination'
import FeedRemote from '../FeedRemote'
import FeedSearchList from './FeedSearchList'

const FeedSearchResult = () => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const router = useRouter()
    const { type, search, page } = router.query
    const { data } = useGetFeedSearchData(type, search, page)
    const [currentPage, setPageValue] = useState(1)
    const clickWrite = () => {
        if (accessToken) router.push('/community/write')
        else toast.error('로그인이 필요합니다!')
    }

    return (
        <FeedContainer>
            <p>검색 : {search}</p>
            <FeedSearchList searchList={data?.data.searchResult.responseContents} />
            <FeedRemote clickWrite={clickWrite} />
            <FeedPagination currentPage={currentPage} setCurrentPage={setPageValue} maxPage={data?.data?.searchResult?.totalPage} />
        </FeedContainer>
    )
}

export default FeedSearchResult
