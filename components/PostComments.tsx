import { Comment } from '@/gql/graphql';
import React from 'react';
import UserAvatar from './UserAvatar';

function PostComments({ comments }: { comments: Comment[] | undefined | null }) {
  return (
    <>
      {comments?.map((comment, index) => (
        <div key={index} className="flex items-start space-x-3">
          <UserAvatar profileImageURL={comment.author?.profileImageURL} />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-sm">{comment.author?.username}</p>
              <span className="text-xs text-neutral-500">1m ago</span>
            </div>
            <p className="text-sm text-neutral-400">{comment.content}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostComments;
