import React, { useEffect, useState } from 'react';
import BloggerCard from '../../components/BloggerCard/BloggerCard';
import BlogCard from '../../components/BlogCard/BlogCard';
import Spinner from '../../components/Spinner/Spinner';
import Api from '../../api/Api';

const Home = () => {
    const [bloggers, setBloggers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        Api.people.get().then(res => res.json()).then(data => {
            setBloggers(data);
            setLoading(false);
        })
        Api.posts.get().then(res => res.json()).then(data => setPosts(data))
    }, [])

    return (
        <div className="row">
            {loading ?
                <Spinner /> : (
                    <>
                        <div className="col-3">
                            <BloggerCard bloggers={bloggers}/>
                        </div>
                        <div className="col-9">
                            <BlogCard posts={posts}/> 
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Home;
