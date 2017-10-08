// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

/* Local */

// Components
import ProfileCard from 'components/platform/components/profileCard';
import Popularity from 'components/platform/components/popularity';

// Images

// Styles
import './carousel.global.css';
import css from './detail.scss';

// -----------------------------------------------------------------------------

const sliders = [
  {
    src: 'https://media.giphy.com/media/pa37AAGzKXoek/giphy.gif',
  },
  {
    src: 'https://media.giphy.com/media/9N8ThBNjc3GCs/giphy.gif',
  },
  {
    src: 'https://media.giphy.com/media/EHZ91qYnPtpSw/giphy.gif',
  },
  {
    src: 'https://media.giphy.com/media/pa37AAGzKXoek/giphy.gif',
  },
  {
    src: 'https://media.giphy.com/media/9N8ThBNjc3GCs/giphy.gif',
  },
  {
    src: 'https://media.giphy.com/media/EHZ91qYnPtpSw/giphy.gif',
  },
];

class PlatformDetail1 extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now */
  }

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.upload_title}>Upload Title</div>
        <div className={css.carousel}>
          <Carousel showStatus={false} showIndicators={false}>
            {sliders.map(slider => (
              <div key={slider.legend}>
                <img src={slider.src} alt={slider.legend} />
                <p>{slider.legend}</p>
              </div>
            ))}
          </Carousel>
        </div>

        <div className={css.upload_info}>

          <Link to="/todo"><div className={css.btn_download}>DOWNLOAD</div></Link>
          <div className={css.popularity}>
            <Popularity />
          </div>
          <div className={css.description}>
            <div className={css.description_title}>Description</div>
            <span className={css.description_text}>Keytar McSweeney Williamsburg, readymade
          leggings try-hard 90s street art letterpress hoodie occupy Wes Anderson Banksy.
          Keytar McSweeney Williamsburg, readymade leggings try-hard 90s street art
          letterpress hoodie occupy Wes Anderson Banksy.</span>
          </div>
          <div className={css.divider} />

          <div className={css.upload_details}>
            <Link to="/usernameProfile"><div className={css.username}>Username</div></Link>
            <div className={css.date}>2 mths ago</div>
            <Link to="/favorites" className={css.btn_favorite} alt="favorite icon" />
          </div>

        </div>

        <div className={css.bottom_section}>

          <div className={css.section_title}>More by Username</div>

          <div className={css.card_wrapper}>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>

          <div className={css.section_title}>Similar Items</div>
          <div className={css.card_wrapper}>
            <ProfileCard />
            <ProfileCard />
          </div>

        </div>
      </div>
    );
  }
}
export default PlatformDetail1;
