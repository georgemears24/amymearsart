fetch("photos/photos.json")
    .then(response => response.json())
    .then(images => {

        console.log(images);

        buildGallery(images);

        const sidebar = document.getElementById("sections");

        const sections = [
            ...new Set(images.map(image => image.section))
        ];

        sections.forEach(section => {

            sidebar.innerHTML += `
                <a href="#${section.toLowerCase()}">
                    ${section}
                </a>
            `;

        });

    })
    .catch(error => {
        console.error("Could not load gallery:", error);
    });

function buildGallery(images) {

    const gallery = document.getElementById("gallery");

    const sections = [
        ...new Set(images.map(image => image.section))
    ];


    sections.forEach(section => {

        const sectionDiv = document.createElement("section");

        sectionDiv.className = "gallery-section";
        sectionDiv.id = section.toLowerCase();


        sectionDiv.innerHTML = `
            <h2>${section}</h2>
            <div class="image-grid"></div>
        `;


        gallery.appendChild(sectionDiv);


        const grid = sectionDiv.querySelector(".image-grid");


        images
            .filter(image => image.section === section)
            .forEach(image => {

                grid.innerHTML += `
                    <div class="image-card">

                        <img src="${image.file}"
                             alt="${image.title}">

                        <h3>${image.title}</h3>

                        <p>${image.description}</p>

                    </div>
                `;

            });

    });

}