// @flow
import React, { useState, useEffect } from 'react';
import { getPaginated } from '../../../services/listingService';
import logger from 'sabio-debug';
import locale from 'rc-pagination/lib/locale/en_US';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import toastr from 'toastr';
import { Card } from 'react-bootstrap';
import SwappingListCard from './SwappingListCard';

const SwappingList = () => {
    const _logger = logger.extend('SwappingList');
    const [searchState, setSearchState] = useState({
        listingElements: [],
        currentPage: 1,
        pageIndex: 0,
        pageSize: 3,
        totalCount: 0,
    });

    useEffect(() => {
        getPaginated(searchState.pageIndex, searchState.pageSize)
            .then(onGetPaginatedSuccess)
            .catch(onGetPaginatedError);
    }, [searchState.pageIndex]);

    const onGetPaginatedSuccess = (resp) => {
        _logger('Pagination results:', resp);
        let pagedItems = resp.data.item.pagedItems;
        let totalCount = resp.data.item.totalCount;
        setSearchState((oldState) => {
            let newState = { ...oldState };
            newState.totalCount = totalCount;
            newState.listingElements = pagedItems.map(mapACard);
            return newState;
        });

        toastr.success('Success on Pagination');
    };

    const onGetPaginatedError = (message) => {
        _logger('Paginated results not retrieved: ', message);
        toastr.error('Error on Pagination');
    };

    const mapACard = (listing, index) => <SwappingListCard key={index} list={listing} />;

    const onPageChange = (page) => {
        setSearchState((prevState) => {
            const newState = { ...prevState };
            newState.pageIndex = page - 1;
            newState.currentPage = page;

            return newState;
        });
    };

    return (
        <>
            {' '}
            <Card>
                <Card.Body>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-auto">
                                <h4 className="header-title mb-3">Available Swappings</h4>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-auto mt-3 ">
                                    <Pagination
                                        onChange={onPageChange}
                                        current={searchState.currentPage}
                                        total={searchState.totalCount}
                                        locale={locale}
                                        className="pb-2"
                                    />
                                </div>
                            </div>

                            <div className="row">{searchState.listingElements}</div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default SwappingList;
