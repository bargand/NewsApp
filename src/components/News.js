import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=5ddcdb9b85b34239bdcbeef4fcf1d74a&pageSize=10";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePreviousClick = async () => {
    console.log("previous click");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5ddcdb9b85b34239bdcbeef4fcf1d74a&page=${
      this.state.page - 1
    }&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("next click");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 10)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5ddcdb9b85b34239bdcbeef4fcf1d74a&page=${
        this.state.page + 1
      }&pageSize=10`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp Top headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageUrl={
                    !element.urlToImage
                      ? "https://images.indianexpress.com/2023/09/Monu-1-1.jpg?w=640"
                      : element.urlToImage
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Predious
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
