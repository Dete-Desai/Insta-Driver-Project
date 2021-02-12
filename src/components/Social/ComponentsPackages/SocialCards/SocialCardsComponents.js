import React from "react";
import PropTypes from "prop-types";
import SocialCard1Component from "./SocialCard1";
import SocialCard2Component from "./SocialCard2";
import SocialCard3Component from "./SocialCard3";
import SocialCardPhotoComponent from "./SocialCardPhoto";
import SocialCardVideoComponent from "./SocialCardVideo";
import ReplySocialCardComponent from "./ReplySocialCard";
import PublicSocialCard1Component from "./PublicSocialCard1";
import PublicSocialCard2Component from "./PublicSocialCard2";
import CommentSocialCard1Component from "./CommentSocialCard1";
import CommentSocialCard2Component from "./CommentSocialCard2";
import PublicCommentSocialCard1Component from "./PublicCommentSocialCard1";
import PublicCommentSocialCard2Component from "./PublicCommentSocialCard2";

// --------------- Reply Social Card ---------------
export function ReplySocialCard() {
    return (
      <div>
        <ReplySocialCardComponent />
      </div>
    );
  }

// --------------- Social Card Photo ---------------
export function SocialCardPhoto() {
    return (
      <div>
        <SocialCardPhotoComponent />
      </div>
    );
  }
  
  // --------------- Social Card Video ---------------
  export function SocialCardVideo() {
    return (
      <div>
        <SocialCardVideoComponent />
      </div>
    );
  }

// --------------- Social Card1 ---------------
export function SocialCard1() {
  return (
    <div>
      <SocialCard1Component />
    </div>
  );
}

// --------------- SocialCard2 ---------------
export function SocialCard2() {
    return (
      <div>
        <SocialCard2Component />
      </div>
    );
  }

// --------------- Social Card 3 ---------------
export function SocialCard3() {
    return (
      <div>
        <SocialCard3Component />
      </div>
    );
  }

// --------------- Comment Social Card 1 ---------------
export function CommentSocialCard1() {
    return (
      <div>
        <CommentSocialCard1Component />
      </div>
    );
  }
  
  // --------------- Comment Social Card2 ---------------
  export function CommentSocialCard2() {
      return (
        <div>
          <CommentSocialCard2Component />
        </div>
      );
    }

// --------------- Public Social Card1 ---------------
export function PublicSocialCard1() {
  return (
    <div>
      <PublicSocialCard1Component />
    </div>
  );
}

// --------------- Public Social Card 2 ---------------
export function PublicSocialCard2() {
  return (
    <div>
      <PublicSocialCard2Component />
    </div>
  );
}

// --------------- Public Comment Social Card 1 ---------------
export function PublicCommentSocialCard1() {
  return (
    <div>
      <PublicCommentSocialCard1Component />
    </div>
  );
}

// --------------- Public Comment Social Card2 ---------------
export function PublicCommentSocialCard2() {
  return (
    <div>
      <PublicCommentSocialCard2Component />
    </div>
  );
}
