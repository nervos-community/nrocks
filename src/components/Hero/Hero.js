import React from 'react';
import LogoOnly from 'svg/LogoOnly';
import { colors, media } from 'theme';
import Container from 'components/Container';

const s = {
  hero: {
    position: 'relative',
    height: 500,
    [media.greaterThan('xlarge')]: {
      height: 650
    },
    [media.greaterThan('xxlarge')]: {
      height: 700
    },
    overflow: 'hidden',
    backgroundColor: '#ffffff'
  },
  bgShape: {
    position: 'absolute',
    backgroundColor: colors.primary,
    backgroundImage: `linear-gradient(100deg, ${colors.primary}, #ffffff)`,
    borderRadius: '8%',
    width: '50%',
    top: -300,
    right: -110,
    height: 600,
    [media.greaterThan('xlarge')]: {
      top: -350,
      right: -110,
      height: 800
    },
    transform: 'skew(3deg,30deg)',
    opacity: 1
  },
  bgCircle: {
    position: 'absolute',
    backgroundColor: colors.primary,
    backgroundImage: `linear-gradient(100deg, #84e8bb, #45c289)`,
    opacity: 0.2,
    borderRadius: '100%',
    top: -200,
    left: -150,
    height: 400,
    width: 400,
    [media.greaterThan('xlarge')]: {
      top: -300,
      left: -250,
      height: 600,
      width: 600
    },
    [media.greaterThan('xxlarge')]: {
      top: -400,
      left: -350,
      height: 800,
      width: 800
    }
  },
  bgCircleTwo: {
    position: 'absolute',
    backgroundColor: colors.primary,
    backgroundImage: `linear-gradient(100deg, #84e8bb, #45c289)`,
    borderRadius: '100%',
    opacity: 0.8,
    top: 100,
    left: 180,
    height: 60,
    width: 60,
    [media.greaterThan('xlarge')]: {
      top: 150,
      left: 250,
      height: 80,
      width: 80
    },
    [media.greaterThan('xxlarge')]: {
      top: 150,
      left: 350,
      height: 100,
      width: 100
    }
  },
  content: {
    zIndex: 99,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 180,
    padding: '0 20px',
    width: '100%',
    left: '50%',
    marginLeft: '-50%'
  },
  left: {
    width: '50%',
    alignItems: 'center',
    display: 'flex'
  },
  imgWrap: {
    width: `calc(50% - 32px)`,
    '& img': {
      width: '100%'
    }
  },
  link: {
    color: colors.primary,
    textDecoration: 'none'
  },
  headline: {
    display: 'flex'
  },
  siteTitle: {
    lineHeight: '50px',
    marginLeft: 8,
    fontSize: '1.5rem'
  },
  caption: {
    fontSize: '0.875rem',
    color: `rgba(0, 0, 0, 0.87)`,
    marginLeft: 58,
    marginTop: 8,
    opacity: 0.7,
    maxWidth: 340,
    lineHeight: '1.71429em'
  }
};

const Hero = () => (
  <div css={s.hero}>
    <Container style={{ position: 'relative' }}>
      <div css={s.content}>
        <div css={s.left}>
          <div>
            <div css={s.headline}>
              <LogoOnly css={s.nlogo} width={50} height={50} />
              <div css={s.siteTitle}>Nervos 学习站</div>
            </div>
            <div css={s.caption}>
              本站视频课程服务开发者，目的在于帮助大家迅速掌握区块链基础知识并上手
              Nervos 相关应用开发。
            </div>
          </div>
        </div>
        <div css={s.imgWrap}>
          <img src="/poster.png" alt="poster" />
        </div>
      </div>
    </Container>

    <div css={s.bgShape} />
    <div css={s.bgCircle} />
    <div css={s.bgCircleTwo} />
  </div>
);

export default Hero;
