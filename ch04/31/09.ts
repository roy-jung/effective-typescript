interface UserInfo_3109 { name: string }
interface Post_3109 { post: string }
declare function fetchUser_3109(userId: string): Promise<UserInfo_3109>;
declare function fetchPostsForUser_3109(userId: string): Promise<Post_3109[]>;
class UserPosts_3109 {
  user: UserInfo_3109;
  posts: Post_3109[];

  constructor(user: UserInfo_3109, posts: Post_3109[]) {
    this.user = user;
    this.posts = posts;
  }

  static async init(userId: string): Promise<UserPosts_3109> {
    const [user, posts] = await Promise.all([
      fetchUser_3109(userId),
      fetchPostsForUser_3109(userId)
    ]);
    return new UserPosts_3109(user, posts);
  }

  getUserName_3109() {
    return this.user.name;
  }
}
