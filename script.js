document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myUL').addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    });

    document.getElementById('myInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            newElement();
        }
    });
});

function newElement() {
    const inputValue = document.getElementById('myInput').value.trim();
    
    if (inputValue === '') {
        alert("Por favor, digite algo!");
        return;
    }

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = inputValue;

    const span = document.createElement('span');
    span.className = 'close';
    span.innerHTML = '&times;';
    span.onclick = function() {
        this.parentElement.remove();
    };

    li.appendChild(span);
    document.getElementById('myUL').appendChild(li);
    document.getElementById('myInput').value = '';
}