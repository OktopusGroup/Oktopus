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
import Tag from 'components/platform/components/tag';

// Images
import Media from 'images/uploadmedia.png';
import Files from 'images/uploadfiles.png';

// Styles
import './carousel.global.css';
import css from './upload.scss';

// -----------------------------------------------------------------------------


const sliders = [

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

        <div className={css.media}>
          <div className={css.section_title}>Media</div>
          {/* ADD -> https://uploadcare.com/tutorials/widget_customization/#panel in place of img */}
          <img className={css.img} src={Media} alt="upload" />
        </div>

        <div className={css.downloads}>
          <div className={css.section_title}>Files</div>
          {/* ADD ->  https://uploadcare.com/tutorials/widget_customization/#panel in place of img */}
          <div className={css.uploader}>
            <img className={css.img} src={Files} alt="upload" />
          </div>
          <div className={css.files}>
            {/* UPLOADS SHOULD SHOW UPLOAD PROGRESS BAR AND PREVIEW/REMOVE AS IS SHOWN IN THE API DOCS BELOW
            https://uploadcare.com/cookbook/widget_visual/#uploaded-image-preview */}
            <div className="file_list">
              <div>filename.zip</div>
              <div>filename.zip</div>
              <div>filename.zip</div>
            </div>
          </div>
        </div>

        <div className={css.description}>
          <div className={css.section_title}>Description</div>
          <textarea className={css.text_area} type="text" name="" placeholder="Add a description (max 250 character)" />
        </div>

        <div className={css.tags}>
          <div className={css.section_title}>Tags 0/5</div>
          <input className={css.add_tag} type="text" placeholder="Add tag" />
          <Tag />

          <div className={css.section_title}>Categories 0/3</div>
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>

      </div>
    );
  }
}
export default PlatformUpload1;

