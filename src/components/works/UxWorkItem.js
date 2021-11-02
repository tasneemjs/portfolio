import './Work.css';
function UxWorkItem(props) { 
    return (
        <div className="work-grid">
          {props.workslists.filter((data) => data.category === "ux").map((datas) => (
              <div className="work-brief">
                <img src={`work_img/${datas.image}`} alt={datas.title} />
                <h5>{datas.title}</h5>
                <a href={datas.weblink} target="_blank" rel="noreferrer">
                  <p>{datas.description}</p>
                </a>
              </div>
            ))}
        </div>
      );
    }
    
export default UxWorkItem;