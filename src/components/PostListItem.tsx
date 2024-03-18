import { View, Text } from 'react-native'
import React from 'react'
import { Post } from '../types/post'
import { Link } from 'expo-router'

const PostListItem = ({post}: {post: Post}) => {
  return (
    <View style={{
        flexDirection:"row",
        alignItems: "center",
    }}>
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginVertical: 8,
        }}>

      <Link href={`/${post.slug}`} style={{
        fontSize:16,
        fontWeight:'800',
        
    }}>{
          post.title}
        
        </Link>
        </View>
    </View>
  )
}

export default PostListItem