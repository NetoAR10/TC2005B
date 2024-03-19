module.exports = (request, response, next) => {

    let can_ans = false;
    for (let permiso of request.session.permisos) {
        if(permiso.funcion == 'contestar') {
            can_ans = true;
        }
    }

    if (can_ans) {
        next();
    } else {
        return response.redirect('/users/logout');
    }
}