const form = document.getElementById("komentarForm");
const tabel = document.getElementById("footerData");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let nama = form.nama.value;
    let pesan = form.komentar.value;

    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${nama}</td>
        <td>${pesan}</td>
    `;

    tabel.appendChild(row);

    form.reset();
});
