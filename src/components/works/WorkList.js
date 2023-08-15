import WorkItem from './WorkItem';
import "./Work.css";
function WorkList(props) {
  return (
    <div className="work-grid">
      {props.workslists.map((workslist) => (
        <WorkItem
          key={workslist.id}
          category={workslist.category}
          id={workslist.id}
          image={workslist.image}
          weblink={workslist.weblink}
          title={workslist.title}
          description={workslist.description}
        />
        
      ))}
      
    </div>
  );
}

export default WorkList;