import React from 'react';
import {Link} from 'react-router-dom';
import posts from '../../posts.json';
import './Landing.css';

export default props => {
    return (
        <main className='landing'>
            <img className='author-image' src='https://i.insider.com/5e32f2a324306a19834af322?width=1100&format=jpeg&auto=webp' alt='Matt Bodily'/>
            <h3>Welcome to my Dev Blog</h3>
            <p>Read on to learn about my story into web development, as well as tips for success.</p>
            <h3>My Posts</h3>
            <section className='post-list'>
                {posts.map(post => (
                    <Link key={post.id} className='post-link' to={`/post/${post.id}`}>
                        <div className='post-link-flex'>
                            <img src={post.image} alt={`${post.title}`}/>
                            <div className='post-info'>
                                <h4>{post.title}</h4>
                                <p id='description'>{post.description}</p>
                                <p>{post.date}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    )
}