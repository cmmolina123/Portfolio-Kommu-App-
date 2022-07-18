// @flow
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import debug from 'sabio-debug';

const _logger = debug.extend('UserProfile');

const UserProfile = () => {
    const navigate = useNavigate();

    const onListChange = (event) => {
        _logger('OnList', { syntheticEvent: event });
        const { value } = event.target;
        navigate(value);
    };

    return (
        <>
            <div className="card">
                <img src={`https://bit.ly/3QkoQZU`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-text">
                        <b>Excited about your upcoming trips? Tell your friends by sharing a link to your profile.</b>
                    </h3>
                    <Link to="/profile/53" className="btn btn-success m-1">
                        View Your Profile!
                    </Link>
                </div>
            </div>
            <Card className="tilebox-one">
                <Card.Body>
                    <i className="uil uil-window-restore float-end"></i>
                    <h6 className="text-uppercase mt-0">Kommu Profile Views Per Day</h6>
                    <h2 className="my-2" id="active-users-count">
                        50 views
                    </h2>
                    <p className="mb-0 text-muted">
                        <span className="text-primary me-2">
                            <span className="mdi mdi-arrow-down-bold"></span> 389
                        </span>
                        <span className="text-nowrap">Since previous week</span>
                    </p>
                    <p className="mb-0 text-muted">
                        <span className="text-info me-2">
                            <span className="mdi mdi-arrow-up-bold"></span> 4,142
                        </span>
                        <span className="text-nowrap">Since last month</span>
                    </p>
                </Card.Body>
            </Card>

            <Card className="cta-box overflow-hidden">
                <Card.Body>
                    <div className="d-flex align-items-center">
                        <div>
                            <h3 className="m-0 fw-normal cta-box-title">
                                Enhance your <b>Private Home Swapping</b> Community{' '}
                                <i className="mdi mdi-arrow-right"></i>
                            </h3>
                        </div>
                        <img className="ms-3" src={'https://bit.ly/3tzLNON'} width="92" alt="Generic placeholder" />
                    </div>

                    <h2 className="my-2" id="active-users-count">
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">
                                Explore to...
                            </label>
                            <select className="form-select" onChange={onListChange} name="list">
                                <option defaultValue="0">--------------</option>
                                <option value={'/messaging'}>Messaging</option>
                                <option value={'/blogs'}>Blogs</option>
                                <option value={'/event'}>Upcoming Events</option>
                                <option value={'/venues'}>Venues</option>
                                <option value={'/contactus'}>Contact Us</option>
                                <option value={'/faq'}>FAQ </option>
                            </select>
                        </div>
                    </h2>
                </Card.Body>
            </Card>
        </>

        //DON'T PASS
    );
};

export default UserProfile;
