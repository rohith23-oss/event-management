// Budget Calculator Function
function calculateBudget() {
    const eventType = document.getElementById("eventType").value;
    const guests = parseInt(document.getElementById("guests").value);
    let baseCost = 0;

    // Base cost based on event type
    if (eventType === "wedding") baseCost = 5000;
    else if (eventType === "corporate") baseCost = 3000;
    else if (eventType === "birthday") baseCost = 1500;

    // Cost per guest
    const guestCost = 50;
    let totalCost = baseCost + (guests * guestCost);

    // Additional Services
    if (document.getElementById("catering") && document.getElementById("catering").checked) totalCost += 1000;
    if (document.getElementById("dj") && document.getElementById("dj").checked) totalCost += 500;
    if (document.getElementById("decoration") && document.getElementById("decoration").checked) totalCost += 800;

    document.getElementById("budgetResult").textContent = `Estimated Total Cost: $${totalCost}`;
}

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
    document.getElementById("contactForm").reset();
});

/* Fade-in Animation */
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    // Initial fade-in for sections that are in view on load
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});

// Scrolling Animation
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});
