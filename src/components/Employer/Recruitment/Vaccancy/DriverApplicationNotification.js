import React from 'react'
import PropTypes from 'prop-types'

const DriverApplicationNotification = props => {
    return (
        <div>
            <div className="dropdown-menu driver-profile-button-menu-center" aria-labelledby="dropdownMenuButton">
                <br />
                <font size="4"><b>This Applicant Also Applied To This Ads</b></font>
                <br />
                <br />
                <button className="driver-profile-dropdownbutton-menu1 driver-profile-dropdownbutton-menu-1 driver-profile-dropdownbutton-menu-hover1">Driver Card 659XG</button> &nbsp; Posted 23rd Oct.2020
                    <br />
                <br />
                <button className="driver-profile-dropdownbutton-menu1 driver-profile-button-menu driver-profile-dropdownbutton-menu-hover1">Job ad 659XG</button> &nbsp; Posted 23rd Oct.2020
                    <br />
                <br />
                <button className="driver-profile-dropdownbutton-menu1 driver-profile-button-menu driver-profile-dropdownbutton-menu-hover1">Driver Card 659XG</button> &nbsp; Posted 23rd Oct.2020
                    <br />
                <br />
            </div>
        </div>
    )
}

DriverApplicationNotification.propTypes = {

}

export default DriverApplicationNotification
