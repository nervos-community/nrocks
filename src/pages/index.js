import React, { Component } from 'react';
import Container from 'components/Container';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import { media } from 'theme';
import createOgUrl from 'utils/createOgUrl';
import Hero from 'components/Hero';
import CatIcons from 'components/CatIcons';
import Divider from 'components/Divider';
import CourseList from 'components/CourseList';

class Home extends Component {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <TitleAndMetaTags
          title="Nervos 学习站"
          ogUrl={createOgUrl('index.html')}
        />

        <div css={{ width: '100%' }}>
          <section
            css={{
              width: '100%',
              [media.lessThan('medium')]: { display: 'none' }
            }}
          >
            <Hero />
          </section>

          <CatIcons />

          <section css={{ paddingBottom: 32 }}>
            <Container>
              <CourseList title="最新课程" />
            </Container>
          </section>

          <Divider />
        </div>
      </Layout>
    );
  }
}

export default Home;
