import React from 'react';
import { colors } from 'theme';
import Container from 'components/Container';

const Divider = ({ text }) => {
  return (
    <section
      css={{
        background: colors.primary,
        paddingTop: 45,
        paddingBottom: 45,
        backgroundColor: colors.primary,
        backgroundImage: `linear-gradient(60deg, #4bda99, #3da274)`
      }}
    >
      <Container>
        <div
          css={{
            color: colors.white,
            fontFamily: 'sans-serif',
            fontSize: '1.5rem',
            letterSpacing: 1,
            fontWeight: 500,
            textAlign: 'center'
          }}
        >
          {text ? text : '欢迎来到 Nervos 学习站'}
        </div>
      </Container>
    </section>
  );
};

export default Divider;
