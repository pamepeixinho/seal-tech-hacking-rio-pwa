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
    return (
      <form autoComplete="off">
        <CourseForm>
          <InputLabel htmlFor="curso-simple">Curso</InputLabel>
          <Select
            value={this.state.curso}
            onChange={this.handleChange}
            inputProps={{
              name: 'curso',
              id: 'curso-simple',
            }}
          >
            <MenuItem value="Big Data">Big Data</MenuItem>
            <MenuItem value="Data Mining">Data Mining</MenuItem>
            <MenuItem value="Empreendedorismo">Empreendedorismo</MenuItem>
            <MenuItem value="iot">iot</MenuItem>
          </Select>
        </CourseForm>
        <CourseForm>
          <InputLabel htmlFor="modulo">Módulo</InputLabel>
          <Select
            value={this.state.modulo}
            onChange={this.handleChangeModulo}
            inputProps={{
              name: 'modulo',
              id: 'modulo',
            }}
          >
            <MenuItem value="Módulo 1">Módulo 1</MenuItem>
            <MenuItem value="Módulo 2">Módulo 2</MenuItem>
            <MenuItem value="Módulo 3">Módulo 3</MenuItem>
            <MenuItem value="Módulo 4">Módulo 4</MenuItem>
          </Select>
        </CourseForm>
      </form>
    );
  }
}

export default Form;
