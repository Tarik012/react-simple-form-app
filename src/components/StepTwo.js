const StepTwo = ({
  name,
  email,
  password,
  setDisplayinfos,
  setErrorPassword,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayinfos(false); // je modifie l'état pour rebasculer sur le formulaire, le tout sur la même page
    setErrorPassword("");
  };
  return (
    <div className="steptwo">
      <div>
        <h1>Results</h1>
      </div>
      <div className="div-infos">
        <div>
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Password : {password}</p>
        </div>
      </div>
      <div className="btn-register">
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Edit your information"></input>
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
