// -----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import cn from 'classnames';

/* Local */

// Components

// Images

// Styles
import './carousel.global.css';
import css from './upload.scss';

// -----------------------------------------------------------------------------

// NOTES

// UPLOADS SHOULD SHOW UPLOAD PROGRESS BAR AND PREVIEW/REMOVE AS IS SHOWN IN THE API DOCS BELOW
// https://uploadcare.com/cookbook/widget_visual/#uploaded-image-preview


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

class PlatformUpload1 extends React.PureComponent {
  submit = () => {
    /* intentionally empty for now */
  }

  render() {
    return (
      <div className={css.wrapper}>
        <Link to="/todo" className={css.closeX} />
        <div className={css.upload_title}>
          <input className={cn(css.input, css.center_text)} type="text" name="" placeholder="Add Upload Title" />
        </div>

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

          <div className={css.description}>
            <div className={css.description_title}>Description</div>
            <textarea className={css.text_area} type="text" name="" placeholder="Add a description (max 250 character)" />
          </div>

        </div>
      </div>
    );
  }
}
export default PlatformUpload1;
