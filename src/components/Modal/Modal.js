import React, { useState,useEffect } from 'react';
import Api from '../../api/Api';
import Service from '../../service/service';
import './Modal.css';

const Modal = ({ onShow, username, edit, upDatePost }) => {
  const [post, setPost] = useState({ title: "", description: "" });

  useEffect(()=>{
    edit ? setPost(edit) : setPost({
      title: '',
      description: ''
    })
  },[edit])

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value })
  }
  
  const addPost = (post) => {
    const newPost = {
      author: username,
      description: post.description,
      personId: Service.get("user"),
      title: post.title
    }

    if (post.title && post.description) {
      Api.posts.set(newPost)
        .then(res => {
          if (res.ok) {
            onShow()
          }
          else {
            throw new Error();
          }
          return res.json()
        })
        .catch(() => {
          alert("Invalid data");
        })
    }
    else {
      alert("Please fill in the required fields:");
    }
  }

  return (
    <div className="moda" tabIndex="-1" role="dialog" style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',background: 'rgba(0,0,0, .5)', zIndex: '1'}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{username}</h5>
            <button onClick={onShow} type="button" className="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Titile</p>
            <input value={post.title} name="title" onChange={onHandleChange} style={{width: '100%'}}></input>
            <p>Description</p>
            <textarea value={post.description} className="w-100" name="description" onChange={onHandleChange}></textarea>
          </div>
          <div className="modal-footer">
            {/* <button onClick={onShow} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
            {edit ? <button className="btn btn-dark" onClick={() => upDatePost(post)}>Edit</button> : <button onClick={() => addPost(post)} type="button" className="btn btn-primary">Save changes</button>}
          </div>
        </div>
      </div>
    </div>
  )

}

export default Modal