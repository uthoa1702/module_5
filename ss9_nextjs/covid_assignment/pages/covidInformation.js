import axios from "axios"


export default function Information({information}) {
    return (
        <>
            <h1>Vietnam's COVID-19 Information</h1>
            <table>
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
                    information.map((infor) => {
                        <tr key={infor.Date}>
                            <td>{infor.Date}</td>
                            <td>{infor.Confirmed}</td>
                            <td>{infor.Recovered}</td>
                            <td>{infor.Active}</td>
                            <td>{infor.Deaths}</td>
                        </tr>

                    })
                }

                </tbody>
            </table>
        </>
        // "Country":"Viet Nam",
        //     "CountryCode":"",
        //     "Province":"",
        //     "City":"",
        //     "CityCode":"",
        //     "Lat":"0",
        //     "Lon":"0",
        //     "Confirmed":0,
        //     "Deaths":0,
        //     "Recovered":0,
        //     "Active":0,
        //     "Date":"2020-01-22T00:00:00Z"
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