import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ title = "Cool Project", description = "A project with a 3D glowing card effect", link = "#" }) {
  return (
    <div className="parent">
      <div className="card">
        <div className="glass"></div>
        <div className="content">
          <span className="title">{title}</span>
          <span className="text">{description}</span>
        </div>
        <div className="bottom">
          <div className="view-more">
            <a href={link} className="view-more-button">View on GitHub</a>
            <svg className="svg" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}