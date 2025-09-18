from flask import Flask, render_template, send_from_directory
import os

app = Flask(
    __name__,
    static_folder=None,       # نخلي static_folder فاضي عشان نتحكم فيه يدوي
    template_folder="../pages"
)

# الصفحة الرئيسية
@app.route("/")
def home():
    return render_template("index.html")

# باقي الصفحات
@app.route("/awareness")
def awareness():
    return render_template("awareness.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/protection")
def protection():
    return render_template("protection.html")

@app.route("/support")
def support():
    return render_template("support.html")

# 🔑 هذي أهم نقطة: نخلي Flask يعرف مجلد الـ assets زي ما هو
@app.route("/assets/<path:filename>")
def custom_static(filename):
    assets_dir = os.path.join(os.path.dirname(__file__), "../assets")
    return send_from_directory(assets_dir, filename)

# لو صفحة غير موجودة → رجع للصفحة الرئيسية
@app.errorhandler(404)
def page_not_found(e):
    return render_template("index.html"), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
