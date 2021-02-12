import React from 'react'
import PropTypes from 'prop-types'
import ContactUs from '../../components/Home/ContactUs'
import MainFooter from '../../components/Layout/MainFooter/MainFooter'

const ContactUsPage = props => {
    return (
        <div>
            <ContactUs />
            <MainFooter />
        </div>
    )
}

ContactUsPage.propTypes = {

}

export default ContactUsPage
