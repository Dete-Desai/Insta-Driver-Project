import React from 'react';
import { useHistory } from 'react-router-dom';
import { SocialCardPhoto, SocialCard2, CommentSocialCard2, ReplySocialCard } from '../ComponentsPackages/SocialCards/SocialCardsComponents';

const GroupPhoto = props => {

    const history = useHistory();

    const directToPost = () => {
        let route = `social-post`;
        history.push(route);
    }

    return (
        <div className="container">
            <main role="main" className="col-lg-12  px-1" style={{ right: 80 }}>
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-md-12" style={{ left: 200 }}>
                        <SocialCardPhoto />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-md-12" style={{ left: 200 }}>
                        <div onClick={directToPost} className="row post-direction-icon">
                            <div className="col-sm-1">
                                <i className="fa fa-caret-left" style={{ fontSize: 36 }} />
                            </div>
                            <div className="col-sm-11">
                                <h4>Return To Original Post</h4>
                            </div>
                        </div>
                        <br />
                        <CommentSocialCard2 />
                        <br />
                        <br />
                        <ReplySocialCard />
                        <br />
                        <br />
                        <ReplySocialCard />
                        <br />
                        <br />
                        <br />
                        <SocialCard2 />
                        <br />
                        <br />
                        <CommentSocialCard2 />
                        <br />
                        <br />
                        <br />
                        <CommentSocialCard2 />
                        <br />
                        <br />
                        <br />
                        <ReplySocialCard />
                        <br />
                        <br />
                        <br />
                        <ReplySocialCard />
                        <br />
                        <br />
                        <br />
                        <SocialCard2 />
                        <br />
                        <br />
                        <CommentSocialCard2 />
                        <br />
                        <br />
                        <CommentSocialCard2 />
                        <br />
                        <br />
                        <ReplySocialCard />
                        <br />
                        <br />
                        <br />
                        <button className="social-button3 social-button-1"
                            style={{width:300, height:50}}>
                            <b>View 5 More replies</b>
                        </button>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </main>
        </div>
    )
}

GroupPhoto.propTypes = {

}

export default GroupPhoto
