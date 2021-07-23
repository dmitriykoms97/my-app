import React from 'react';
import s from './Post.module.css'
import {postsType} from "../../../../redux/profile-reducer";


const Post = (props: postsType) => {
    return <div className={s.item}>
        <img src='https://topmsg.ru/wp-content/uploads/anonymous.jpg'/>
        {props.message}
        <div>
            <span>Likes = {props.likeCount}</span>
        </div>
    </div>
}

export default Post;