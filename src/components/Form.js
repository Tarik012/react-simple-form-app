import StepTwo from "./StepTwo";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setErrorPassword] = useState("");
  const [displayinfos, setDisplayinfos] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      alert("Please complete all fields before submitting the form.");
      setDisplayinfos(false);
    } else if (password !== passwordConfirm) {
      setErrorPassword("Your two passwords are not identical");
      error && alert(error);
    } else {
      setDisplayinfos(true);
    }
  };
  // Ternaire pour afficher le formulaire ou le formulaire d'édition
  return displayinfos === false ? (
    <div className="div-form">
      <h1>Create account</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            placeholder="Jean Dupont"
            value={name}
            name="inputText"
          ></input>
          <label>Email</label>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="jeandupont@lereacteur.io"
            value={email}
            name="inputEmail"
          ></input>
          <label>Password</label>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="IEEaCtEuR2020"
            value={password}
            name="inputPassword"
            className={error !== "" && "withRedBorder"}
          ></input>
          <label>Confirm your password</label>
          <input
            onChange={(event) => {
              setPasswordConfirm(event.target.value);
            }}
            type="password"
            placeholder="IEEaCtEuR2020"
            value={passwordConfirm}
            name="inputPasswordConfirm"
            className={error !== "" && "withRedBorder"}
          ></input>

          <input type="submit" value="Register"></input>
        </form>
      </div>
    </div>
  ) : (
    <StepTwo
      name={name}
      email={email}
      password={password}
      setDisplayinfos={setDisplayinfos} // je lui passe la fonction qui modifiera l'état pour afficher de nouveau le formualire
      setErrorPassword={setErrorPassword}
    />
  );
};

export default Form;
