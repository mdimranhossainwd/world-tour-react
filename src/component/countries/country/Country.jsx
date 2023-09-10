import "./Country.css";
const Country = ({ country, visitHandle }) => {
  const { name, flags, population } = country;
  //   console.log(country);
  return (
    <div className="country">
      <h4>Name : {name.common} </h4>
      <img
        style={{
          height: "100px",
          width: "60%",
          display: "block",
          margin: "auto",
          marginBottom: "14px",
        }}
        src={flags.png}
        alt=""
      />
      <button onClick={() => visitHandle()}>Visit</button>
      <h6>population {population} </h6>
    </div>
  );
};

export default Country;
