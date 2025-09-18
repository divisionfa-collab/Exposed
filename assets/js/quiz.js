// لعبة بسيطة: هل الرابط آمن؟
function startQuiz() {
    const links = [
        { url: "https://www.google.com", safe: true },
        { url: "http://paypal-login.fake.com", safe: false },
        { url: "https://twitter.com", safe: true },
        { url: "http://bank-secure-login.net", safe: false }
    ];

    let score = 0;

    for (let link of links) {
        let answer = confirm("هل تعتقد أن هذا الرابط آمن؟\n" + link.url);
        if (answer === link.safe) {
            alert("✅ إجابة صحيحة!");
            score++;
        } else {
            alert("❌ إجابة خاطئة!");
        }
    }

    alert("انتهت اللعبة! نتيجتك: " + score + " من " + links.length);
}
