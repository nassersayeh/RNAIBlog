import { View , Text, ScrollView , Image} from "react-native";
import React, { useState } from "react";
import {  useLocalSearchParams } from "expo-router";
import { getAllPosts, getPost } from "../reposotiroy/postRepo";
import Markdown from 'react-native-markdown-display';
import Head from 'expo-router/head';
import { ORIGIN } from "../config";

export  function generateStaticParams(): Promise<Record<string, string>[]> {
    const posts =  getAllPosts()
    // Return an array of params to generate static HTML files for.
    // Each entry in the array will be a new page.
    return posts.map(post => ({ slug: post.slug }));
  }


const PostDetailsPage = ()=>{
    const {slug} = useLocalSearchParams()
    const [post,setPost] = useState(getPost(slug.toString()))
    if(!post){
        return <Text>Post not Found</Text>
    }

    return (
        <>
        <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta property="og:image" content={`${ORIGIN}/thumbnails/${post.thumbnail}`} />
      </Head>

        <ScrollView
        style={{
            flex: 1,
            backgroundColor:"white",
        }}
        contentContainerStyle={{
            maxWidth: 960,
            width:'100%',
            marginHorizontal: "auto",
            padding:20
        }}
        >
            <Text style={{fontSize:30,marginBottom:20}}>{post.title}</Text>
            <Image source={{uri:`${ORIGIN}/thumbnails/${post.thumbnail}`}} style={{width:'100%' , aspectRatio:16/9}} alt={post.title}/>
            <Markdown>
            {post.content}
          </Markdown>
        </ScrollView>
        </>
    )
}

export default PostDetailsPage