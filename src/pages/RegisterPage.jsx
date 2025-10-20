import React from "react";
import '../components/CSS/RegisterPage.css'

const RegisterPage = () => {
  return (
    <div className="register-container">
      <form className="register-form">
        <h2 className="register-title">Registruj se</h2>

        <label>Ime</label>
        <input type="text" placeholder="Unesite ime" />

        <label>Prezime</label>
        <input type="text" placeholder="Unesite prezime" />

        <label>Email</label>
        <input type="email" placeholder="Unesite email" />

        <label>Lozinka</label>
        <input type="password" placeholder="Unesite lozinku" />

        <label>Potvrda lozinke</label>
        <input type="password" placeholder="Potvrdite lozinku" />

        <div className="gender-group">
          <label>Pol</label>
          <div className="gender-options">
            <label><input type="radio" name="gender" /> Muški</label>
            <label><input type="radio" name="gender" /> Ženski</label>
          </div>
        </div>

        <label>Datum rođenja</label>
        <input type="date" />

        <label>Broj telefona</label>
        <input type="tel" placeholder="Unesite broj telefona" />

        <button type="submit" className="register-btn">Registruj se</button>
      </form>
    </div>
  );
};

export default RegisterPage;
