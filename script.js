var confirmText = "Our website uses cookies. ";
var confirmSubtext = "By allowing us to use cookies, it will help us gather statistics to make our website even better.";

var cookies = confirm(confirmText + confirmSubtext);

if (cookies == true) {
    alert("Thank you for helping our website!");
} else {
    alert("Thank you for visiting our website.");
}