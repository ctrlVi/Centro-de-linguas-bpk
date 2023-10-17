const url = "https://951p4oju.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22coordinatorCard%22%5D%7B%0A++%22id%22%3A+_id%2C%0A++%22name%22%3A+name%2C%0A++%22gender%22%3A+gender%2C%0A++%22img%22%3A+coordinatorImg.asset-%3Eurl%0A%7D";

async function getCoordenadores() {
    const nome = document.querySelector(".name-coordenador");
    const imagem = document.querySelector(".img-coordenador");
    const genero = document.querySelector(".genero-coordenador");

    const response = await fetch(url);
    const { result: coordenador } = await response.json();

    nome.innerHTML = coordenador[0].name;

    imagem.src = `${coordenador[0].img}?h=250&w=250&fit=scale`;

    if(coordenador[0].gender == "Male") {
        genero.innerHTML = "Coordenador";
    }else if(coordenador[0].gender == "female") {
        genero.innerHTML = "Coordenadora";} else {
        genero.innerHTML = "Coordenadore";}

    console.log(coordenador)
    
}

getCoordenadores();