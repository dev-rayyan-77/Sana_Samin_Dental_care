
    const faqBoxes = document.querySelectorAll(".faq-box");

    faqBoxes.forEach((box) => {
        const button = box.querySelector(".faq-question");
        const icon = button.querySelector("i");

        button.addEventListener("click", () => {
            const isOpen = box.classList.contains("active");

            faqBoxes.forEach((item) => {
                item.classList.remove("active");

                const itemIcon = item.querySelector(".faq-question i");
                itemIcon.classList.remove("fa-minus");
                itemIcon.classList.add("fa-plus");
            });

            if (!isOpen) {
                box.classList.add("active");
                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");
            }
        });
    });