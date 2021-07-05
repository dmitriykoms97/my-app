import React, {Component} from 'react';
import {
    ActionsTypes,
    addPostActionCreator,
    postPageType,
    postsType,
    updateNewPostTextActionCreator
} from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from './Post/Post';

type myPostPropsType = {
    state: postPageType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}



const MyPosts = (props: myPostPropsType) => {

    let postElements = props.state.postsData.map((p: postsType) => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if(newPostElement.current) {
            let text = newPostElement.current?.value;
            props.dispatch(addPostActionCreator());
        }
    }

    const onPostChange = () => {
        if(newPostElement.current) {
            let text = newPostElement.current?.value;
            props.dispatch(updateNewPostTextActionCreator(text));
        }
    }

    return <div>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}

export default MyPosts;
