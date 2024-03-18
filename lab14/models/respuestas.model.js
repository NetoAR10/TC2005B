const respuestas = [
    {
        input_usuario: "",
        output_problema: "",
    }
];

module.exports = class Respuesta {
    constructor(mi_input_usuario, mi_output_problema) {
        this.input_usuario = mi_input_usuario;
        this.output_problema = mi_output_problema;
    }

    save() {
        respuestas.push({
            input_usuario: this.input_usuario,
            output_problema: this.output_problema,
        });
    }

    static fetchAll() {
        return respuestas;
    }
}