import { reportWebVitals } from "../_app";
import NavBar from "../../components/navbar";
export default function Analytics() {
  return (
    <body>
      <NavBar />
      <main>
        {" "}
        <reportWebVitals />
      </main>
    </body>
  );
}
