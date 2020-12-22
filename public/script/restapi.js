window.addEventListener('load', function (e) {
    ////Delete movie
    const DelMovie = ()=>{
        fetch(window.location.href, {method: 'DELETE'})
        .then(res =>{
            return res.json()
        })
        .then((data) =>{
            console.log(data);
            if(data.success === true){
                window.location = '/'
            }
            else{
                alert(`При удаление фильма возникла ошибка`)
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }
    deleteMov.addEventListener('click', DelMovie);
    ////Delete movie

    ////Edit movie
    form.addEventListener('submit', async function (e) {
        e.preventDefault()
        fetch(window.location.href, {
            method: 'PUT', 
            body: new FormData(form)
        })
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            if(data.success === true){
                window.location = window.location.href
            }
            else{
                alert(`У вас возникла ошибка при изменении фильма ${data.err}`)
            }
        })
        
    });
});