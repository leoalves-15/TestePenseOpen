window.onload = () => {
    const citys = document.getElementById('city')
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
    .then(res => res.json())
    .then(cityAPI => {
        cityAPI.map(cityMAP => {
            const option = document.createElement('option');
            option.setAttribute('value', cityMAP.id);
            option.textContent = cityMAP.nome;
            citys.appendChild(option);
        })
    })
} 