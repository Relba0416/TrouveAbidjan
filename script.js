document.getElementById('form-objet').addEventListener('submit', async (e) => {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const lieu = document.getElementById('lieu').value;
    const indices = document.getElementById('indices').value;

    const response = await fetch('/publier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, lieu, indices }),
    });
    alert(await response.text());
});

document.getElementById('form-recherche').addEventListener('submit', async (e) => {
    e.preventDefault();
    const motCle = document.getElementById('motCle').value;

    const response = await fetch(`/rechercher?motCle=${motCle}`);
    const resultats = await response.json();
    const resultatsDiv = document.getElementById('resultats');
    resultatsDiv.innerHTML = resultats.map(objet => `
        <div>
            <h3>${objet.description}</h3>
            <p>Lieu : ${objet.lieu}</p>
            <p>Indices : ${objet.indices}</p>
        </div>
    `).join('');
});