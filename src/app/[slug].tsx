import { View , Text } from "react-native";
import React, { useState } from "react";
import {  useLocalSearchParams } from "expo-router";
import { getPost } from "../reposotiroy/postRepo";

const PostDetailsPage = ()=>{
    const {slug} = useLocalSearchParams()
    const [post,setPost] = useState(getPost(slug))
    if(!post){
        return <Text>Post not Found</Text>
    }

    return (
        <View>
            <Text>{post.title}</Text>
        </View>
    )
}

export default PostDetailsPage