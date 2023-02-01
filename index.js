const Button = (props) => {
  //  Write your code here.
  const { buttonText, buttonBg } = props;
  return <button className={`button ${buttonBg}`}>{buttonText}</button>;
};

const element = (
 
  <div className="bg-Container">
    <div className="social-Container">
      <h1 className="heading">Social Buttons</h1>
    <div className="buttonContainer">
      <Button buttonText="Like" buttonBg="button-Like" />
      <Button buttonText="Commit" buttonBg="button-Commit" />
      <Button buttonText="Share" buttonBg="button-Share" />
    </div>
  </div> 
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
