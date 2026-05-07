import "../../styles/trackstatus.css";

export default function TrackStatus() {

  const complaints = [
    {
      id: 1,
      title: "Road Damage",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Street Light Issue",
      status: "Pending"
    },
    {
      id: 3,
      title: "Water Leakage",
      status: "Resolved"
    }
  ];

  return (
    <div className="track-container">

      <div className="track-card">

        <h1>📊 Track Complaint Status</h1>

        <p className="subtitle">
          Monitor your complaint progress easily
        </p>

        <div className="status-list">

          {complaints.map((item) => (

            <div className="status-item" key={item.id}>

              <div>
                <h3>{item.title}</h3>
              </div>

              <span
                className={`badge ${item.status
                  .toLowerCase()
                  .replace(" ", "")}`}
              >
                {item.status}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}