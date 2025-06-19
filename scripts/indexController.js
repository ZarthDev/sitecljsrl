class IndexController {
    verifyEvents ( ) {
        let eventsCard = document.getElementsByClassName("cljEventCard");

        if (eventsCard.length === 0) {
            let eventsRow = document.getElementById("eventsRow");
            eventsRow.innerHTML = "<h2 class='text-light pt-3 pb-1'>Não Há Eventos Próximos</h2> <br> <p class='text-light'>Fique atento às nossas redes sociais para novidades!</p>";
        }
    }
}