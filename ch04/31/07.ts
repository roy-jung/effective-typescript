interface UserInfo_3107 { name: string }
interface Post_3107 { post: string }
declare function fetchUser_3107(userId: string): Promise<UserInfo_3107>;
declare function fetchPostsForUser_3107(userId: string): Promise<Post_3107[]>;
