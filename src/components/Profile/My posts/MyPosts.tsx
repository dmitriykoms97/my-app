import React, {Component} from 'react';
import {postPageType, postsType} from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from './Post/Post';

type myPostPropsType = {
    state: postPageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const MyPosts = (props: myPostPropsType) => {

    let postElements = props.state.postsData.map((p: postsType) => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if(newPostElement.current) {
            let text = newPostElement.current?.value;
            props.addPost();
        }
    }

    const onPostChange = () => {
        if(newPostElement.current) {
            let text = newPostElement.current?.value;
            props.updateNewPostText(text);
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
