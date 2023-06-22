import {Component} from "react";


export class StudentInfoComponent extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {id: 1, name: 'Trương Quốc Hòa', age: 25, address: 'Da Nang', point:10},
                {id: 2, name: 'Trương Quốc Hòa', age: 25, address: 'Da Nang', point:2},
                {id: 3, name: 'Trương Quốc Hòang', age: 25, address: 'Da Nang', point:9}
            ]
        }
    }


    render() {
        return (
            <>
                <table border={1}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>


                    {
                        this.state.studentList.map((student, index) => (
                            <tr key={student.id}>
                                <td >
                                    {student.id}
                                </td>
                                <td >
                                    {student.name}
                                </td>

                                <td>
                                    {student.age}
                                </td>

                                <td >
                                    {student.address}
                                </td>

                            </tr>
                        ))
                    }
                </table>
            </>
        )
    }
}