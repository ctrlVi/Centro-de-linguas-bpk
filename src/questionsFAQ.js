const urlFAQ = "https://951p4oju.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22FAQquestions%22%5D%7B%0A++%22id%22%3A+_id%2C%0A++%22question%22%3A+title%2C%0A++%22questionContent%22%3A+questionContent%0A%7D%0A"
const div = document.querySelector(".layout");

async function getQuestionsFAQ() {
    try {
        const response = await fetch(urlFAQ);
        const { result: questions } = await response.json();

        questions.forEach(question => {
            const accordion = document.createElement("div");
            const accordionQuestion = document.createElement("div");
            const accordionAnswer = document.createElement("div");
            accordion.classList.add("accordion");
            accordionQuestion.classList.add("accordion__question");
            accordionAnswer.classList.add("accordion__answer");

            accordionQuestion.innerHTML = `<p>+ ${question.question}</p>`;
            accordionAnswer.innerHTML = `<p>${question.questionContent}</p>`;

            accordion.addEventListener("click", () => {
                accordion.classList.toggle("active");
            });

            accordion.appendChild(accordionQuestion);
            accordion.appendChild(accordionAnswer);
            div.appendChild(accordion);

        })
    } catch (error) {
        console.log(error);
    }

}



getQuestionsFAQ();