import React, {ChangeEvent, RefObject} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {postsType} from "../../../redux/profile-reducer";


type myPostPropsType = {
    addPost: () => void
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
    posts: Array<postsType>
    newPostText: string
}


const MyPosts = (props: myPostPropsType) => {

    let postElements = props.posts.map((p: postsType) => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

    return <div>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={props.updateNewPostText}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={props.addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}

export default MyPosts;
