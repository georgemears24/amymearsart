fetch("photos/photos.json")
    .then(response => response.json())
    .then(images => {

        const params = new URLSearchParams(window.location.search);

        const id = params.get("id");
        const image = images.find(item => item.id === Number(id));

        console.log("URL id:", id);
        console.log("Images:", images);
        console.log(image)

        html = `

            <h1>${image.title}</h1>

            <p>${
                Array.isArray(image.description)
                    ? image.description.join("")
                    : image.description
            }</p>

            <div class="image-wrapper">

            <div class="image-container">

            <img 
                src="photos/${image.file}.jpg" 
                class="full-image"
            >

        `

        if (image.info) {

            let infoHtml = "";

            if (image.info) {

                for (const [position, text] of Object.entries(image.info)) {

                    infoHtml += `
                        <div class="image-info ${position}">
                            ${
                                Array.isArray(text)
                                    ? text.join("<br>")
                                    : text
                            }
                        </div>
                    `;
                }

            }

            html += `

            <div class="image-overlay"></div>

            ${infoHtml}

            </div>

            <button id="info-toggle" class="info-toggle">
                <span class="toggle-circle"></span>
                <span class="toggle-text">Reveal</span>
            </button>

            </div>
                        
            `

        }
        else {
            html += `</div> </div>`
        };

        document.getElementById("image-container").innerHTML = html

        if (image.info) {

            const wrapper = document.querySelector(".image-wrapper");
            const button = document.getElementById("info-toggle");

            button.addEventListener("click", () => {

                wrapper.classList.toggle("show-info");

                const text = button.querySelector(".toggle-text");

                if (wrapper.classList.contains("show-info")) {
                    text.textContent = "Hide";
                } else {
                    text.textContent = "Reveal";
                }

            });
        };

    });