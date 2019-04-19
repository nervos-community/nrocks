import React from 'react';
import isItemActive from 'utils/isItemActive';

class Section extends React.Component {
  render() {
    const { createLink, location, onLinkClick, item } = this.props;
    return (
      <div>
        <ul css={{ fontFeatureSettings: "'tnum'", marginBottom: 10 }}>
          <li
            key={item.id}
            css={{
              marginTop: 5,
              fontSize: '0.875rem',
              color: 'rgba(0, 0, 0, 0.87)'
            }}
          >
            {createLink({
              isActive: isItemActive(location, item),
              item,
              location,
              onLinkClick
            })}
          </li>
        </ul>
      </div>
    );
  }
}

export default Section;
