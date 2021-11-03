import './Work.css';
function UxWorkItem(props) { 
    return (
        <div className="work-grid">
          {props.workslists.filter((data) => data.category === "ux").map((datas) => (
              <div className="work-brief">
                <img src={`work_img/${datas.image}`} alt={datas.title} />
                <h5>{datas.title}</h5>
                <p>{datas.description}</p>
                <a href={datas.weblink} target="_blank" rel="noreferrer">
                  View More
                </a>
              </div>
            ))}
        </div>
      );
    }
    
export default UxWorkItem;