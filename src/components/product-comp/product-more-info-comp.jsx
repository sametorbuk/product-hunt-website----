import './product-more-info-comp.css';
import {
  faComment,
  faBookmark,
  faShare,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import UserCommmentComp from './user-comment-comp';
import PropTypes from 'prop-types';

export default function ProductMoreInfoComponent(props) {
  const { photo, introduction, name, explanation, logo } = props;

  return (
    <div className="product-more-info">
      <img style={{ width: '4rem' }} src={logo} alt="" />
      <div className="product-more-info-title-row1">
        <div className="product-more-info-title-row1-left">
          <h3 style={{ margin: '0' }}>{name}</h3>
          <p>{explanation}</p>
        </div>

        <button className="visit-btn">Visit</button>
        <button className="upvote-btn">Upvote</button>
      </div>

      <div className="product-more-info-interaction-line-div">
        <p style={{ flex: '1' }}>Payment Required</p>
        <div className="product-more-info-interaction-line-div-interaction-btns">
          <button>
            <FontAwesomeIcon style={{ marginRight: '8px' }} icon={faComment} />
            Discuss
          </button>
          <button>
            <FontAwesomeIcon style={{ marginRight: '8px' }} icon={faBookmark} />
            Collect
          </button>
          <button>
            <FontAwesomeIcon style={{ marginRight: '8px' }} icon={faShare} />
            Share
          </button>
          <button>
            <FontAwesomeIcon style={{ marginRight: '8px' }} icon={faChartSimple} />
            Stats
          </button>
        </div>
      </div>

      <p className="product-introduction">{introduction}</p>

      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        Launched in
        <button className="options-btn">Social media</button>
        <button className="options-btn">Artificial Intelligence</button>
        <button className="options-btn">Video</button>
        by
        <p style={{ color: 'blue' }}>BlitsToksAI</p>
      </p>

      <div className="commenters-prof-photo-div">
        {photo.map((item, index) => (
          <div key={index} className="commenters-photo-row">
            {item.map((link, idx) => (
              <img key={idx} className="commenters-photo" src={link} alt="" />
            ))}
          </div>
        ))}
      </div>

      <div className="comment-area">
        <img
          className="commenters-photo"
          src="https://ph-static.imgix.net/guest-user-avatar.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=36&h=36&fit=crop&dpr=2"
          alt=""
        />
        <input
          className="comment-area-input"
          type="text"
          placeholder="What do you think"
        />
        <button>Login Comment</button>
      </div>

      <UserCommmentComp photo={photo} />
    </div>
  );
}


ProductMoreInfoComponent.propTypes = {
  photo: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  introduction: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
 