// Portfolio Norbert Aziamadji
// Simple console log – aucune donnée collectée, aucun tracking

(function () {
    console.log("Portfolio Norbert Aziamadji – Version 2.2.0 | Design modernisé, projets intégrés");

    // Optionnel : ajouter une classe active au lien de navigation courant
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
})();