import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from 'components/Layout';
import Container from 'components/Container';
import HeroDiv from 'svg/HeroDiv';
import { colors, media } from 'theme';
import Divider from 'components/Divider';

const s = {
  root: {
    backgroundColor: '#ffffff',
    width: '100%'
  },
  header: {
    padding: `80px 0 96px`,
    [media.greaterThan('medium')]: {
      paddingBottom: 120
    },
    [media.greaterThan('xlarge')]: {
      paddingBottom: 144
    },
    backgroundColor: colors.primary,
    backgroundImage: `linear-gradient(60deg, #4bda99, #3da274)`,
    position: 'relative'
  },
  date: {
    backgroundColor: '#3da274',
    padding: 4,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 4,
    width: 80,
    fontSize: 12
  },
  headline: {
    color: '#fff',
    fontWeight: 600,
    marginBottom: 16,
    fontSize: '1.5rem',
    lineHeight: '1.35417em'
  },
  subtitle: {
    color: '#fff',
    marginBottom: 16,
    fontSize: '0.875rem',
    lineHeight: '1.71429em'
  },
  listItem: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: `16px 8px`,
    '&:hover': {
      backgroundColor: '#F2F7F4'
    }
  },
  icon: {
    color: 'rgba(33, 33, 33, 0.8)',
    '&:hover': {
      color: '#a7cbd0'
    }
  },
  hero: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 'auto',
    marginBottom: -1,
    width: '100%'
  },
  number: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    border: `2px solid ${colors.primary}`,
    borderRadius: '50%',
    marginRight: 16,
    color: colors.primary,
    flexShrink: 0,
    fontSize: 12,
    [media.greaterThan('medium')]: {
      fontSize: 14,
      width: 36,
      height: 36
    },
    [media.greaterThan('xlarge')]: {
      fontSize: 16,
      width: 42,
      height: 42,
      marginRight: 24
    }
  },
  title: {
    fontSize: 16,
    [media.greaterThan('xlarge')]: {
      fontSize: 18
    }
  }
};

const Course = ({ pageContext, data, location }) => {
  const edge = data.allCourseYaml.edges.filter(
    edge => edge.node.id === pageContext.slug
  )[0];
  const course = edge.node;

  return (
    <Layout location={location}>
      <div css={s.root}>
        <div css={s.header}>
          <Container>
            <div
              css={{
                width: '100%',
                maxWidth: 620,
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <div css={s.headline}>{course.title}</div>
              <div css={s.subtitle}>{course.desc}</div>
              <div css={s.date}>{course.date}</div>
            </div>
          </Container>
          <HeroDiv css={s.hero} />
        </div>

        <Container>
          <div
            css={{
              width: '100%',
              maxWidth: 620,
              margin: '0 auto 64px'
            }}
          >
            {course.toc.map((item, index) => (
              <Link
                to={`/${course.id}/${item.id}.html`}
                css={s.listItem}
                key={item.id}
              >
                <div css={s.number}>{index}</div>
                <div css={s.title}>{item.title}</div>
              </Link>
            ))}
          </div>
        </Container>
        <Divider />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allCourseYaml {
      edges {
        node {
          id
          title
          desc
          date
          toc {
            id
            title
          }
        }
      }
    }
  }
`;

export default Course;
