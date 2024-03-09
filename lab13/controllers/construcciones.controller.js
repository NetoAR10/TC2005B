const construcciones = [
    {
        nombre: "casa", 
        imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg",
    }
];

exports.get_construir = (request, response, next) => {
    response.render('construir'); 
};

exports.post_construir = (request, response, next) => {
    console.log(request.body);
    construcciones.push(request.body);
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('construcciones', {
        construcciones: construcciones,
    });
}