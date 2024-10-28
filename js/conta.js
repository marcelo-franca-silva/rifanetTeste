document.getElementById('toggleArea').addEventListener('click', () => {
    const infoArea = document.getElementById('infoArea');
    infoArea.style.display = (infoArea.style.display === 'block') ? 'none' : 'block';
});
