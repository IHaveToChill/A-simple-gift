let clickCount = 0;

const phrases = [
    "Wait... are you sure? 🥺",
    "nah that's not right...",
    "try again 😭",
    "be serious...",
    "okay now you're just playing...",
    "okay last chance..."
];

let yesFontSize = 16;
let yesPaddingV = 14;
let yesPaddingH = 32;
let noScale = 1.0;

function handleNoClick() {
    if (clickCount < phrases.length) {
        document.getElementById("question").innerText = phrases[clickCount];
    }
    
    clickCount++;

    const yes = document.getElementById("yesBtn");
    const no = document.getElementById("noBtn");

    if (clickCount >= 5) {
        no.classList.add('fade-out');
        
        yes.style.fontSize = "36px";
        yes.style.padding = "24px 40px";
        yes.style.width = "100%";
        yes.style.borderRadius = "16px";
        
        setTimeout(() => {
            yes.classList.add('final-pulse');
        }, 300);

        document.getElementById("question").innerText = "okay last chance...";
        document.getElementById("question").style.color = "#ff4b72";
        
        setTimeout(() => {
            no.style.display = 'none';
        }, 300);
        return;
    }
    
    yesFontSize += 6;
    yesPaddingV += 4;
    yesPaddingH += 8;
    noScale -= 0.16;
    
    yes.style.fontSize = yesFontSize + "px";
    yes.style.padding = `${yesPaddingV}px ${yesPaddingH}px`;
    no.style.transform = `scale(${Math.max(noScale, 0.4)})`;
}

// --- THIS HANDLES THE DELAYED JUMP NOW ---
function selectYes() {
    // 1. Instantly switch to the success screen inside index.html
    document.getElementById('screenProposal').classList.remove('active');
    document.getElementById('screenSuccess').classList.add('active');
    
    // 2. Wait exactly 2.5 seconds (2500ms) so they can see the animation, then jump files!
    setTimeout(() => {
        window.location.href = "gifts.html";
    }, 2500); 
}
// ==========================================================================
// 🚀 LIQUID GLIDE PAGE INTERCEPTOR
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const vaultCards = document.querySelectorAll(".iso-card");

    vaultCards.forEach(card => {
        card.addEventListener("click", function (e) {
            // 1. Stop the instant page jump
            e.preventDefault();
            const destinationURL = this.getAttribute("href");

            // 2. Trigger the gorgeous CSS slide-up fade out
            document.body.classList.add("page-is-gliding");

            // 3. Let the animation play out for 680ms, then swap URLs seamlessly
            setTimeout(() => {
                window.location.href = destinationURL;
            }, 680);
        });
    });
});