import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./articleView.scss";

const Container = styled.div`
  position: relative;
  width: 31%;
  height: 500px;
  margin-bottom: 50px;
  padding: 32px 24px;
  color: #ffffff;
  overflow: hidden;
  .article-title {
    display: inline-block;
    height: 120px;
    margin-bottom: 16px;
    font-size: 30px;
    font-weight: 700;
    text-decoration: none;
    color: #ffffff;
  }
  .article-description {
    font-size: 24px;
    font-weight: 200;
    overflow-wrap: break-word;
  }
  &:hover .article-read-time {
    margin-left: 0;
    opacity: 1;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
    padding: 32px;
  }
`;

const ArticleView = ({ bgColor, article }) => {
  const formatTime = min => {
    if (min > 1) return `0${min} mins`;
    if (min === 1) return `01 min`;
    if (min <= 1) return `0${min} mins`;
  };

  return (
    <Container style={{ backgroundColor: bgColor }}>
      <Link to={`/${article.slug}`} className="article-title">
        {article.title}
      </Link>
      <p className="article-description">{article.description}</p>
      <div className="article-read-time">
        <span role="img" aria-label="clock">
          🕑
        </span>
        &nbsp;{formatTime(article.readTime)}
      </div>
      <Link
        to={`/${article.slug}`}
        className="btn-read-article"
        title="Read This Article"
      >
        read more&nbsp;&nbsp;
        <i className="zmdi zmdi-long-arrow-right" />
      </Link>
    </Container>
  );
};

export default ArticleView;
