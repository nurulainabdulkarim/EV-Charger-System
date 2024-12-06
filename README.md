# EV-Charger-System
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EV Charger System</title>
  <link rel="stylesheet" href="styles.css">
  /* General Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #333;
}

a {
  text-decoration: none;
}

h1, h2, h3 {
  margin: 0;
}

p {
  margin: 0 0 1em;
}

/* Hero Section */
.hero {
  background: url('images/hero-bg.jpg') no-repeat center center/cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 600px;
}

.btn {
  background: #28a745;
  color: white;
  padding: 0.5em 1.5em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background: #218838;
}

/* Features Section */
.features {
  padding: 2em;
  background: #f9f9f9;
  text-align: center;
}

.features h2 {
  margin-bottom: 1em;
}

.feature-cards {
  display: flex;
  justify-content: center;
  gap: 1em;
}

.card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1em;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  border-radius: 5px 5px 0 0;
}

.card h3 {
  margin-top: 0.5em;
}

/* Contact Section */
.contact {
  padding: 2em;
  background: #28a745;
  color: white;
  text-align: center;
}

.contact input, .contact textarea {
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0;
  border: none;
  border-radius: 5px;
}

.contact button {
  background: white;
  color: #28a745;
  padding: 0.5em 1.5em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.contact button:hover {
  background: #f1f1f1;
}

/* Footer */
.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1em;
}
</head>
<body>
  <header class="hero">
    <div class="hero-content">
      <h1>Welcome to EV Charger World</h1>
      <p>Empowering a sustainable future with cutting-edge EV charging solutions.</p>
      <a href="#features" class="btn">Learn More</a>
    </div>
  </header>

  <section id="features" class="features">
    <h2>Why Choose Our EV Charger System?</h2>
    <div class="feature-cards">
      <div class="card">
        <img src="images/fast-charging.jpg" alt="Fast Charging">
        <h3>Fast Charging</h3>
        <p>Get your EV charged quickly and efficiently.</p>
      </div>
      <div class="card">
        <img src="images/smart-tech.jpg" alt="Smart Technology">
        <h3>Smart Technology</h3>
        <p>Intelligent systems to optimize your charging experience.</p>
      </div>
      <div class="card">
        <img src="images/eco-friendly.jpg" alt="Eco-Friendly">
        <h3>Eco-Friendly</h3>
        <p>Promoting a cleaner and greener planet.</p>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <h2>Get in Touch</h2>
    <p>Have questions? Contact us for more information.</p>
    <form>
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Your Email" required>
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit" class="btn">Send Message</button>
    </form>
  </section>

  <footer class="footer">
    <p>&copy; 2024 EV Charger System. All rights reserved.</p>
  </footer>
</body>
</html>
