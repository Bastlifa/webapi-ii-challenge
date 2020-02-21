import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getPosts} from "../actions"
import Header from './Header'
import { PostSmallDiv, PostsFlex, TimeStampP } from './PostStyles'

const PostsList = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const [currentPosts, setCurrentPosts] = useState(state.posts)
    // const [currentComments, setCurrentComments] = useState(state.comments)

    useEffect(_ =>
        {
            dispatch(getPosts())
            console.log(state.posts)
        }, [])
    useEffect(_ =>
        {
            setCurrentPosts(state.posts)
            console.log(state)
        }, [state.posts])

    return (
        <>
            <Header addPost={true} />
            <PostsFlex>
                {currentPosts.map(post =>
                    <PostSmallDiv key={post.id} onClick={_ => props.history.push(`/post/${post.id}`)}>
                        <h3>
                            {post.title}
                        </h3>
                        <TimeStampP>
                            Created at: {post.created_at}
                        </TimeStampP>
                        <TimeStampP>
                            Updated at: {post.updated_at}
                        </TimeStampP>
                    </PostSmallDiv>)
                }
            </PostsFlex>
        </>
    )
}

export default PostsList