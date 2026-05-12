import "../../styles/adminreports.css";

export default function Admindbhome() {

  const cards = [
    {
      title: "Total Reports",
      value: 230
    },
    {
      title: "Users",
      value: 120
    },
    {
      title: "Officers",
      value: 45
    },
    {
      title: "Locations",
      value: 15
    }
  ];

  return (
    <div className="admin-page">

      <h1>Admin Dashboard</h1>

      <div className="dashboard-cards">

        {cards.map((card, index) => (
          <div className="dashboard-card" key={index}>
            <h2>{card.value}</h2>
            <p>{card.title}</p>
          </div>
        ))}

      </div>

    </div>
  );
}