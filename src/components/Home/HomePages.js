import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Panel } from '@bumaga/tabs';
import SearchBox from './SearchBox';
import SearchDriver from './SearchDriver';
import { Col, Row } from 'react-bootstrap';
import SearchABusiness from './SearchABusiness';
import Feature from './Feature';
import FeatureCard from './FeatureCard';
import FeatureSlider from './FeatureSlider';

const HomePages = props => {
    return (
        <div>
            <div id="content">
                <header >
                    <Col xl={10} className="m-auto">
                        <Row className="py-5 my-4 d-flex justify-content-between">
                            <SearchDriver />
                        </Row>
                    </Col>
                </header>
                {/* Services */}
                <section id="services" style={{ background: '#363636' }} className="py-5">
                    <div className="container">
                        <div className="row">
                            <SearchABusiness />
                        </div>
                    </div>
                </section>
                <section className id="portfolio">
                    <div className="container-fluid">
                        <div className="row">

                            <Feature />

                        </div>
                    </div>
                </section>
                <div className="">
                    <div className="container">
                        <div className="col-lg-12 text-center">
                            <div className="row">



                            </div>
                        </div>
                    </div>
                </div>
                <section className="bg-light country" id="team">
                    <div className="container-fluid">
                        <div className="row text-center">
                        <FeatureSlider />
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

HomePages.propTypes = {

}

export default HomePages
