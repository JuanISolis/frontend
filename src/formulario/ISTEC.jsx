import React, { useState } from "react";
import "./FormularioIS.css"; // Asegúrate de crear este archivo
// import logoIS from '../assets/logo.png'; // Importa el logo
import axios from "axios";

const EstudianteForm = () => {
  const [formData, setFormData] = useState({
    matricula_cancelada: "",
    nombres: "",
    apellidos: "",
    edad: "",
    celular: "",
    numero_telefonico: "",
    estudios: {},
    salud: {
      emergencias: {},
      discapacidad: {},
    },
    info_general: {
      familia: {},
      ingreso: {},
    },
    residencia: {},
    datos_estudiante: {},
    carrera: {},
    servicio_inst: {},
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, parentKey) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [parentKey]: {
        ...prevState[parentKey],
        [name]: value,
      },
    }));
  };

  const handleMultipleSelectChange = (e, category) => {
    const { options } = e.target;
    const values = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setFormData((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [e.target.name]: values,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/estudiantes", formData);
      console.log("Estudiante creado:", response.data);
    } catch (error) {
      console.error("Error al crear estudiante:", error);
    }
  };

  return (
    <div className="container">
      {/* <img src={logoIS} alt="Logo ISTEC" className="logo" /> Añadir logo */}
      <h1>SOLICITUD DE MATRÍCULA</h1>

      <div className="content">
        <p className="date">
          Santa Cecilia, <span>16-ago-24</span>
        </p>
        <p>Dr. Enrique Fuertes Grávalos</p>
        <p className="rector">RECTOR DEL ISTEC</p>
        <p>Presente.</p>

        <p>
          Sírvase conceder la autorización de matrícula en el Instituto
          Tecnológico Superior "CRECERMAS", adjunto los documentos prescritos en
          el Reglamento. Declaro que la información consignada se ajusta
          estrictamente a la verdad.
        </p>

        <p>
          Me comprometo a cumplir fielmente las normas y disposiciones
          contenidas en los Estatutos y Reglamentos del Instituto.
        </p>
      </div>

      <div className="firma">
        <p>De usted atentamente,</p>
        <p>(Firma)______________________</p>
      </div>

      <form onSubmit={handleSubmit} className="formulary">
        <div className="form-row">
          <label htmlFor="carrera">Carreras:</label>
          <select
            name="carrera"
            onChange={(e) => handleMultipleSelectChange(e, "carrera")}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="procesamiento">
              Tecnología Superior en Procesamiento de Alimentos
            </option>
            <option value="administración">
              Tecnología Superior en Administración
            </option>
            <option value="agroforestería">
              Tecnología Superior en Agroforestería
            </option>
            <option value="enfermería">
              Tecnología Superior en Enfermería
            </option>
            <option value="construcción">
              Tecnología Superior en Construcción
            </option>
            <option value="gastronomía">
              Tecnología Superior en Gastronomía
            </option>
            <option value="desarrollo de Software">
              Tecnología Superior en Desarrollo de Software
            </option>
            <option value="electromecánica">
              Tecnología Superior en Electromecánica Automotriz
            </option>
          </select>
        </div>
        <h2 className="text-xl font-semibold mt-6">Datos Personales:</h2>
        <div className="form-row">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="sexo">Sexo:</label>
          <select
            id="sexo"
            name="sexo"
            value={formData.datos_estudiante.sexo || ""}
            onChange={(e) => handleNestedChange(e, "datos_estudiante")}
          >
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="genero">Género:</label>
          <select
            id="genero"
            name="genero"
            value={formData.datos_estudiante.genero || ""}
            onChange={(e) => handleNestedChange(e, "datos_estudiante")}
          >
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="nacionalidad">Nacionalidad:</label>
          <input
            type="text"
            id="nacionalidad"
            name="nacionalidad"
            value={formData.datos_estudiante.nacionalidad || ""}
            onChange={(e) => handleNestedChange(e, "datos_estudiante")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="etnia">Etnia:</label>
          <select
            id="etnia"
            name="etnia"
            value={formData.datos_estudiante.etnia || ""}
            onChange={(e) => handleNestedChange(e, "datos_estudiante")}
          >
            <option value="">Seleccione</option>
            <option value="mestizo">Mestizo</option>
            <option value="indigena">Indígena</option>
            <option value="afrodescendiente">Afrodescendiente</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="cedula">Cédula:</label>
          <input
            type="text"
            id="cedula"
            name="cedula"
            value={formData.datos_estudiante.cedula || ""}
            onChange={(e) => handleNestedChange(e, "datos_estudiante")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="pueblo_nacionalidad">Pueblo y Nacionalidad:</label>
          <input
            type="text"
            id="pueblo_nacionalidad"
            name="pueblo_nacionalidad"
            value={formData.datos_estudiante.pueblo_nacionalidad || ""}
            onChange={(e) => handleNestedChange(e, "datos_estudiante")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fecha_nacimiento"
            value={formData.datos_estudiante.fecha_nacimiento || ""}
            onChange={(e) => handleNestedChange(e, "datos_estudiante")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="discapacidad">Discapacidad:</label>
          <select
            id="discapacidad"
            name="discapacidad"
            onChange={(e) => handleNestedChange(e, "salud")}
          >
            <option value="false">No</option>
            <option value="true">Sí</option>
          </select>
          <div className="form-row">
            <label htmlFor="porcentajeDiscapacidad">
              Porcentaje de Discapacidad:
            </label>
            <input
              type="number"
              id="porcentajeDiscapacidad"
              name="porcentajeDiscapacidad"
              value={formData.salud.discapacidad.porcentaje_discapacidad || ""}
              onChange={(e) => handleNestedChange(e, "salud")}
              min="0"
              max="100"
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="provincia_nacimiento">Provincia de Nacimiento:</label>
          <input
            type="text"
            id="provincia_nacimiento"
            name="provincia_nacimiento"
            value={formData.datos_estudiante.provincia_nacimiento || ""}
            onChange={(e) => handleNestedChange(e, "datos_estudiante")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="discapacidad">Tipo de Discapacidad:</label>
          <input
            type="text"
            id="discapacidad"
            name="discapacidad"
            value={formData.salud.discapacidad.tipo || ""}
            onChange={(e) => handleNestedChange(e, "salud")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="cantonNacimiento">Cantón de Nacimiento:</label>
          <input
            type="text"
            id="cantonNacimiento"
            name="cantonNacimiento"
            value={formData.datos_estudiante.canton_nacimiento || ""}
            onChange={(e) => handleNestedChange(e, "datos_estudiante")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="nroCarnet">Nro. Carnet:</label>
          <input
            type="text"
            id="nroCarnet"
            name="nroCarnet"
            value={formData.salud.nro_carnet || ""}
            onChange={(e) => handleNestedChange(e, "salud")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="estadoCivil">Estado Civil:</label>
          <select
            id="estadoCivil"
            name="estado_civil"
            value={formData.datos_estudiante.estado_civil || ""}
            onChange={(e) => handleNestedChange(e, "datos_estudiante")}
          >
            <option value="">Seleccione</option>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viudo">Viudo</option>
            <option value="unionLibre">Unión Libre</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="tipoSangre">Tipo de Sangre:</label>
          <select
            id="tipoSangre"
            name="tipoSangre"
            onChange={(e) => handleNestedChange(e, "salud")}
          >
            <option value="">Seleccione</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <h2 className="text-xl font-semibold mt-6">Residencia Habitual:</h2>
        <div className="form-row">
          <label htmlFor="provincia">Provincia:</label>
          <input
            type="text"
            id="provincia"
            name="provincia"
            value={formData.residencia.provincia || ""}
            onChange={(e) => handleNestedChange(e, "residencia")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="mail">mail:</label>
          <input type="email" id="mail" name="mail" placeholder="email" />
        </div>
        <div className="form-row">
          <label htmlFor="cantón">Cantón:</label>
          <input
            type="text"
            id="cantón"
            name="cantón"
            value={formData.residencia.canton || ""}
            onChange={(e) => handleNestedChange(e, "residencia")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="telefono">Telefóno:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.datos_estudiante.telefono || ""}
            onChange={(e) => handleNestedChange(e, "datos_estudiante")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="parroquia">Parroquia:</label>
          <input
            type="text"
            id="parroquia"
            name="parroquia"
            value={formData.residencia.parroquia || ""}
            onChange={(e) => handleNestedChange(e, "residencia")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="cel">Cel:</label>
          <input
            type="text"
            id="cel"
            name="cel"
            value={formData.celular || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="barrio">Barrio/Recinto:</label>
          <input
            type="text"
            id="barrio"
            name="barrio"
            value={formData.residencia.barrio_recinto || ""}
            onChange={(e) => handleNestedChange(e, "residencia")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="contacto">Nombre de Contacto:</label>
          <input
            type="text"
            id="contacto"
            name="nombre_contacto"
            value={formData.salud.emergencias.nombre_contacto || ""}
            onChange={(e) => handleNestedChange(e, "salud")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="emergencia">Contacto de Emergencia:</label>
          <input
            type="text"
            id="emergencia"
            name="contacto_emergencia"
            value={formData.salud.emergencias.contacto_emergencia || ""}
            onChange={(e) => handleNestedChange(e, "salud")}
          />
        </div>
        <h2 className="text-xl font-semibold mt-6">
          Información de la Institución Educativa donde concluyó su
          Bachillerato:
        </h2>
        <div className="form-row">
          <label htmlFor="colegio">Colegio:</label>
          <input
            type="text"
            id="colegio"
            name="colegio"
            value={formData.estudios.nom_colegio || ""}
            onChange={(e) => handleNestedChange(e, "estudios")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="tipo">Tipo:</label>
          <select
            id="tipo"
            name="tipo_colegio"
            onChange={(e) => handleMultipleSelectChange(e, "estudios")}
          >
            <option value="">Seleccione</option>
            <option value="fiscal">Fiscal</option>
            <option value="fiscomisional">Fiscomisional</option>
            <option value="privado">Privado</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="provincia">Provincia:</label>
          <input
            type="text"
            id="provincia"
            name="provincia"
            value={formData.estudios.provincia || ""}
            onChange={(e) => handleNestedChange(e, "estudios")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="cantón">Cantón:</label>
          <input
            type="text"
            id="cantón"
            name="cantón"
            value={formData.estudios.canton || ""}
            onChange={(e) => handleNestedChange(e, "estudios")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="ciudad">Ciudad del Colegio:</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={formData.estudios.ciudad || ""}
            onChange={(e) => handleNestedChange(e, "estudios")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="tecnico">Técnico en:</label>
          <input
            type="text"
            id="tecnico"
            name="tecnico"
            value={formData.estudios.titulo || ""}
            onChange={(e) => handleNestedChange(e, "estudios")}
          />
        </div>
        <h2 className="text-xl font-semibold mt-6">Datos Estadísticos:</h2>
        <div className="form-row">
          <label htmlFor="ocupacion">Ocupación:</label>
          <select
            id="ocupacion"
            name="ocupacion"
            value={formData.info_general.ocupacion || ""}
            onChange={(e) => handleNestedChange(e, "info_general")}
          >
            <option value="">Seleccione</option>
            <option value="fiscal">Fiscal</option>
            <option value="fiscomisional">Fiscomisional</option>
            <option value="privado">Privado</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="cargo">Cargo:</label>
          <input
            type="text"
            id="cargo"
            name="cargo"
            value={formData.info_general.cargo || ""}
            onChange={(e) => handleNestedChange(e, "info_general")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="lugar">Lugar de Trabajo:</label>
          <input
            type="text"
            id="lugar"
            name="lugar"
            value={formData.info_general.lugar_trabajo || ""}
            onChange={(e) => handleNestedChange(e, "info_general")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="telefono">Telefóno de su Lugar de Trabajo:</label>
          <input
            type="text"
            id="telefono"
            name="telefono_trabajo"
            value={formData.info_general.telefono_trabajo || ""}
            onChange={(e) => handleNestedChange(e, "info_general")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="ingresos">Sus Ingresos Emplea en:</label>
          <select
            id="ingresos"
            name="empleo_ingresos"
            value={formData.info_general.empleo_ingresos || ""}
            onChange={(e) => handleNestedChange(e, "info_general")}
          >
            <option value="">Seleccione</option>
            <option value="fiscal">Fiscal</option>
            <option value="fiscomisional">Fiscomisional</option>
            <option value="privado">Privado</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="recibe">Recibe el Bono de Desarrollo Humano :</label>
          <select
            id="recibe"
            name="bono"
            value={formData.info_general.bono || ""}
            onChange={(e) => handleNestedChange(e, "info_general")}
          >
            <option value="">Seleccione</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="familia_bono">
            Algún familiar recibe el bono de desarrollo humano :
          </label>
          <select
            id="familia_bono"
            name="familiar_bono"
            value={formData.info_general.familia.familiar_bono || ""}
            onChange={(e) => handleNestedChange(e, "familia")}
          >
            <option value="">Seleccione</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="origen">Origen de los Recursos:</label>
          <select
            id="origen"
            name="origen"
            value={formData.info_general.origen_recursos || ""}
            onChange={(e) => handleNestedChange(e, "info_general")}
          >
            <option value="">Seleccione</option>
            <option value="Trabajo">Trabajo</option>
            <option value="donado">Donado</option>
          </select>
        </div>
        <h2 className="text-xl font-semibold mt-6">
          Datos institucionales sobre salud:
        </h2>
        <div className="form-row">
          <label htmlFor="catastrofica">
            ¿Tiene alguna enfermedad catastrófica?
          </label>
          <input
            type="checkbox"
            id="catastrofica"
            name="catastrofica"
            value={formData.salud.catastrofica || false}
            onChange={(e) => handleNestedChange(e, "salud")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="enfermedad">Nombre de la enfermedad:</label>
          <input
            type="text"
            id="enfermedad"
            name="enfermedad"
            value={formData.salud.enfermedad || ""}
            onChange={(e) => handleNestedChange(e, "salud")}
          />
        </div>
        <h4>Seleccione si tiene alguna de estas enfermedades:</h4>
        <div className="form-row">
          <label htmlFor="diabetes">Diabetes</label>
          <input
            type="checkbox"
            id="diabetes"
            name="diabetes"
            value={formData.salud.diabetes || false}
            onChange={(e) => handleNestedChange(e, "salud")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="contagiosas">
            Herpes-Enfermedades contagiosas de la piel
          </label>
          <input
            type="checkbox"
            id="contagiosas"
            name="contagiosas"
            value={formData.salud.contagiosas || false}
            onChange={(e) => handleNestedChange(e, "salud")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="sida">VHI/Sida</label>
          <input
            type="checkbox"
            id="sida"
            name="sida"
            value={formData.salud.vih_sida || false}
            onChange={(e) => handleNestedChange(e, "salud")}
          />
        </div>
        <h2 className="text-xl font-semibold mt-6">
          Datos institucionales sobre los servicios:
        </h2>
        <h4>Seleccione los servicios que hará uso:</h4>
        <div className="form-row">
          <label htmlFor="ludoteca">Ludoteca</label>
          <input
            type="checkbox"
            id="ludoteca"
            name="ludoteca"
            value={formData.servicio_inst.ludoteca || false}
            onChange={(e) => handleNestedChange(e, "servicio_inst")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="villas">Villas de Hospedaje</label>
          <input
            type="checkbox"
            id="villas"
            name="villas"
            value={formData.servicio_inst.villas || false}
            onChange={(e) => handleNestedChange(e, "servicio_inst")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="autobus">Servicio de Autobús</label>
          <input
            type="checkbox"
            id="autobus"
            name="autobus"
            value={formData.servicio_inst.autobus || false}
            onChange={(e) => handleNestedChange(e, "servicio_inst")}
          />
        </div>
        <div className="form-row">
          <label htmlFor="alquiler">Alquiler de Computadoras</label>
          <input
            type="checkbox"
            id="alquiler"
            name="alquiler"
            value={formData.servicio_inst.alquiler || false}
            onChange={(e) => handleNestedChange(e, "servicio_inst")}
          />
        </div>
        <div className="button-group">
          <button type="submit">Guardar y Continuar</button>
        </div>
      </form>
    </div>
  );
};

export default EstudianteForm;
