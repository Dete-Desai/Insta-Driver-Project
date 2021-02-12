import React from 'react';
import PropTypes from 'prop-types';
import Social from '../../../components/Social/SocialHome/Social';
import Social2 from '../../../components/Social/SocialHome/Social2'

export const SocialPage = props => {
    return (
        <div>
            <Social />
        </div>
    )
}

SocialPage.propTypes = {

};

export const Social2Page = props => {
    return (
        <div>
            <Social2 />
        </div>
    )
}

Social2Page.propTypes = {

};
