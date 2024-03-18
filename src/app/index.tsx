import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllPosts } from "../reposotiroy/postRepo";
import { useState } from "react";
import { Link } from "expo-router";
import PostListItem from "../components/PostListItem";

export default function Page() {
    //const posts = getAllPosts()
    const [ posts, setPosts] = useState(getAllPosts())


  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FlatList
        contentContainerStyle={{gap:50
          ,flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,}}
        data={posts}
        renderItem={({item})=> <PostListItem post={item}/>}
        />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
