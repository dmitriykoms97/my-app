import React, {Component} from 'react';
import {postPageType, postsType} from '../../../../redux/state';
import s from './Post.module.css'


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