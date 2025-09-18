// ✅ استبيان الحماية - حساب النتيجة وعرض التوصيات
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("protectionForm");
    const resultDiv = document.getElementById("protectionResult");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = new FormData(form);
        let score = 0;
        let total = 6;
        const recs = [];

        if (data.get("q1") === "yes") score++; else recs.push("استخدم كلمات مرور قوية لا تقل عن 12 حرفًا.");
        if (data.get("q2") === "yes") score++; else recs.push("قم بتفعيل المصادقة الثنائية (2FA) لحساباتك المهمة.");
        if (data.get("q3") === "yes") score++; else recs.push("استخدم برنامج مكافحة فيروسات محدث بانتظام.");
        if (data.get("q4") === "yes") score++; else recs.push("حدث نظام التشغيل والبرامج باستمرار.");
        if (data.get("q5") === "yes") score++; else recs.push("تجنب الاتصال بشبكات Wi-Fi عامة غير آمنة.");
        if (data.get("q6") === "yes") score++; else recs.push("استخدم مدير كلمات مرور موثوق لإدارة بياناتك.");

        const percent = Math.round((score / total) * 100);

        let level = "منخفض";
        let color = "red";

        if (score >= 5) {
            level = "عالي 👏";
            color = "green";
        } else if (score >= 3) {
            level = "متوسط 🙂";
            color = "orange";
        }

        resultDiv.style.color = color;
        resultDiv.innerHTML = `
            <h3>🔐 نتيجتك الأمنية: ${level}</h3>
            <p>درجتك: ${score} من ${total} (${percent}%)</p>
            <h4>التوصيات:</h4>
            <ul>${recs.map(r => `<li>${r}</li>`).join("")}</ul>
        `;
        resultDiv.scrollIntoView({ behavior: "smooth" });
    });
});
