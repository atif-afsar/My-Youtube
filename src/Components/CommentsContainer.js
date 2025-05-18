import React from 'react';

const commentsData = [
  {
    name: 'Atif Afsar',
    text: 'This video was very good',
    replies: [
      {
        name: 'Master Mentor',
        text: 'Glad it ',
        replies: [
          {
            name: 'Atif Afsar',
            text: 'Yes, Awesome',
            replies: []
          }
        ]
      }
    ]
  },
  {
    name: 'Viewer123',
    text: 'Can someone explain the last part?',
    replies: []
  }
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-start space-x-3 py-3">
      <img
        alt="user"
        className="w-10 h-10 rounded-full object-cover"
        src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
      />
      <div>
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-800">{text}</p>
        <div className="text-xs text-gray-500 mt-1">
          <span className="mr-4">1 hour ago</span>
          <button className="font-semibold hover:underline">Reply</button>
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-6 ml-4 border-l border-gray-300">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-4">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

