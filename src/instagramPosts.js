const urlPosts = "https://951p4oju.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22instagramPost%22%5D%7B%0A++%22id%22%3A+_id%2C%0A++%22img%22%3A+title.asset-%3Eurl%2C%0A++%22postLink%22%3A+postLink%0A%7D";

async function getPosts() {
    const images = document.querySelector(".redes-img");
    const response = await fetch(urlPosts);
    const { result: posts } = await response.json();
    console.dir(posts)

    posts.forEach(post => {
        const image = document.createElement("img");
        const a = document.createElement("a");
        image.src = post.img;

        a.appendChild(image);
        a.target = "_blank";
        a.href = post.postLink;

        images.appendChild(a);

        console.log(post);
        return post;
    })

}

getPosts();