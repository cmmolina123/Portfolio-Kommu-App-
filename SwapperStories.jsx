// @flow
import React from 'react';
import { Card, Button, Table, ProgressBar } from 'react-bootstrap';

const SwapperStories = () => {
    return (
        <Card>
            <Card.Body>
                <Button variant="link" className="p-0 float-end">
                    Export <i className="mdi mdi-download ms-1"></i>
                </Button>
                <h4 className="header-title  mt-1 mb-3">Swapper Stories</h4>

                <Table responsive className="table table-sm table-centered mb-0 font-14">
                    <thead className="table-light">
                        <tr>
                            <th>Testimonials</th>
                            <th>Visits</th>
                            <th style={{ width: '40%' }}>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>File Id: 305</td>
                            <td>Austin to Brooklyn</td>
                            <td>
                                <ProgressBar now={65} style={{ height: '3px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td>File Id: 306</td>
                            <td>Austin to Brooklyn</td>
                            <td>
                                <ProgressBar now={45} style={{ height: '3px' }} variant="info" />
                            </td>
                        </tr>
                        <tr>
                            <td>File Id: 307</td>
                            <td>Austin to Brooklyn</td>
                            <td>
                                <ProgressBar now={30} style={{ height: '3px' }} variant="warning" />
                            </td>
                        </tr>
                        <tr>
                            <td>File Id: 308</td>
                            <td>Austin to Brooklyn</td>
                            <td>
                                <ProgressBar now={25} style={{ height: '3px' }} variant="danger" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default SwapperStories;
