// @flow
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Card, Row, Col } from 'react-bootstrap';
import logger from 'sabio-debug';
import { getListingReservationByCreatedBy } from '../../../services/reservationService';
import CalendarCard from './CalendarCard';
import toastr from 'toastr';
import SimpleBar from 'simplebar-react';

const _logger = logger.extend('SwappingCalendar');

const SwappingsCalendar = () => {
    const [date, setDate] = useState(new Date());

    const [calendarState, setCalenderState] = useState({
        calendarElements: [],
        currentPage: 1,
        pageIndex: 0,
        pageSize: 5,
        createdBy: 1,
        totalCount: 0,
    });

    useEffect(() => {
        getListingReservationByCreatedBy(calendarState.pageIndex, calendarState.pageSize, calendarState.createdBy)
            .then(getListingReservationByCreatedBySuccess)
            .catch(getListingReservationByCreatedByError);
    }, [calendarState.pageIndex]);

    const getListingReservationByCreatedBySuccess = (resp) => {
        _logger('Pagination results:', resp);

        setCalenderState((prevState) => {
            let newState = { ...prevState };
            newState.calendarElements = resp.item.pagedItems.map(mapACard);
            return newState;
        });

        toastr.success('Success on Pagination');
    };

    const getListingReservationByCreatedByError = (message) => {
        _logger('Paginated results not retrieved: ', message);
        toastr.error('Error on Pagination');
    };

    const mapACard = (reservation, listing, index) => (
        <CalendarCard key={index} reservation={reservation} listing={listing} />
    );

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Upcoming Swappings</h4>

                <Card.Title
                    containerclass="d-flex align-items-center justify-content-between mb-3"
                    title="Your Calendar"
                    menuitems={[
                        { label: 'Weekly Report' },
                        { label: 'Monthly Report' },
                        { label: 'Action' },
                        { label: 'Settings' },
                    ]}
                />

                <Row style={{ maxHeight: '470px' }}>
                    <Col md={7} className="calendar-widget">
                        <DatePicker value={date} onChange={(date) => setDate(date)} inline />
                    </Col>

                    <Col>
                        <SimpleBar style={{ height: '420px' }}>
                            <li className="list-unstyled">{calendarState.calendarElements}</li>
                        </SimpleBar>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default SwappingsCalendar;
