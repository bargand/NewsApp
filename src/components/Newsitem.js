import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt, author } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-title">
              <b>Date-</b>
              {publishedAt}, <b>Author-</b>
              {author}
            </p>
            <h5 className="card-title">
              <b>{title}</b>
            </h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
