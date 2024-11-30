import React from 'react'
import Header from '../Header/Header'
import "./About.css"

function About() {
  return (
    <>
    <Header/>
    <div className="about">
    <header>
  <h1>Medical Hospital Policy</h1>
</header>

<main>
  <h1>!-- Admission Policy --</h1>
  <section class="section">
    <h2>Admission Policy</h2>
    <p>Our hospital provides admission services to patients based on medical necessity. Please adhere to the following:</p>
    <ul>
      <li>Patients must provide valid identification and insurance details.</li>
      <li>Admission is granted upon approval by a licensed medical practitioner.</li>
      <li>Emergency cases will be prioritized.</li>
    </ul>
  </section>

  <h1>!-- Patient Rights and Responsibilities --</h1>
  <section class="section">
    <h2>Patient Rights and Responsibilities</h2>
    <p>We value our patients and are committed to providing quality care. Patients have the following rights:</p>
    <ul>
      <li>Right to confidentiality and privacy.</li>
      <li>Right to informed consent before treatment.</li>
      <li>Right to access medical records.</li>
    </ul>
    <p>Responsibilities include:</p>
    <ul>
      <li>Providing accurate medical history.</li>
      <li>Following prescribed treatments and instructions.</li>
      <li>Respecting hospital staff and other patients.</li>
    </ul>
  </section>

  <h1>!-- Visitor Policy --</h1>
  <section class="section">
    <h2>Visitor Policy</h2>
    <p>To ensure patient safety and comfort, visitors must adhere to the following:</p>
    <ul>
      <li>Visiting hours are from 10:00 AM to 8:00 PM daily.</li>
      <li>Only two visitors are allowed per patient at a time.</li>
      <li>Children under 12 are not permitted in patient care areas.</li>
    </ul>
  </section>

  <h1>!-- Billing and Payment Policy --</h1>
  <section class="section">
    <h2>Billing and Payment Policy</h2>
    <p>Our hospital ensures transparency in billing. Please note:</p>
    <ul>
      <li>All charges will be explained before billing.</li>
      <li>Payments can be made via cash, credit card, or insurance.</li>
      <li>Outstanding balances must be cleared upon discharge.</li>
    </ul>
  </section>
</main>

<footer>
  <p>&copy; 2024 XYZ Medical Hospital. All rights reserved.</p>
</footer>
    </div>

    </>
  )
}

export default About