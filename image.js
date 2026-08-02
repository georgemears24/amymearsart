fetch("photos/photos.json")
    .then(response => response.json())
    .then(images => {

        const params = new URLSearchParams(window.location.search);

        const id = params.get("id");
        const image = images.find(item => item.id === Number(id));

        console.log("URL id:", id);
        console.log("Images:", images);
        console.log(image)

        document.getElementById("image-container").innerHTML = `

            <h1>${image.title}</h1>

            <p>${
                Array.isArray(image.description)
                    ? image.description.join("")
                    : image.description
            }</p>

            <img 
                src="photos/${image.file}.jpg" 
                class="full-image"
            >

        `;

    });