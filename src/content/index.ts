import { Post } from "../types/post";

const posts: Record<string,Post> = {
    post1: require('./post1').default,
    post2: require('./post2').default,
    policy: require('./policy').default
}

export default posts;