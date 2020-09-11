import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layouts';
import PostPreview from '../components/post-preview'
import Hero from '../components/hero';
import usePost from '../hooks/use-post';
import Insta from '../components/insta';

export default () =>{ 
    const posts = usePost();
    
    return (
        <>
            <Hero />
            <Layout>
                <h2>Read my blog</h2>
                {posts.map(post => (
                    <PostPreview key={post.slug} post={post} />
                ))}
                <Insta />
            </Layout>
        </>
);}