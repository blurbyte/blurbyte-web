import React, {PropTypes} from 'react';

//common
import Image from './Image';

const FoldImage = ({url, alt, description}) => (
  <figure className="fold-image">
    <figcaption><span dangerouslySetInnerHTML={{__html: description}} /></figcaption>
    <div className="img-wrapper">
      <Image url={url} alt={alt} />
    </div>
  </figure>
);

FoldImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default FoldImage;
