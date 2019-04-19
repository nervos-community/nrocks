import React, { Component } from 'react';
import Flex from 'components/Flex';
import Section from './Section';
import { media } from 'theme';

class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeSection: props.defaultActiveSection
    };
  }

  render() {
    const { closeParentMenu, createLink, location, itemList } = this.props;

    return (
      <Flex
        type="nav"
        direction="column"
        halign="stretch"
        css={{
          width: '100%',
          paddingLeft: 20,
          position: 'relative',

          [media.greaterThan('largerSidebar')]: {
            paddingLeft: 40
          },

          [media.lessThan('small')]: {
            paddingBottom: 100
          }
        }}
      >
        {itemList.map((item, index) => (
          <Section
            createLink={createLink}
            isActive={true}
            key={index}
            location={location}
            onLinkClick={closeParentMenu}
            item={item}
          />
        ))}
      </Flex>
    );
  }

  _toggleSection(section) {
    this.setState(state => ({
      activeSection: state.activeSection === section ? null : section
    }));
  }
}

export default Sidebar;
