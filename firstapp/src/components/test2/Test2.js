function Test2(props) {
  //{ counter : 100,user: {id:1,name:'ravi'}}

  return (
    <div className="bg-danger p-5 text-white">
      <h1>Child</h1>
      <h2>Counter : {props.counter}</h2>
      <h2>ID : {props.user.id}</h2>
      <h2>Name : {props.user.name}</h2>
      <button className="btn btn-secondary" onClick={()=>props.setCounter(props.counter+1)}>
        Change counter
      </button>
    </div>
  );
}

export default Test2;
