interface UserInfo_3108 { name: string }
interface Post_3108 { post: string }
declare function fetchUser_3108(userId: string): Promise<UserInfo_3108>;
declare function fetchPostsForUser_3108(userId: string): Promise<Post_3108[]>;
class UserPosts_3108 {
  user: UserInfo_3108 | null;
  posts: Post_3108[] | null;

  constructor() {
    this.user = null;
    this.posts = null;
  }

  async init(userId: string) {
    return Promise.all([
      async () => this.user = await fetchUser_3108(userId),
      async () => this.posts = await fetchPostsForUser_3108(userId)
    ]);
  }

  getUserName_3108() {
    // ...?
  }
}
