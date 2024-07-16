import './product-component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCaretUp, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faApple, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import ProductMoreİnfoComponent from './product-more-info-comp';
import PropTypes from 'prop-types';
import React from 'react';

export default function ProductComponent(props) {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  const {
    logo,
    name,
    explanation,
    count,
    firstbtn,
    secondbtn,
    thirdbtn,
    photo,
    introduction,
  } = props;

  const toggleModal1 = () => setIsModal1Open(!isModal1Open);
  const toggleModal2 = () => setIsModal2Open(!isModal2Open);

  const handleClickOutside = (event) => {
    if (
      event.target.closest('.signup-to-vote-screen') === null &&
      event.target.closest('.product-more-info') === null
    ) {
      setIsModal1Open(false);
      setIsModal2Open(false);
    }
  };

  useEffect(() => {
    if (isModal1Open || isModal2Open) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleClickOutside);
    };
  }, [isModal1Open, isModal2Open]);

  return (
    <div className="product-main-div">
      <div onClick={toggleModal2} className="product-main-div-left">
        <img style={{ width: '4rem' }} src={logo} alt="" />
        <div className="product-component-center">
          <div className="product-component-center-row1">
            <p>{name} —</p>
            <p style={{ marginLeft: '8px' }}>{explanation}</p>
            <FontAwesomeIcon style={{ marginLeft: '7px' }} icon={faArrowRightFromBracket} />
          </div>
          <div className="product-component-center-row2">
            <p>
              {count}
              <FontAwesomeIcon icon={faComment} style={{ color: '#616161' }} />
            </p>
            <p className="product-component-center-row2-p">{firstbtn}</p>
            <p className="product-component-center-row2-p">{secondbtn}</p>
            <p className="product-component-center-row2-p">{thirdbtn}</p>
          </div>
        </div>
      </div>

      {isModal2Open && (
        <ProductMoreİnfoComponent
          photo={photo}
          introduction={introduction}
          logo={logo}
          explanation={explanation}
          name={name}
        />
      )}

      <button onClick={toggleModal1} className="product-component-right-btn">
        <FontAwesomeIcon style={{ fontSize: '2rem' }} icon={faCaretUp} />
      </button>

      {isModal1Open && (
        <div className="signup-to-vote-screen">
          <img
            src="https://ph-static.imgix.net/category-tech/kitty.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=100&h=92&fit=max&dpr=2"
            alt=""
          />
          <h3>Sign up to vote</h3>
          <p>
            Join our community of friendly folks discovering and sharing the latest products in tech.
          </p>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#ffffffb8',
              height: '3rem',
              paddingLeft: '3rem',
              paddingRight: '4rem',
              borderRadius: '5px',
              border: '1px solid gray',
            }}
          >
            <img
              style={{ width: '3rem' }}
              src="data:image/png;base64,..."
              alt=""
            />{' '}
            Sign with Google
          </button>
          <div className="social-media-btns">
            <button>
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#74C0FC', fontSize: 'x-large' }} />
            </button>
            
            <button>
              <FontAwesomeIcon icon={faFacebook} style={{ color: 'rgb(0 99 178 / 94%)', fontSize: 'x-large' }} />
            </button>
            <button>
              <FontAwesomeIcon icon={faApple} style={{ color: 'black', fontSize: 'xx-large' }} />
            </button>
            <button>
              <FontAwesomeIcon icon={faLinkedin} style={{ color: 'hsla(242, 88.4%, 45.3%, 1)', fontSize: 'x-large' }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

ProductComponent.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  firstbtn: PropTypes.string.isRequired,
  secondbtn: PropTypes.string.isRequired,
  thirdbtn: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
};