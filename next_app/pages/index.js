import { useState } from "react";
import Layout from "../components/layout";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const url = "http://localhost:3001/_api/employees";
  // const url = "./data.json";
  // const [data, setData] = useState({ message: "", employees: [] });
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((res) => setData(res));
  const { data, error } = useSWR(url, fetcher);

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            {" "}
            {data != undefined ? data.message : "error..."}{" "}
          </h5>
          <table className="table bg-white">
            <thead className="table-dark">
              <tr>
                <th> Name </th> <th> Mail </th> <th> Age </th>
              </tr>
            </thead>
            <tbody>
              {data != undefined ? (
                data.employees.map((value, key) => (
                  <tr key={key}>
                    <td>{value.name}</td>
                    <td>{value.sex}</td>
                    <td></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td></td>
                  <td>no data.</td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
}
