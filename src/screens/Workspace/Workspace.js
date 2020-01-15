import React, { useState, useEffect } from 'react';
import Api from '../../api/Api';
import Service from '../../service/service';
import BlogCard from '../../components/BlogCard/BlogCard';
import Modal from '../../components/Modal/Modal';
import './Workspace.css';

const Workspace = ({ data }) => {
    const [loggeedUser, setLoggedUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    // const [data, setData] = useState({template: ''});
    const [newPost, setNewPost] = useState({});
    // const [show, setShow] = useState(false);
    const [blogId, setBlogId] = useState()

    const removePost = (id) => {
        Api.posts.remove(id)
        setPosts(posts.filter(post => post.id !== id));
    }

    const onShow = () => {
        setShowModal(!showModal)
    }

    const formToUp = (blogId) => {
        console.log(blogId)
        setBlogId(blogId);
        onShow(true);
    }

    const upDatePost = (blog) => {
        Api.posts.edit(blog,blog.id)
            .then(res => {
                if (res.ok) {
                    res.json().then((data) => {
                        const newList = posts.map(elem => elem.id !== data.id ? elem : data)
                        setPosts(newList)
                        setBlogId(null)
                        setNewPost({
                            title: "",
                            description: ""
                        })
                    })
                }
            })
            .catch(err => console.log(err))
        onShow(false)
    }

    useEffect(() => {
        if(!loggeedUser.id) {
            Api.people.getById(Service.get("user")).then(data => setLoggedUser(data));
        }
        if(loggeedUser.id) {
            Api.posts.get().then(res => res.json()).then(data => setPosts(data.filter(post => post.personId === loggeedUser.id)));
        }
    },[loggeedUser, showModal, data])

    return (
        <div className="row">
            <div className="card">
                <div className="card-header" style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <h5 className="card-title">{loggeedUser.username}</h5>
                    <button onClick={onShow} className="btn btn-success">Add Post</button> 
                    {showModal && <Modal edit={blogId} upDatePost={upDatePost} onShow={onShow} username={loggeedUser.username}/>}
                </div>
                
                <div className="card-body">
                    <BlogCard key={posts.id} onShow={onShow} removePost={removePost} formToUp={formToUp} template={data} upDatePost={upDatePost} isInWorkspace={true} posts={posts} />
                </div>
                
            </div>
        </div>
    );
};

export default Workspace;