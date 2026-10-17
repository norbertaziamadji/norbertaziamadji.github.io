// Portfolio Norbert Aziamadji
// Simple console log – aucune donnée collectée, aucun tracking

(function () {
    console.log("Portfolio Norbert Aziamadji - 2.3.0 → Ajout de Sonazia (Android) avec galerie de captures");

    // Optionnel : ajouter une classe active au lien de navigation courant
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
})();