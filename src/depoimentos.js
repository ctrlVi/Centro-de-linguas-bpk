const url = "https://951p4oju.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22testimonyCard%22%5D%7B%0A++%22id%22%3A+_id%2C%0A++%22name%22%3A+name%2C%0A++%22email%22%3A+studentEmail%2C%0A++%22content%22%3A+testimonyContent%2C%0A++%22img%22%3A+studentImage.asset-%3Eurl%2C%0A++%22avaliation%22%3A+testimonyAvaliationStars%2C%0A%7D";
const testimonial_container = document.querySelector(".testimonial-box-container");



async function getDepoimetos() {
    const response = await fetch(url);
    const { result: depoimentos } = await response.json();

    depoimentos.forEach(depoimento => {
        const testimonial_box = document.createElement("div");
        testimonial_box.className = "testimonial-box";
        const box_top = document.createElement("div");
        box_top.className = "box-top";
        const profile = document.createElement("div");
        profile.className = "profile";
        const nameUser = document.createElement("div");
        nameUser.className = "name-user";
        const review = document.createElement("div");
        review.className = "reviews";
        const client_comment = document.createElement("div");
        client_comment.className = "client-comment";

        const image = document.createElement("img");
        image.className = "profile-img";
        const name = document.createElement("strong");
        name.className = "name-comment";
        const user = document.createElement("span");
        name.classList.add("user-comment");
        const star = document.createElement("i");
        star.className = "fas fa-star";
        const comment = document.createElement("p");
        comment.classList.add("client-comment");

        image.src = `${depoimento.img}?h=50&w=50&fit=scale`;
        name.innerHTML = depoimento.name;
        user.innerHTML = depoimento.email;
        comment.innerHTML = depoimento.content;

        testimonial_container.appendChild(testimonial_box);
        testimonial_box.appendChild(box_top);
        testimonial_box.appendChild(client_comment);
        box_top.appendChild(profile);
        box_top.appendChild(review);
        profile.appendChild(image);
        profile.appendChild(nameUser);
        nameUser.appendChild(name);
        nameUser.appendChild(user);

        for (let i = 0; i < createStar(depoimento.avaliation); i++) {
            review.appendChild(star.cloneNode(true));
        }
        client_comment.appendChild(comment);

        console.log(depoimento);
    })
}

function createStar(avaliation) {
    if (avaliation == "one-star") {
        return (1)
    }
    if (avaliation == "two-star") {
        return (2)
    }
    if (avaliation == "three-star") {
        return (3)
    }
    if (avaliation == "four-star") {
        return (4)
    }
    if (avaliation == "five-star") {
        return (5)
    }
}

getDepoimetos();