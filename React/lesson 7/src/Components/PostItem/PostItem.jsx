import React, { useState } from 'react'
import { deletePost, editPost } from '../../store/features/post/postSlice'
import { useDispatch } from 'react-redux';

const PostItem = ({ post, setValue, value }) => {
    const [isEdit, setIsEdit] = useState(false)

    const dispatch = useDispatch();

    const handleDelete = (postId) => {
        dispatch(deletePost(postId))
    }


    const handleEdit = (postName) =>{ 
        setValue(postName)

        setIsEdit(!isEdit)
    }

    const handleEditSave = (postId) =>{ 
        dispatch(editPost({
            id: postId,
            name: value
        }))

        setIsEdit(!isEdit)
        setValue("")
    }


    return (
        <li >
            {post.name}
            <button onClick={() => handleDelete(post.id)}>Remove</button>
            <button onClick={() => isEdit ? handleEditSave(post.id) : handleEdit(post.name)}>{isEdit ? "Save" : "Edit"}</button>
        </li>
    )
}

export default PostItem