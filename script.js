// =========================
// OPEN INVITATION
// =========================

function openInvitation() {

    const invitation = document.getElementById("invitation");

    invitation.style.display = "block";

    invitation.scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// COUNTDOWN
// =========================

const weddingDate = new Date("September 17, 2026 09:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;

    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


// =========================
// RSVP
// =========================

const rsvpForm = document.getElementById("rsvpForm");

rsvpForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for your RSVP! ❤️"
    );

    rsvpForm.reset();

});


// =========================
// MUSIC
// =========================

let musicPlaying = false;

function toggleMusic() {

    musicPlaying = !musicPlaying;

    const button = document.querySelector(".music-btn");

    if (musicPlaying) {

        button.textContent = "🔊";

        alert(
            "Music player ready! Add your wedding music file later."
        );

    } else {

        button.textContent = "🎵";

    }

}