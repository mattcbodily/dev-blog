import React, {useState, useEffect} from 'react';
import posts from '../../posts.json';
import './Post.css';

export default props => {
    let [post, setPost] = useState({});

    useEffect(() => {
        const selectedPost = posts.find(el => el.id === +props.match.params.id);
        setPost(selectedPost);
    }, [props.match.params.id])

    return (
        <section className='post'>
            <h1>{post.title}</h1>
            <img className='main-post-img' src={post.image} alt={post.title}/>
            {post.content?.map((content, i) => {
                for(let key in content){
                    if(key.includes('image')){
                        return <img key={i} className='mid-post-img' src={content[key]} alt={content.alt}/>
                    } else if(key.includes('paragraph')){
                        return <p key={i} className='post-paragraph'>{content[key]}</p>
                    }
                }
            })}
        </section>
    )
}