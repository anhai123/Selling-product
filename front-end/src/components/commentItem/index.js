import React, { createElement, useState } from "react";
import moment from "moment";
import { Rate, Avatar, Tooltip } from "antd";
import { Comment } from "@ant-design/compatible";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import "./comment.css";
const CommentItem = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };
  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };
  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  return (
    <Comment
      actions={actions}
      author={<a>Han Solo</a>}
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
      }
      content={
        <>
          <Rate />
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and
            efficiently.nnnnnnnnnnnnnnnnnnnytnty
          </p>
        </>
      }
      datetime={
        <Tooltip title="2016-11-22 11:22:33">
          <span>{moment("2012-10-15T21:26:17Z").fromNow()}</span>

          {/* <Rate
            style={{
              position: "absolute",
              zIndex: "1",
              fontSize: "20px",
              transform: "translate(0, -15%)",
              right: "0px",
              lineHeight: "14px",
            }}
          /> */}
        </Tooltip>
      }
    />
  );
};

export default CommentItem;
