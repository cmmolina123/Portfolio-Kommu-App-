// @flow
import React from 'react';
import { Card, Button, Table } from 'react-bootstrap';

const ListingsOverview = () => {
    return (
        <Card>
            <Card.Body>
                <Button variant="link" className="p-0 float-end">
                    Export <i className="mdi mdi-download ms-1"></i>
                </Button>
                <h4 className="header-title mt-1 mb-3">Listings Overview</h4>

                <Table responsive className="table table-sm table-centered mb-0 font-14">
                    <thead className="table-light">
                        <tr>
                            <th>City Location (Secs)</th>
                            <th style={{ width: '30%' }}>Location Type</th>
                            <th style={{ width: '30%' }}>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Los Angeles</td>
                            <td>Home</td>
                            <td>100 Maple Drive</td>
                        </tr>
                        <tr>
                            <td>Virginia Beach</td>
                            <td>Home</td>
                            <td>222 N Pyre Drive</td>
                        </tr>
                        <tr>
                            <td>San Diego</td>
                            <td>Home</td>
                            <td>2 Greek Road</td>
                        </tr>
                        <tr>
                            <td>Costa Mesa</td>
                            <td>Home</td>
                            <td>3 Harbor Blvd</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default ListingsOverview;
