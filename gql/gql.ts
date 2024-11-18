/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "#graphql\nmutation LoginWithGoogle($token: String!) {\n  loginWithGoogle(token: $token)\n}\n": types.LoginWithGoogleDocument,
    "#graphql\n    mutation CreatePost($payload: createPostData!) {\n        createPost(payload: $payload) {\n            id  \n            imgURL\n            content\n        }\n    }\n": types.CreatePostDocument,
    "#graphql\n    mutation DeletePost($postId: String!) {\n        deletePost(postId: $postId)\n    }\n": types.DeletePostDocument,
    "#graphql\n    mutation LikePost($postId: String!) {\n  likePost(postId: $postId)\n}\n": types.LikePostDocument,
    "#graphql\nmutation CommentPost($payload: commentPostData!) {\n  commentPost(payload: $payload) {\n    id\n    content\n    postId\n\n        author {\n            id\n            profileImageURL\n            username\n            }\n  }\n}\n": types.CommentPostDocument,
    "#graphql\n   mutation DeleteCommentPost($commentId: String!) {\n  deleteCommentPost(commentId: $commentId)\n}\n": types.DeleteCommentPostDocument,
    "#graphql\n    mutation BookMarkPost($postId: String!) {\n  bookMarkPost(postId: $postId)\n}\n": types.BookMarkPostDocument,
    "#graphql\nmutation FollowUser($userId: String!) {\n  followUser(userId: $userId)\n}\n": types.FollowUserDocument,
    "#graphql\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n": types.GetCurrentUserDocument,
    "#graphql\n  query GetFeedPosts($payload: paginationPayload!) {\n  getFeedPosts(payload: $payload) {\n     posts{\n            id  \n            imgURL\n            content\n            author {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n            }\n\n            totalLikeCount\n            bookmarked\n            userHasLiked\n       }\n       nextCursor\n       hasMore\n  }\n}\n": types.GetFeedPostsDocument,
    "#graphql\n    query GetPostComments($postId: String!) {\n  getPostComments(postId: $postId) {\n    id \n    content\n    postId\n\n    author {\n        id\n        profileImageURL\n        username\n    }\n\n  }\n}\n": types.GetPostCommentsDocument,
    "#graphql\nquery GetUserPosts($username: String!) {\n  getUserPosts(username: $username) {\n    id  \n            imgURL\n            content\n\n            author {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n            }\n\n            totalLikeCount\n            bookmarked\n            userHasLiked \n  }\n}\n": types.GetUserPostsDocument,
    "#graphql\nquery GetPostById($postId: String!) {\n  getPostById(postId: $postId) {\n    id\n    content\n    imgURL\n    author {\n      id\n      username\n      profileImageURL\n    }\n    totalLikeCount\n    totalCommentCount\n    bookmarked\n    userHasLiked\n    comments {\n      id\n      content\n      author {\n        id\n        username\n        profileImageURL\n      }\n    }\n  }\n}": types.GetPostByIdDocument,
    "#graphql\nquery GetUserProfile($username: String!) {\n  getUserProfile(username: $username) {\n    id\n    username\n    fullName\n    profileImageURL\n    bio\n    totalPosts\n    totalFollowers\n    totalFollowings\n    followed\n  }\n}\n": types.GetUserProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nmutation LoginWithGoogle($token: String!) {\n  loginWithGoogle(token: $token)\n}\n"): (typeof documents)["#graphql\nmutation LoginWithGoogle($token: String!) {\n  loginWithGoogle(token: $token)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation CreatePost($payload: createPostData!) {\n        createPost(payload: $payload) {\n            id  \n            imgURL\n            content\n        }\n    }\n"): (typeof documents)["#graphql\n    mutation CreatePost($payload: createPostData!) {\n        createPost(payload: $payload) {\n            id  \n            imgURL\n            content\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation DeletePost($postId: String!) {\n        deletePost(postId: $postId)\n    }\n"): (typeof documents)["#graphql\n    mutation DeletePost($postId: String!) {\n        deletePost(postId: $postId)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation LikePost($postId: String!) {\n  likePost(postId: $postId)\n}\n"): (typeof documents)["#graphql\n    mutation LikePost($postId: String!) {\n  likePost(postId: $postId)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nmutation CommentPost($payload: commentPostData!) {\n  commentPost(payload: $payload) {\n    id\n    content\n    postId\n\n        author {\n            id\n            profileImageURL\n            username\n            }\n  }\n}\n"): (typeof documents)["#graphql\nmutation CommentPost($payload: commentPostData!) {\n  commentPost(payload: $payload) {\n    id\n    content\n    postId\n\n        author {\n            id\n            profileImageURL\n            username\n            }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n   mutation DeleteCommentPost($commentId: String!) {\n  deleteCommentPost(commentId: $commentId)\n}\n"): (typeof documents)["#graphql\n   mutation DeleteCommentPost($commentId: String!) {\n  deleteCommentPost(commentId: $commentId)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation BookMarkPost($postId: String!) {\n  bookMarkPost(postId: $postId)\n}\n"): (typeof documents)["#graphql\n    mutation BookMarkPost($postId: String!) {\n  bookMarkPost(postId: $postId)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nmutation FollowUser($userId: String!) {\n  followUser(userId: $userId)\n}\n"): (typeof documents)["#graphql\nmutation FollowUser($userId: String!) {\n  followUser(userId: $userId)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"): (typeof documents)["#graphql\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n  query GetFeedPosts($payload: paginationPayload!) {\n  getFeedPosts(payload: $payload) {\n     posts{\n            id  \n            imgURL\n            content\n            author {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n            }\n\n            totalLikeCount\n            bookmarked\n            userHasLiked\n       }\n       nextCursor\n       hasMore\n  }\n}\n"): (typeof documents)["#graphql\n  query GetFeedPosts($payload: paginationPayload!) {\n  getFeedPosts(payload: $payload) {\n     posts{\n            id  \n            imgURL\n            content\n            author {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n            }\n\n            totalLikeCount\n            bookmarked\n            userHasLiked\n       }\n       nextCursor\n       hasMore\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query GetPostComments($postId: String!) {\n  getPostComments(postId: $postId) {\n    id \n    content\n    postId\n\n    author {\n        id\n        profileImageURL\n        username\n    }\n\n  }\n}\n"): (typeof documents)["#graphql\n    query GetPostComments($postId: String!) {\n  getPostComments(postId: $postId) {\n    id \n    content\n    postId\n\n    author {\n        id\n        profileImageURL\n        username\n    }\n\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nquery GetUserPosts($username: String!) {\n  getUserPosts(username: $username) {\n    id  \n            imgURL\n            content\n\n            author {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n            }\n\n            totalLikeCount\n            bookmarked\n            userHasLiked \n  }\n}\n"): (typeof documents)["#graphql\nquery GetUserPosts($username: String!) {\n  getUserPosts(username: $username) {\n    id  \n            imgURL\n            content\n\n            author {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n            }\n\n            totalLikeCount\n            bookmarked\n            userHasLiked \n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nquery GetPostById($postId: String!) {\n  getPostById(postId: $postId) {\n    id\n    content\n    imgURL\n    author {\n      id\n      username\n      profileImageURL\n    }\n    totalLikeCount\n    totalCommentCount\n    bookmarked\n    userHasLiked\n    comments {\n      id\n      content\n      author {\n        id\n        username\n        profileImageURL\n      }\n    }\n  }\n}"): (typeof documents)["#graphql\nquery GetPostById($postId: String!) {\n  getPostById(postId: $postId) {\n    id\n    content\n    imgURL\n    author {\n      id\n      username\n      profileImageURL\n    }\n    totalLikeCount\n    totalCommentCount\n    bookmarked\n    userHasLiked\n    comments {\n      id\n      content\n      author {\n        id\n        username\n        profileImageURL\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nquery GetUserProfile($username: String!) {\n  getUserProfile(username: $username) {\n    id\n    username\n    fullName\n    profileImageURL\n    bio\n    totalPosts\n    totalFollowers\n    totalFollowings\n    followed\n  }\n}\n"): (typeof documents)["#graphql\nquery GetUserProfile($username: String!) {\n  getUserProfile(username: $username) {\n    id\n    username\n    fullName\n    profileImageURL\n    bio\n    totalPosts\n    totalFollowers\n    totalFollowings\n    followed\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;