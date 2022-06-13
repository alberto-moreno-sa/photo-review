import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'services/TranslationService';
import Box from 'components/box';
import Container from 'components/container';
import Card from 'components/card';
import { Image, ImageWrapper, Wrapper } from 'components/image';
import Button from 'components/button';

const Review = ({ photo = null, onClick = () => null }) => {
  const { t } = useTranslation('common');

  return (
    <Container
      {...{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 0 0 0',
      }}
    >
      <Card
        {...{
          borderRadius: {
            _: 30,
            lg: 90,
          },
          p: {
            _: 30,
            lg: 60,
          },
          width: '100%',
          maxWidth: 570,
        }}
      >
        <ImageWrapper>
          {photo && Object.keys(photo).length > 0 ? (
            <Image
              data-testid={'photo'}
              src={photo.urls.regular}
              alt={photo.altDescription}
            />
          ) : null}
        </ImageWrapper>
        <Box
          {...{
            mt: 4,
            flexBox: true,
            justifyContent: 'space-around',
          }}
        >
          <Button
            data-testid="button-reject"
            onClick={() => onClick(false, photo)}
            accent
          >
            {t('review.reject')}
          </Button>
          <Button
            data-testid="button-approve"
            onClick={() => onClick(true, photo)}
          >
            {t('review.approve')}
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

Review.propTypes = {
  onClick: PropTypes.func.isRequired,
  photo: PropTypes.shape({
    id: PropTypes.string,
    altDescription: PropTypes.string,
    urls: PropTypes.shape({ regular: PropTypes.string }),
  }).isRequired,
};

export default Review;
