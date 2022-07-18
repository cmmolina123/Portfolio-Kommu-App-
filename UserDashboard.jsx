// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import UserProfile from './UserProfile';
import SwappingList from './SwappingList';
import SwappingsCalendar from './SwappingsCalendar';
import SwapperStories from './SwapperStories';
import Social from './Social';
import ListingsOverview from './ListingsOverview';

const UserDashboard = () => {
    return (
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <form className="d-flex">
                                <div className="input-group"></div>
                                <button className="btn btn-primary ms-2">
                                    <i className="mdi mdi-autorenew"></i>
                                </button>
                            </form>
                        </div>
                        <h1 className="page-title">User Dashboard</h1>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xl={3} lg={4}>
                    <UserProfile />
                </Col>
                <Col xl={8} lg={6}>
                    <SwappingsCalendar />
                    <SwappingList />
                </Col>
            </Row>
            <Row>
                <Col xl={4} lg={6}>
                    <SwapperStories />
                </Col>
                <Col xl={4} lg={6}>
                    <Social />
                </Col>
                <Col xl={4} lg={6}>
                    <ListingsOverview />
                </Col>
            </Row>
        </>
    );
};

export default UserDashboard;
