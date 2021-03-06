import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import Header from './Header'
import {getPost, putPost, deletePost, getComments} from "../actions"
import { PostLargeDiv, CommentDiv } from './PostStyles'
import AddEditModal from './AddEditModal'

const SinglePost = props =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [currentSP, setCurrentSP] = useState()
    const [curComments, setCurComments] = useState()
    const [modalOpen, setModalOpen] = React.useState(false);
    useEffect(_ =>
        {
            dispatch(getPost(props.match.params.id))
            dispatch(getComments(props.match.params.id))
        }, [])
    useEffect(_ =>
        {
            console.log(currentSP)
            setCurrentSP(state.singlePost)
            setCurComments(state.comments)
        }, [state.singlePost, state.comments])

    return (
        <>
            <Header addPost={false} postID={props.match.params.id} setModalOpen={setModalOpen} />
            <PostLargeDiv>
                {currentSP && 
                    <>
                        <h1>{currentSP.title}</h1>
                        <h3>{currentSP.contents}</h3>
                        <p>Created at: {currentSP.created_at}</p>
                        <p>Updated at: {currentSP.updated_at}</p>
                        <p>Comments:</p>
                        {curComments && curComments.length > 0 &&
                            curComments.map(comment =>
                                <CommentDiv key={comment.id}>
                                    <p>{comment.text}</p>
                                    <p>Created at: {comment.created_at}</p>
                                    <p>Updated at:{comment.updated_at}</p>
                                </CommentDiv>
                                )
                        }
                    </>
                }
            </PostLargeDiv>
            <AddEditModal modalOpen={modalOpen} setModalOpen={setModalOpen} text="" btnText="Add Comment"/>
        </>
    )
}

export default SinglePost