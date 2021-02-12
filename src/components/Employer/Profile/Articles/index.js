import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  createArticle,
  deleteArticle,
  listArticles,
  listSingleBusinessArticles,
} from "../../../../redux/actions/article_actions";
import ArticleContainer from "./AvailableArticles/ArticleContainer";
import NoArticle from "./AvailableArticles/NoArticle";
import TextEditor from "./AvailableArticles/TextEditor";

const ArticlesComponent = (props) => {
  const [showEditor, setShowEditor] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const article = {
    title,
    content,
  };

  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(createArticle(credentials.token, article));

    setTitle("");
    setContent("");
    // setShowEditor(false);

    await dispatch(listArticles(credentials.token));
  };

  const handleDelete = async (e, articleId) => {
    e.preventDefault();
    e.stopPropagation();

    if (credentials) {
      await dispatch(deleteArticle(credentials.token, articleId));

      await dispatch(listArticles(credentials.token));
    }
  };

  useEffect(() => {
    if (!credentials) {
      const { handle } = props.match.params;
      dispatch(listSingleBusinessArticles(handle));
    } else {
      dispatch(listArticles(credentials.token));
    }
  }, []);

  const articles = useSelector((state) => state.article_reducer.articles);

  const url = props.location.pathname.split("/")[1];

  return (
    <>
      {credentials && showEditor && url !== "business" && (
        <div className="row">
          <div className="col-lg-12">
            <div
              id="card"
              className=""
              style={{
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              <form>
                <div className="d-flex justify-content-end align-items-center mb-3 mt-3 position-relative">
                  <p
                    style={{
                      background: "#ffbb00",
                      padding: "0.5rem 1rem",
                      right: "1rem",
                      color: "#fff",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                    className="position-absolute"
                    onClick={() => setShowEditor(false)}
                  >
                    X
                  </p>
                </div>
                <div className="form-group ">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title Here"
                    className="form-control inputIcon-none"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="editor form-group">
                  <TextEditor content={content} setContent={setContent} />
                </div>
                <div className="chatFooter__right form-group text-right">
                  <button
                    className="sendIcon btn text-white"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Post Article
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {articles.length <= 0 ? (
        <>
          {!showEditor && (
            <div
              className="d-flex justify-content-center align-items-center flex-column"
              style={{ maxHeight: "100px" }}
            >
              <NoArticle />
              {credentials && (
                <div style={{ marginTop: "-1rem", marginBottom: "10rem" }}>
                  <button
                    onClick={() => setShowEditor(true)}
                    type="button"
                    className="btn btn-labeled btn-warning button-vacancy ml-auto"
                  >
                    <span className="btn-label">
                      <i className="fas fa-plus fa-lg"></i>
                    </span>
                    Create Your First Article
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <>
          {credentials && !showEditor && url !== "business" && (
            <div
              className="d-flex justify-content-center"
              style={{
                background: "transparent",
                marginTop: "-2.5rem",
                marginBottom: 0,
              }}
              id="card"
            >
              <button
                onClick={() => setShowEditor(true)}
                type="button"
                className="btn btn-labeled btn-warning button-vacancy ml-auto"
              >
                <span className="btn-label">
                  <i className="fas fa-plus fa-lg"></i>
                </span>
                Create Article
              </button>
            </div>
          )}

          {articles.map((article) => (
            <ArticleContainer
              article={article}
              key={article._id}
              handleDelete={handleDelete}
            />
          ))}
          <div className=" showMoreBtn">
            <button
              style={{ width: "150px" }}
              className="btn createVideo bg-orange mt-4 font-weight-bold"
            >
              Show More
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default withRouter(ArticlesComponent);
