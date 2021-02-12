import React, { useEffect, useRef, useState } from "react";
import SearchUserData from "../../StaticData/SearchUser";
import dotCircle from "../../../../dist/icons/dotCircle.svg";
import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";
import { updateNewChatSearchResults } from "../../../../redux/actions/inbox_actions";
import { PostRoute } from "../../../../Api";
import { getAuthConfig } from "../../../../Util/ApiUtils";
import avator from "../../../../dist/images/avator.png";

const { Get } = PostRoute();

const SearchFilter = (props) => {
  const [display, setDisplay] = useState(false);
  const [options] = useState(SearchUserData);
  const [search, setSearch] = useState("");
  const [data, setSearchData] = useState();

  const wrapperRef = useRef(null);

  useEffect(async () => {
    if (props.user) {
      let config = getAuthConfig(props.user.token);
      let response = await Get("/inbox/users/all", config);
      let data = response.data.response_data;
      if (props.user.role === "EMPLOYER") {
        let searchData = data.filter((d) => {
          return d.role !== "EMPLOYER";
        });
        setSearchData(searchData);
      } else {
        setSearchData(data);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const { inquiry } = props;

  const handleSearch = (values) => {
    setSearch(values.firstName + values.lastName);
    setDisplay(false);
    values.name = `${values.firstName} ${values.lastName}`;
    props.updateNewChatSearchResults({
      firstname: values.firstName,
      lastname: values.lastName,
      init_message: null,
      inquiry_type: inquiry ? inquiry : "",
      phone_number: values.mobileNumber,
      receiver_email: values.email,
      avatar: values.avatar ? values.avatar : null,
      role: values.role,
    });
  };
  return (
    <>
      <div ref={wrapperRef} className="input-group newUserSearch ">
        <input className="submit__btn" type="submit" value="" />
        <input
          id="auto"
          style={{ fontSize: "15px", borderRadius: "20px" }}
          className="form-control text-muted search__input border__focus bg-white"
          placeholder="Search users to chat with"
          type="text"
          onClick={() => setDisplay(!display)}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {display && (
          <div className="Container filterBox search__position">
            {data &&
              data
                .filter((val) => {
                  if (search === "") {
                    return val;
                  } else if (
                    `${val.firstName} ${val.lastName}`
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                  return "";
                })
                .map((value, i) => {
                  return (
                    <div
                      onClick={() => handleSearch(value)}
                      className="overflow-auto py-3 px-2 mt-2 searchUser d-flex align-items-center mx-0"
                      key={i}
                      tabIndex="0"
                    >
                      <div className="position-relative col-sm-2 p-0">
                        <span>
                          <img
                            style={{
                              width: "60px",
                              height: "60px",
                              borderRadius: "50%",
                            }}
                            src={value.avatar ? value.avatar : avator}
                            alt="user"
                          />
                        </span>
                        <span>
                          <img
                            className="user-type"
                            src={value.userType}
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="col-sm-10 px-0">
                        <div className="">
                          <span className="pr-2">{`${value.firstName} ${value.lastName}`}</span>
                          <span className="text-muted pr-3">
                            {value.username}
                          </span>
                          {value.category !== "" && (
                            <span className="text-muted">
                              <img className="mr-3" src={dotCircle} alt="" />
                              {value.category}
                            </span>
                          )}
                        </div>
                        <span className="">{value.title}</span>
                        {value.onlineIndicator !== "" && (
                          <div className="">
                            <span>
                              <img
                                className=""
                                src={value.onlineIndicator}
                                alt=""
                              />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user_reducers.user_credentials,
    inquiry: state.inbox_reducers.inquiry,
  };
};

export default connect(mapStateToProps, {
  updateNewChatSearchResults,
})(SearchFilter);
