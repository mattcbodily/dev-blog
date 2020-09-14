import React, {useState, useEffect} from 'react';
import posts from '../../posts.json';

export default props => {
    let [post, setPost] = useState({});

    useEffect(() => {
        const selectedPost = posts.find(el => el.id === +props.match.params.id);
        setPost(selectedPost);
    }, [])

    return (
        <section>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title}/>
            {post.content?.map(content => {
                for(let key in content){
                    if(key.includes('image')){
                        return <img src={content[key]} alt='Blog Image'/>
                    } else {
                        return <p>{content[key]}</p>
                    }
                }
            })}
        </section>
    )
}