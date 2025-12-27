import { useQuery } from "@apollo/client";
import { GET_MENU } from "../graphql/menu";
import { Link } from "react-router-dom";

export default function Header() {
  const { data, loading, error } = useQuery(GET_MENU);

  if (loading) return <div>Loading menu...</div>;
  if (error) return <div>Menu error</div>;

  return (
    <header style={styles.header}>
      <div style={styles.logo}>MySite</div>

      <nav style={styles.nav}>
        {data.menuItems.nodes.map((item) => (
          <Link
            key={item.id}
            to="/"
            style={styles.link}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    borderBottom: "1px solid #eee",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#090278",
    fontWeight: 500,
  },
};
