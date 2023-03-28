//Mettre le code JavaScript lié à la page photographer.html

async function getProfile() {
  try {
    const response = await fetch("/data/photographers.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Erreur HTTP " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displayProfile(photographers) {
  const photographersSection = document.querySelector(
    ".photographer_container"
  );

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);

    photographersSection.addEventListener(
      "click",
      function (e, id) {
        window.location.href = `/pages/photographer.html?id=${id}`;
      },
      false
    );
  });
}
