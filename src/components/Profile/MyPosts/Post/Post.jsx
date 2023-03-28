import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img src='https://icons8.ru/icon/33872/профиль-кошки' alt="post " />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post