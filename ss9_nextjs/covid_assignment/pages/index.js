import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Information({information}) {
  return (
      <>
        <h1>Vietnam's COVID-19 Information</h1>
        <table className='table'>
          <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
          </thead>

          <tbody>
          {
            information.map((infor) => (
              <tr key={infor.Date}>
                <td>{infor.Date}</td>
                <td>{infor.Confirmed}</td>
                <td>{infor.Recovered}</td>
                <td>{infor.Active}</td>
                <td>{infor.Deaths}</td>
              </tr>

            ))
          }

          </tbody>
        </table>
      </>

  )

}


export const getStaticProps = async () => {
  const res = await axios.get(" http://localhost:1702/information")
  return {
    props: {
      information: res.data
    }
  }
}