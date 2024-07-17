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

  const toggleModal2 = (e) => {
    const value = e.target.innerText
    if (value == firstbtn || value == secondbtn || value == thirdbtn) {
      return
    } else {
      setIsModal2Open(!isModal2Open)
    };
  }


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

    } else {
      document.removeEventListener('mousedown', handleClickOutside);

    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);


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
              style={{ width: '2rem' }}
              src="data:image/png;base64,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"

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