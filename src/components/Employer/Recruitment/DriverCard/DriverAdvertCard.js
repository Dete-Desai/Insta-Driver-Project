import React, { useEffect } from "react";
import PropTypes from "prop-types";
import EmployerSideBarFunction from "../../../Layout/MainSideBar/Employer/EmployerSideBarFunction";
import DriverRecruitmentCard from "./DriverRecruitmentCard";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getDriverJobCards } from "../../../../redux/actions/driver_actions/job_card_actions";

const DriverAdvertCard = (props) => {
  const history = useHistory();
  // const DirectToDriverCard = (id) => {
  //   let route = `/employer-driver-card/${id}`;
  //   history.push(route);
  // };

  useEffect(() => {
    // get driver cards
    props.getDriverJobCards();
  }, []);

  const createCardsRow = (cards) => {
    let rows = [];
    // return an array of rows
    let step = 2;
    let start = 0;

    if (cards) {
      while (step <= cards.length || step - 1 === cards.length) {
        const rowCards = cards.slice(start, step);
        rows.push(
          <React.Fragment>
            <br />
            <br />
            <div className="row">
              {rowCards.map((card, idx) => mapCard(card))}
            </div>
            <br />
            <br />
            <br />
            <br />
          </React.Fragment>
        );
        start += 2;
        step += 2;
      }
    }
    return rows;
  };

  const mapCard = (data) => {
    return (
      <div className="col-md-6">
        <main
          role="main"
          className="col-md-9 ml-sm-auto col-lg-12 px-4 padding_left_35 padding_right_40"
        >
          <DriverRecruitmentCard data={data} />
        </main>
      </div>
    );
  };

  return (
    <div id="content">
      <div className="row">
        <EmployerSideBarFunction />
        <div className="col-md-10 ml-auto">
          <div className="container">
            {createCardsRow(props.cards).map((row, idx) => row)}
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

DriverAdvertCard.propTypes = {};

const mapStateToProps = (state) => {
  return {
    cards: state.driver_reducers.job_cards,
  };
};

export default connect(mapStateToProps, { getDriverJobCards })(
  DriverAdvertCard
);
