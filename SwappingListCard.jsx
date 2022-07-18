import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import logger from 'sabio-debug';

const SwappingListCard = (props) => {
    const _logger = logger.extend('SwappingListCard');
    const listing = props.list;
    const navigate = useNavigate();
    _logger(listing);

    const onClickEvent = (e) => {
        navigate(`../listing/view/${e.target.id}`);
    };

    return (
        <div className="col-12 col-md-6 col-lg-4" key={listing.id}>
            <div className="card shadow-lg">
                <img
                    src={listing.housingImages[0].url}
                    className="card-img-top p-2"
                    alt="..."
                    height="200px"
                    style={{ objectFit: 'cover' }}
                />
                <div className="card-body">
                    <p className="fw-bold fs-5 card-text">{listing.title}</p>
                    <p className="card-text">
                        Beds:{listing.bedRooms} / Baths:{Math.floor(listing.baths)} / Type:
                        {listing.housingType.name} / Cost per Night:$
                        {listing.costPerNight}
                    </p>
                    <button type="button" id={listing.id} className="btn btn-outline-dark" onClick={onClickEvent}>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

SwappingListCard.propTypes = {
    list: PropTypes.shape({
        id: PropTypes.number.isRequired,
        housingImages: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        bedRooms: PropTypes.number.isRequired,
        baths: PropTypes.number.isRequired,
        housingType: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        costPerNight: PropTypes.number.isRequired,
    }),
};

export default SwappingListCard;
