import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import withWidth from '@material-ui/core/withWidth'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-static'
import { HEADER_HEIGHT } from '../../constants/GlobalStyle'
import AppSearch from './AppSearch'

const styles = theme => ({
  appBar: { backgroundColor: '#eff3f6' },
  toolbar: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between'
  },
  home: {
    textDecoration: 'none'
  }
})

class Header extends Component {
  render() {
    const { classes: s, width } = this.props
    const elevation = width === 'xs' || width === 'sm' ? 1 : 0
    return (
      <AppBar className={s.appBar} elevation={elevation} position="fixed">
        <Toolbar className={s.toolbar}>
          <Link to="/" className={s.home}>
            <Typography variant="subheading">首页</Typography>
          </Link>
          <AppSearch />
        </Toolbar>
      </AppBar>
    )
  }
}

export default compose(
  withStyles(styles),
  withWidth()
)(Header)
