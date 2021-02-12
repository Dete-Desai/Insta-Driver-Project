// import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import SearchUserData from "../../../Inbox/StaticData/SearchUser";
import { ReactComponent as SearchIco } from "../../../../dist/icons/search_svg.svg";

import { connect } from "react-redux";
import {
  updateSearchData,
  updateSearchPageKeyword,
} from "../../../../redux/actions/search_actions";
import { PostRoute } from "../../../../Api";

const { Get } = PostRoute();

const StyledInputGroupText = styled(InputGroup.Text)`
  color: #969393;
  background-color: white;
  border-radius: 1.25rem;
  border: 0.5px solid #ced4da !important;
  margin-right: -2px;
  /* margin-top:4px; */
`;
const StyledFormControl = styled(Form.Control)`
  border-radius: 25px;
  height: 48px;
  border: 0.5px solid #ced4da !important;
  border-left: 0.5px solid white !important;
  :focus {
    color: #495057;
    background-color: none;
    border-color: #ced4da;
    outline: 0;
    box-shadow: none;
    text-align: left;
  }
`;

const CustomForm = styled.form`
  width: 589.95px;
  margin: auto;
  .example::-webkit-scrollbar {
    display: none;
  }
`;

const StyledDropdownDiv = styled.div`
  position: absolute;
  max-width: 37.5rem;
  width: 95%;
  z-index: 1000;
  width: 589.95px;
  background-color: white;
  border-radius: 5px;
  border-color: #c4c4c4;
  border-style: solid;
  border-width: 1px;
  max-height: 350px;
  overflow-y: scroll;
  .searchUser:hover {
    background-color: white;
    color: black;
  }
  p {
    margin-left: 5px;
    color: #969393;
  }
  .search-name {
    min-width: 25%;
  }
`;

const StyledCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  background: #ffbb00;
  font-size: 12.97px;
  margin-left: 10px;
  margin-bottom: 13px;
`;

const SearchBox = ({ keyword }) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [listItemClicked, setListItemClicked] = useState(false);
  const [search, setSearch] = useState(`${keyword ? keyword : ``}`);
  let history = useHistory();
  let dispatch = useDispatch();

  const onSearchEnter = (e) => {
    e.preventDefault();
    if (search !== "") {
      setDisplay(false);
      console.log("search start", search);
      dispatch(updateSearchPageKeyword(search));

      if (options.length === 0) {
        dispatch(updateSearchData(null));
      } else {
        dispatch(updateSearchData(options));
      }
      history.push(`/search/${search}`);
    } else {
      dispatch(updateSearchData(null));
      history.push(`/search`);
    }
  };

  const wrapperRef = useRef(null);

  useEffect(() => {
    if (listItemClicked) {
      console.log("search start", search);
      history.push(`/search/${search}`);
      setListItemClicked(false);
    }

    console.log("search --", search);
    var isResultFound = SearchUserData.some((i) =>
      i.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    console.log("result found=", isResultFound);
    if (!isResultFound) {
      setDisplay(false);
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [history, listItemClicked, search]);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateSearch = (name) => {
    setSearch(name);
    setDisplay(false);
  };

  const searchInputChange = async (e) => {
    setSearch(e.target.value);

    try {
      let search_result_list = await Get(`/search?business=${search}`);
      console.log("recieved list", search_result_list.data.response_data);
      let search_result = search_result_list.data.response_data;
      dispatch(updateSearchData(search_result));
      setOptions(search_result);
    } catch (error) {
      console.log("search error", error);
    }

    setDisplay(true);
  };

  return (
    <>
      <Form.Row ref={wrapperRef} style={{ marginBottom: "1rem" }}>
        <CustomForm
          onSubmit={(e) => {
            onSearchEnter(e);
          }}
        >
          <InputGroup>
            <InputGroup.Prepend>
              <StyledInputGroupText>
                {/* <span className="glyphicon glyphicon-search"></span>{" "} */}
                <SearchIco />
              </StyledInputGroupText>
            </InputGroup.Prepend>
            <StyledFormControl
              className="text-muted  border__focus"
              placeholder="Search a business or mobility player e.g. driver"
              type="text"
              // onClick={() => setDisplay(!display)}
              value={search}
              onChange={searchInputChange}
            />
          </InputGroup>
          {display && search !== "" && (
            <StyledDropdownDiv className="example Container search__position">
              {options
                .filter((val) => {
                  if (search === "") {
                    return val;
                  } else if (
                    val.businessName
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
                      onClick={() => {
                        updateSearch(value.businessName);
                        setListItemClicked(true);
                      }}
                      className="overflow-auto p-3 searchUser d-flex justify-content-start align-items-center cursorpointer container-fluid"
                      key={i}
                      tabIndex="0"
                    >
                      <img
                        className="rounded-circle"
                        style={{ height: "3rem", width: "3rem" }}
                        src={value.avatar}
                        alt="image"
                      />
                      <p className="px-2 search-name my-auto">
                        {value.businessName}
                      </p>

                      <StyledCircle className="my-auto" />
                      <p className="px-2 my-auto">{`Business`}</p>
                      {/* <span className="text-muted">{value.username}</span> */}
                    </div>
                  );
                })}
            </StyledDropdownDiv>
          )}
        </CustomForm>
      </Form.Row>
    </>
  );
};

export default SearchBox;

//Todo : add logic after geting values from api
