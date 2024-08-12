import  './About.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          At FoodieDelight, our mission is to bring you the best culinary experiences from your favorite local restaurants right to your doorsteps. We are committed to providing quick, reliable, and top-quality food delivery services to make your dining experiences enjoyable and hassle-free.
        </p>
        <h2>Our Story</h2>
        <p>
          Founded in 2020, FoodieDelight started with a simple idea: to make food delivery easy and accessible for everyone. Our team of passionate food lovers and tech enthusiasts came together to create a platform that bridges the gap between hungry customers and their favorite eateries. With a focus on customer satisfaction and innovation, we continuously strive to improve our services and exceed your expectations.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Customer Satisfaction: We prioritize your needs and feedback to enhance our services.</li>
          <li>Quality: We partner with top restaurants and ensure that your food arrives fresh and delicious.</li>
          <li>Integrity: We operate with honesty and transparency in all our interactions.</li>
          <li>Innovation: We embrace technology to provide you with the best user experience.</li>
        </ul>
      </section>
      <footer className="about-footer">
        <p>© 2024 FoodieDelight. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
