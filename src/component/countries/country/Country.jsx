const Country = ({ country }) => {
  const { name, flags, population } = country;
  //   console.log(country);
  return (
    <div>
      <h4>Name : {name.common} </h4>
      <img src={flags.png} alt="" />
      <h6>population {population} </h6>
    </div>
  );
};

export default Country;
