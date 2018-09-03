
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit',
        function () {console.log('Evento submit')}
    )
    document.querySelector('button').addEventListener('click',
        function () {console.log('Evento click')}
    )
})
