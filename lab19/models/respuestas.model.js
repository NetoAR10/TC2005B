const db = require('../util/database');

module.exports = class Respuesta {
    constructor(mi_input_usuario, mi_output_problema) {
        this.input_usuario = mi_input_usuario;
        this.output_problema = mi_output_problema;
    }

    save() {
        return db.execute(
            'INSERT INTO respuesta (input, output username VALUES (?, ?, "KneeToe")',
            [this.input_usuario, this.output_problema]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM respuesta');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM respuesta WHERE id=?',
        [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
}