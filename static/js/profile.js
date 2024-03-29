const btnLogout = document.querySelector('button');
const spans = document.querySelectorAll('span');

window.addEventListener('load', async () => {
    //se ejecuta cuando termina de cargar la pagina('load' event)
    //va al archivo usuarios.routers  ruta /current
    const response = await fetch('/api/usuarios/current');
    
    if (response.status === 403) {
        alert('necesitas loguearte para ver esta info!');
        return (window.location.href = '/login');
    }
    
    const result = await response.json();
    const usuario = result.payload;
    
    spans[0].innerHTML = usuario.nombre;
    spans[1].innerHTML = usuario.apellido;
    spans[2].innerHTML = usuario.email;

    const ul = document.querySelector('nav ul');
    const liLogout = document.createElement('li');
    ul?.appendChild(liLogout);
    const aLogout = document.createElement('a');
    liLogout.appendChild(aLogout);
    aLogout.innerHTML = 'Logout';
    aLogout.href = '#';
    aLogout.addEventListener('click', logout);

    // @ts-ignore
    document.querySelector('div').style.display = 'block';
});

async function logout(event) {
    const response = await fetch('/api/sesiones/current', {
        method: 'DELETE',
    });

    if (response.status === 200) {
        window.location.href = '/login';
    } else {
        const error = await response.json();
        alert(error.message);
    }
}
