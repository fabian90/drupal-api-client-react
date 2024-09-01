class Record {
    constructor({ apellido, nombre, tipo_documento, numero_documento, correo, telefono, pais}) {
      this.apellido = apellido;
      this.nombre = nombre;
      this.tipoDocumentoNombre = tipo_documento;
      this.numeroDocumento = numero_documento;
      this.correo = correo;
      this.telefono = telefono;
      this.paisNombre = pais;
    }
  }
  
  export default Record;
  