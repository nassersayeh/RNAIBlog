import { View , Text, ScrollView } from "react-native";
import React, { useState } from "react";
import {  useLocalSearchParams } from "expo-router";
import { getAllPosts, getPost } from "../reposotiroy/postRepo";
import Markdown from 'react-native-markdown-display';

export  function generateStaticParams(): Promise<Record<string, string>[]> {
    const posts =  getAllPosts()
    // Return an array of params to generate static HTML files for.
    // Each entry in the array will be a new page.
    return posts.map(post => ({ slug: post.slug }));
  }


const PostDetailsPage = ()=>{
    const {slug} = useLocalSearchParams()
    const [post,setPost] = useState(getPost(slug))
    if(!post){
        return <Text>Post not Found</Text>
    }

    return (
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
            <Markdown>
            {post.content}
          </Markdown>
        </ScrollView>
    )
}

export default PostDetailsPage