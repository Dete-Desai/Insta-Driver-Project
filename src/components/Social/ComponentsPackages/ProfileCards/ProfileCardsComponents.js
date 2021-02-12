import React from "react";
import PropTypes from "prop-types";
import {
  ProfileCardsComponent,
  ProfileCards1Component,
  ProfileCards2Component,
} from "../ProfileCards/ProfileCards";
import {
  MembersProfileCardsComponent,
  MembersProfileCards1Component,
  MembersProfileCards2Component,
} from "../ProfileCards/MembersProfileCards";

export function ProfileCards() {
  return (
    <div>
      <ProfileCardsComponent />
    </div>
  );
}

ProfileCards.propTypes = {};

export function ProfileCards1() {
  return (
    <div>
      <ProfileCards1Component />
    </div>
  );
}

ProfileCards1.propTypes = {};

export function ProfileCards2() {
  return (
    <div>
      <ProfileCards2Component />
    </div>
  );
}

ProfileCards2.propTypes = {};

export function MembersProfileCards() {
  return (
    <div>
      <MembersProfileCardsComponent />
    </div>
  );
}

MembersProfileCards.propTypes = {};

export function MembersProfileCards1() {
  return (
    <div>
      <MembersProfileCards1Component />
    </div>
  );
}

MembersProfileCards1.propTypes = {};

export function MembersProfileCards2() {
  return (
    <div>
      <MembersProfileCards2Component />
    </div>
  );
}

MembersProfileCards2.propTypes = {};
