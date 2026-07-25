const faqItems = document.querySelectorAll(".faq-item");

console.log(faqItems,"These are all the Faq items")

faqItems.forEach(item => {
    console.log(item, "itmes in the loop")
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".toggle-icon");


    question.addEventListener("click", () => {

        const isOpen = item.classList.contains("active");
        console.log(isOpen, "Is item Open or Not")
        // Close all FAQs
        faqItems.forEach(faq => {
            faq.classList.remove("active");

            const i = faq.querySelector(".toggle-icon");
            i.classList.remove("fa-minus");
            i.classList.add("fa-plus");
        });

        // Open clicked FAQ
        if (!isOpen) {
            item.classList.add("active");
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
        } 

    });

});

