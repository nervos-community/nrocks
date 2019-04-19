import React from 'react';
import Flex from 'components/Flex';
import MarkdownHeader from 'components/MarkdownHeader';
import NavigationFooter from 'templates/components/NavigationFooter';
import StickyResponsiveSidebar from 'components/StickyResponsiveSidebar';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import { sharedStyles, colors, media } from 'theme';
import createOgUrl from 'utils/createOgUrl';
import PlayCircleIcon from 'svg/PlayCircle';
import CreateIcon from 'svg/Create';
import { gitHubRepo } from 'site-constants';
import { Link } from 'gatsby';
import ArrowBackIcon from 'svg/ArrowBack';

const getPageById = (itemList, templateFile) => {
  if (!templateFile) {
    return null;
  }
  const linkId = templateFile.replace('.html', '');
  return itemList.find(item => item.id === linkId);
};

const MarkdownPage = ({
  createLink,
  enableScrollSync,
  ogDescription,
  location,
  markdownRemark,
  itemList,
  titlePostfix = ''
}) => {
  const titlePrefix = markdownRemark.frontmatter.title || '';

  const prev = getPageById(itemList, markdownRemark.frontmatter.prev);
  const next = getPageById(itemList, markdownRemark.frontmatter.next);
  const videoLink = itemList.filter(
    item => item.title === markdownRemark.frontmatter.title
  );

  const courseId = markdownRemark.fields.slug.split('/')[0];

  return (
    <Flex
      direction="row"
      grow="1"
      shrink="0"
      halign="stretch"
      css={{ width: '100%', flex: '1 0 auto', position: 'relative', zIndex: 0 }}
    >
      <TitleAndMetaTags
        ogDescription={ogDescription}
        ogUrl={createOgUrl(markdownRemark.fields.slug)}
        title={`${titlePrefix}${titlePostfix}`}
      />

      <StickyResponsiveSidebar
        enableScrollSync={enableScrollSync}
        createLink={createLink}
        location={location}
        itemList={itemList}
      />

      <div
        css={{
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: '#fafafa',
          width: '100%',
          [media.greaterThan('medium')]: {
            width: `calc(100% - 298px)`
          }
        }}
      >
        <div css={sharedStyles.articleLayout.container}>
          <div css={{ width: '100%' }}>
            <Link
              to={`/${courseId}`}
              css={{ display: 'flex', alignItems: 'center', marginTop: 24 }}
            >
              <ArrowBackIcon css={{ fill: colors.primary, width: 20 }} />
              <span
                css={{ color: colors.primary, paddingLeft: 4, fontWeight: 500 }}
              >
                返回
              </span>
            </Link>
            <div className="docSearch-content">
              <MarkdownHeader title={titlePrefix} />

              {videoLink.length && (
                <a
                  href={videoLink[0].video}
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 32,
                    textDecoration: 'none',
                    '& span': { marginLeft: 8 }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PlayCircleIcon css={{ width: 32, fill: colors.primary }} />
                  <span
                    css={{
                      lineHeight: 1.8,
                      color: colors.primary,
                      borderBottom: `1px solid ${colors.primary}`
                    }}
                  >
                    到 B 站观看视频
                  </span>
                </a>
              )}
              <div css={sharedStyles.articleLayout.content}>
                <div
                  css={[sharedStyles.markdown]}
                  dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
                />

                {(next || prev) && (
                  <NavigationFooter
                    location={location}
                    next={next}
                    prev={prev}
                  />
                )}

                {markdownRemark.fields.path && (
                  <div>
                    <hr
                      css={{
                        height: 1,
                        border: 'none',
                        marginTop: 24,
                        marginBottom: 24,
                        backgroundColor: '#f5f3f7'
                      }}
                    />
                    <a
                      css={sharedStyles.articleLayout.editLink}
                      href={`${gitHubRepo}/${markdownRemark.fields.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CreateIcon
                        css={{
                          width: 20,
                          fill: colors.primary,
                          marginRight: 4
                        }}
                      />
                      edit this page on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default MarkdownPage;
