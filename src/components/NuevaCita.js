import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';


const stateInicial = {
    cita : {
        mascota : '',
        propietario : '',
        telefono : '',
        dni : '',
        correo : '',
        fecha : '',
        hora : '',
        sintomas : ''
    },
    error: false
}

class NuevaCita extends Component {
    state = { ...stateInicial }


    //Cuando el usuario escribe en los inputs
    handleChange = e => {

        //colocar lo que el usuario escribe en el state
        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }


    //Cuando el usuario envie el formulario
    handleSubmit = e => {
        e.preventDefault();

        //extraer los valores del state
        const { mascota, propietario, telefono, dni, correo, fecha, hora, sintomas } = this.state.cita;
        
        //validar  que todos los campos estén llenos
        if(mascota === '' || propietario === '' ||
           dni === '' || telefono === '' || correo === '' 
           || fecha === '' || hora === '' || sintomas === '') {
               this.setState({
                   error: true
               });

               //detener la ejecucion
               return;
           }

        // generar objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();
        

        // agregar la cita al state de App
        this.props.crearNuevaCita(nuevaCita)


        //colocar en el state la cita inicial
        this.setState({
            ...stateInicial
        })
    }


    render() {

        const { error } =  this.state;


        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-tittle text-center mb-5">
                        Llena el formulario para crear nueva cita
                    </h2>


                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center"> Todos los campos son obligatorios</div> : null }

                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div> {/* form-group */}


                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Teléfono Dueño</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="tel"
                                    className="form-control"
                                    placeholder="Teléfono"
                                    name="telefono"
                                    onChange={this.handleChange}
                                    value={this.state.cita.telefono}
                                />
                            </div>
                        </div> {/* form-group */}


                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">DNI </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="DNI"
                                    name="dni"
                                    onChange={this.handleChange}
                                    value={this.state.cita.dni}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Correo electrónico</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="email"
                                    className="form-control"
                                    placeholder="email@email.com"
                                    name="correo"
                                    onChange={this.handleChange}
                                    value={this.state.cita.correo}
                                />
                            </div>
                        </div> {/* form-group */}


                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha de alta</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora de alta</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div> {/* form-group */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los síntomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                />
                            </div>
                        </div> {/* form-group */}

                        <input type="submit" className="py-3 mt-2 btn-success btn-block" value="Agregar Nueva Cita" 
                        
                        />


                    </form>
                </div>
            </div>
        );
    }
}
NuevaCita.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired
}
export default NuevaCita;