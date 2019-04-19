import React from 'react';
import ChainIcon from 'svg/Chain';
import DAppIcon from 'svg/DApp';
import CryptoIcon from 'svg/Crypto';
import ContractIcon from 'svg/Contract';
import Container from 'components/Container';
import { media } from 'theme';

const s = {
  root: {
    width: '100%',
    textAlign: 'center',
    paddingTop: 32,
    paddingBottom: 32
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    opacity: 0.7,
    marginTop: 16,
    fontSize: 16
  },
  icon: {
    width: 40,
    height: 40,
    [media.greaterThan('medium')]: {
      width: 50,
      height: 50
    },
    [media.greaterThan('xlarge')]: {
      width: 60,
      height: 60
    }
  }
};

const CatIcons = () => (
  <div css={s.root}>
    <Container>
      <div css={s.content}>
        <div>
          <ChainIcon css={s.icon} />
          <div css={s.title}>区块链</div>
        </div>
        <div>
          <DAppIcon css={s.icon} />
          <div css={s.title}>DApp</div>
        </div>
        <div>
          <ContractIcon css={s.icon} />
          <div css={s.title}>智能合约</div>
        </div>
        <div>
          <CryptoIcon css={s.icon} />
          <div css={s.title}>密码学</div>
        </div>
      </div>
    </Container>
  </div>
);

export default CatIcons;
