import { useEffect, useState } from 'react';
import { cacheConfig } from 'configs';
import { wrapper, useSelector } from 'store/store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'services/TranslationService';
import Head from 'next/head';

import Container from 'components/container';
import Box from 'components/box';

import useImages from 'components/hooks/useImages';

import Background from 'components/background';
import Typography from 'components/Typography';

import { useDispatch } from 'react-redux';
import { setRejected, setApprove } from 'store/metadata';

import Review from 'components/review';

import dynamic from 'next/dynamic';

const DynamiGalleryImage = dynamic(
  async () => {
    const com = await import('./../components/galleryImage/index');

    return com.GalleryImage;
  },
  { ssr: false }
);

import { useSpring, animated as a } from 'react-spring';

const Home = () => {
  const { t } = useTranslation('common');
  const [photo, setPhoto] = useState({});
  const [images, setImages] = useState([]);
  const { getRadom } = useImages();
  const dispatch = useDispatch();

  const approvedList = useSelector(state => state.metadata.approved);

  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRadom();

      setPhoto(result ? result[0] : {});
    };

    fetchData();
  }, []);

  const handleOnClick = async (isApprove, photo) => {
    if (!photo && Object.keys(photo).length <= 0) {
      return;
    }

    if (isApprove) {
      dispatch(setApprove(photo));
    } else {
      dispatch(setRejected(photo));
    }

    set(a => !a);
    const result = await getRadom();
    setPhoto(result ? result[0] : {});

    setTimeout(() => {
      set(a => !a);
    }, 600);
  };

  return (
    <div>
      <main>
        <Box
          {...{
            py: {
              _: 56,
              md: 64,
              lg: 96,
            },
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <Background />
          <Container {...{ textAlign: 'center' }}>
            <Typography h1 {...{ paddingBottom: 60 }}>
              {t('title')}
            </Typography>
            <DynamiGalleryImage list={approvedList} />
            <a.div style={{ opacity: opacity.to(o => 1 - o), transform }}>
              <Review photo={photo} onClick={handleOnClick} />
            </a.div>
          </Container>
        </Box>
      </main>
    </div>
  );
};

Home.defaultProps = {};

export const getStaticProps = wrapper.getStaticProps(
  store =>
    async ({ locale }) => {
      console.log(locale);
      return {
        revalidate: cacheConfig,
        props: {
          ...(await serverSideTranslations(locale, ['common'])),
        },
      };
    }
);

export default Home;
