import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled from 'styled-components';

import MuiAppBar from '@material-ui/core/AppBar';
import MuiTabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import injectReducer from '../../utils/injectReducer';
import Reports from '../Reports';
import reducer from './reducer';
import { search } from './actions';

import Content from '../Content';

const AppBar = styled(MuiAppBar)`
  box-shadow: none;
  border-bottom: 1px solid #E7E7E7;
  padding-top: 16px;
  background: white;
`;

const Tabs = styled(MuiTabs)`
`;

const TAB_INDEX = {
  home: 0,
  content: 1,
  forum: 2,
  report: 3,
};

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    currentTab: 1,
  }

  handleChange = (evt, currentTab) => {
    this.setState({ currentTab });
  }

  render() {
    const { currentTab } = this.state;
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.currentTab}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="HOME" />
            <Tab label="CONTEÚDO" />
            <Tab label="FÓRUM" />
            <Tab label="RELATÓRIO" />
          </Tabs>
        </AppBar>
        {currentTab === TAB_INDEX.home && <div />}
        {currentTab === TAB_INDEX.content && <Content />}
        {currentTab === TAB_INDEX.content && <div />}
        {currentTab === TAB_INDEX.forum && <div />}
        {currentTab === TAB_INDEX.report && <Reports />}
      </div>
    );
  }
}

HomePage.propTypes = {
  search: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  search: () => dispatch(search()),
});

export default compose(
  injectReducer(
    { key: 'homePage', reducer },
  ),
  connect(null, mapDispatchToProps)
)(HomePage);
