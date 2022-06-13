import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation, Trans } from 'services/TranslationService';

import Box from 'components/box';
import Container from 'components/container';
import { Img } from 'components/slider/styled.components';
import Slider, { Slide } from 'components/slider';
import Typography from 'components/Typography';

export const GalleryImage = ({ list = [] }) => {
  const { t } = useTranslation('common');

  return (
    <Container
      data-testid={'gallery-image'}
      {...{
        margin: 0,
        padding: 0,
      }}
    >
      <Typography
        data-testid={'gallery-image-typography'}
        h3
        {...{ textAlign: 'left', paddingBottom: 16 }}
      >
        <Trans
          i18nKey="galleryImage.title"
          values={{
            count: list.length,
          }}
        />
      </Typography>
      <Container
        data-testid={'gallery-image-slider'}
        {...{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px 0 0 0',
          borderTop: '1px solid',
        }}
      >
        <Slider list={list}></Slider>
      </Container>
    </Container>
  );
};

GalleryImage.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      altDescription: PropTypes.string,
      urls: PropTypes.shape({ regular: PropTypes.string }),
    })
  ).isRequired,
};
