// ✅ استدعاء أداة كلمة المرور
function showPassword() {
    const length = parseInt(document.getElementById("passLength").value);
    if (isNaN(length) || length < 6) {
        alert("يرجى إدخال طول كلمة مرور صالح (6 أو أكثر).");
        return;
    }
    const password = generatePassword(length); // من password-tool.js
    document.getElementById("generatedPass").value = password;
}

// ✅ أداة فحص الروابط
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("linkForm");
    const resultDiv = document.getElementById("linkResult");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const url = document.getElementById("linkInput").value.trim();

        // محاكاة فحص الرابط
        if (url.startsWith("https://") && !url.includes("fake") && !url.includes("phish")) {
            resultDiv.style.color = "green";
            resultDiv.textContent = "✅ الرابط يبدو آمنًا (HTTPS ومقبول).";
        } else {
            resultDiv.style.color = "red";
            resultDiv.textContent = "⚠️ الرابط مشبوه! تحقق قبل فتحه.";
        }
    });
});
