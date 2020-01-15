import React from 'react';
import './BlogCard.css';

function BlogCard({ isInWorkspace, posts, removePost, formToUp }) {

    return (
        
        <div className="overflow-auto myHeight emptyBlock" style={{minHeight: '50px'}}>
            {posts.length === 0 ? 
            <div className="text-light bg-dark" style={{padding: '10px', borderRadius: '5px'}}>Empty</div> :
            posts.map((blog,i) => {
                return (
                    <div className="card mb-3" key={blog.id}>
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">{blog.description}</p>
                            {
                                isInWorkspace && 
                                <>
                                    <button onClick={() => removePost(blog.id)} className="btn btn-outline-danger mr-3">Remove</button> 
                                    <button onClick={() => formToUp(blog)} className="btn btn-outline-success">Update</button>
                                </>
                            }   
                        </div>
                    </div>
                )
            })}
        </div>
        
    )
}

export default BlogCard
