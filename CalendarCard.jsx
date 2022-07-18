import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import logger from 'sabio-debug';

const _logger = logger.extend('SwappingCalendar');

const CalendarCard = (props) => {
    _logger('this is props: ', props);

    const convertDate = (CalendarCard) => {
        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        let theDate = new Date(CalendarCard);
        return theDate.toLocaleDateString('en-US', options);
    };

    return (
        <>
            <div>
                <Col md={8}>
                    <div>
                        <i className="mdi mdi-calendar me-1"></i>
                        <h5>User: {props.reservation.listing.createdBy}</h5>
                        <h6>Date Check In: {convertDate(props?.reservation?.dateCheckIn)}</h6>
                        <h6>Date Check Out :{convertDate(props?.reservation?.dateCheckOut)}</h6>
                        <h6> Title: {props.reservation.listing.title}</h6>
                    </div>
                </Col>
            </div>
        </>
    );
};

CalendarCard.propTypes = {
    reservation: PropTypes.shape({
        dateCheckIn: PropTypes.string.isRequired,
        dateCheckOut: PropTypes.string.isRequired,

        listing: PropTypes.shape({
            title: PropTypes.string.isRequired,
            createdBy: PropTypes.number.isRequired,
        }),
    }),
};

export default CalendarCard;
