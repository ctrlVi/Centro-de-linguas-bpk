const teacherCards = document.querySelector(".caixas");
const APIlink = "https://951p4oju.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22teachersCard%22%5D%7B%0A++%22id%22%3A+_id%2C%0A++%22gender%22%3A+gender%2C%0A++%22img%22%3A+teachersImg.asset-%3Eurl%2C%0A++%22teacherClass%22%3A+teacherClass%2C%0A++%22name%22%3A+name%2C%0A%7D%0A";

async function getTeacher() {
    const response = await fetch(APIlink);
    var {result: teachers} = await response.json();

    teachers.forEach(teacher => {
        var card = document.createElement("div");
        card.className = "box";
        var image = document.createElement("img");
        image.className = "img-profile";
        var name = document.createElement("div");
        name.className = "nome-professor";
        var materia = document.createElement("div");
        materia.className = "materia-professor";

        image.src = `${teacher.img}?h=150&w=150&fit=scale`;
        console.log(teacher.img);
        name.innerHTML = teacher.name;
        materia.innerHTML = teacher.teacherClass;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(materia);
        teacherCards.appendChild(card);
    });


    
    
}

getTeacher();