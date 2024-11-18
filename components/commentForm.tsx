"use client"
import React, { useState } from 'react';

function CommentForm() {
  // Array of available emojis
  const emojis = [
    "😊", "👍", "❤️", "😂", "😭", "🥰", "😎", "😢", "😍", "😄",
    "💯", "🙌", "👏", "🔥", "💥", "✨", "🤩", "🥳", "😜", "😇"
  ];

  // State to hold the comment text and the randomly selected emojis
  const [comment, setComment] = useState("");
  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);

  // Function to pick 5 random emojis from the array
  const getRandomEmojis = () => {
    const randomEmojis = [];
    const emojisCopy = [...emojis];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * emojisCopy.length);
      randomEmojis.push(emojisCopy.splice(randomIndex, 1)[0]);
    }
    setSelectedEmojis(randomEmojis);
  };

  // Handle emoji click to insert it into the comment input
  const handleEmojiClick = (emoji: string) => {
    setComment((prevComment) => prevComment + emoji);
  };

  // Handle comment input change
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  // Logic to post the comment
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      console.log("New comment:", comment);
      // Logic to handle posting the comment goes here
      setComment(""); // Clear input after submission
    }
  };

  // On component mount, pick 5 random emojis
  React.useEffect(() => {
    getRandomEmojis();
  }, [getRandomEmojis]);

  return (
    <div className="mt-4 flex flex-col items-center border-t pt-4">
      <div className="w-full flex justify-center flex-wrap space-x-2 mb-4">
        {selectedEmojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() => handleEmojiClick(emoji)}
            className="text-2xl hover:text-blue-500"
          >
            {emoji}
          </button>
        ))}
      </div>

      {/* Wrap input and button in a flex container */}
      <div className="flex w-full items-center">
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          className="w-full px-4 py-2 bg-[#222222] text-white rounded-md border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleCommentSubmit}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default CommentForm;
