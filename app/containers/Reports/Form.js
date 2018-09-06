import React from 'react';
import styled from 'styled-components';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const CourseForm = styled(FormControl)`
  width: 232px;
  height: 41px;
  margin-right: 16px;
`;

export class Form extends React.PureComponent {
  state = {
    curso: 'Big Data',
    modulo: 'Módulo 1',
  }

  handleChange = (ev, curso) => {
    this.setState({ curso });
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
            value={this.state.curso}
            onChange={this.handleChange}
            inputProps={{
              name: 'curso',
              id: 'curso-simple',
            }}
          >
            <MenuItem value="BigData">{bigData}</MenuItem>
            <MenuItem value="DataMining">{dataMining}</MenuItem>
            <MenuItem value="entrepreneurship">{entrepreneurship}</MenuItem>
            <MenuItem value="iot">iot</MenuItem>
          </Select>
        </CourseForm>
        <CourseForm>
          <InputLabel htmlFor="modulo">Module</InputLabel>
          <Select
            value={this.state.modulo}
            onChange={this.handleChangeModulo}
            inputProps={{
              name: 'modulo',
              id: 'modulo',
            }}
          >
            <MenuItem value="Modulo1">{module1}</MenuItem>
            <MenuItem value="Modulo2">{module2}</MenuItem>
            <MenuItem value="Modulo3">{module3}</MenuItem>
            <MenuItem value="Modulo4">{module4}</MenuItem>
          </Select>
        </CourseForm>
      </form>
    );
  }
}

export default Form;
