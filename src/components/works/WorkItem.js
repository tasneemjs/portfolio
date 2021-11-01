

function WorkItem(props) {
  return (
      <div >
        <img src={`work_img/${props.image}`} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
  );
}

export default WorkItem;