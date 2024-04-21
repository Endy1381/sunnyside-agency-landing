function handleClick(){
    let resp = document.querySelector('.ul-responsive')
    let norm = document.querySelector('.norm')
    if (resp.style.display === 'none') {
        resp.style.display = 'block';
        norm.style.display = 'none'; // Changed from norm.style.type
    } else {
        resp.style.display = 'none';
        norm.style.display = 'block'; // This line is correct
    }
}
