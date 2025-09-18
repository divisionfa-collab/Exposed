from flask import Flask, render_template, send_from_directory, redirect, url_for
import os

app = Flask(
    __name__,
    static_folder=None,       # نوقف static الافتراضي ونخصصه
    template_folder="../pages"
)

# الصفحة الرئيسية
@app.route("/")
def home():
    return render_template("index.html")

# صفحات رئيسية بالـ routes
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


# ✅ إعادة توجيه لطلبات الصفحات بـ .html
@app.route("/index.html")
def index_html():
    return redirect(url_for("home"))

@app.route("/awareness.html")
def awareness_html():
    return redirect(url_for("awareness"))

@app.route("/contact.html")
def contact_html():
    return redirect(url_for("contact"))

@app.route("/protection.html")
def protection_html():
    return redirect(url_for("protection"))

@app.route("/support.html")
def support_html():
    return redirect(url_for("support"))


# ✅ تعريف assets (CSS, JS, Images)
@app.route("/assets/<path:filename>")
def custom_static(filename):
    assets_dir = os.path.join(os.path.dirname(__file__), "../assets")
    return send_from_directory(assets_dir, filename)


# ✅ صفحة غير موجودة → رجع للصفحة الرئيسية
@app.errorhandler(404)
def page_not_found(e):
    return render_template("index.html"), 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
