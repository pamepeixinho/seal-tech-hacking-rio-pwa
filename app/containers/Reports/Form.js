import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { changeCourse, changeModule } from './actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectSelectedCourse, makeSelectSelectedModule } from './selectors';

const CourseForm = styled(FormControl)`
  width: 232px;
  height: 41px;
  margin-right: 16px;
`;

export class Form extends React.PureComponent {
  handleCourse = (ev) => {
    this.props.dispatch(changeCourse(ev.target.value));
  }

  handleModule = (ev) => {
    this.props.dispatch(changeModule(ev.target.value));
  }

  render() {
    const bigData = 'Big Data';
    const dataMining = 'Data mining';
    const entrepreneurship = 'entrepreneurship';
    const module1 = 'Module 1';
    const module2 = 'Module 2';
    const module3 = 'Module 3';
    const module4 = 'Module 4';

    return (
      <form autoComplete="off">
        <CourseForm>
          <InputLabel htmlFor="curso-simple">Course</InputLabel>
          <Select
            value={this.props.selectedCourse}
            onChange={this.handleCourse}
            inputProps={{
              name: 'curso',
              id: 'curso-simple',
            }}
          >
            <MenuItem value="0">{bigData}</MenuItem>
            <MenuItem value="1">{dataMining}</MenuItem>
            <MenuItem value="2">{entrepreneurship}</MenuItem>
            <MenuItem value="3">iot</MenuItem>
          </Select>
        </CourseForm>
        <CourseForm>
          <InputLabel htmlFor="modulo">Module</InputLabel>
          <Select
            value={this.props.selectedModule}
            onChange={this.handleModule}
            inputProps={{
              name: 'modulo',
              id: 'modulo',
            }}
          >
            <MenuItem value="0">{module1}</MenuItem>
            <MenuItem value="1">{module2}</MenuItem>
            <MenuItem value="2">{module3}</MenuItem>
            <MenuItem value="3">{module4}</MenuItem>
          </Select>
        </CourseForm>
      </form>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectedCourse: makeSelectSelectedCourse(),
  selectedModule: makeSelectSelectedModule(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Form);
