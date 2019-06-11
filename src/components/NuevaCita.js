import React, { Component } from 'react';

class NuevaCita extends Component {
    state = {
  
    }
    render() {
        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-tittle text-center mb-5">
                        Llena el formulario para crear nueva cita
                    </h2>

                    <form>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
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
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Teléfono Dueño</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="tel"
                                    className="form-control"
                                    placeholder="Teléfono"
                                    name="telefono"
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
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Correo electrónico</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="email"
                                    className="form-control"
                                    placeholder="email@email.com"
                                    name="correo"
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
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora de alta</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
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

export default NuevaCita;