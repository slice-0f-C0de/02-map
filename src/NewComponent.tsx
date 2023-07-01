import React from "react";

type NewComponentType = {
    students: Array<StudentType>
    topCars: Array<CarType>
}

type CarType = {
    manufacturer: string
    model: string
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <div>
            <ul>
                {props.students.map((ObjectFromStudentArray) => {
                    return (
                        <li key={ObjectFromStudentArray.id}>
                            <span>{ObjectFromStudentArray.name}</span>
                            <span> age: {ObjectFromStudentArray.age}</span>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {props.topCars.map((ObjectFromCarArray, index) => {
                    return <table>
                        <tr key={index}>
                            <th>{ObjectFromCarArray.manufacturer}</th>
                        </tr>
                        <tr>
                            <td>{ObjectFromCarArray.model}</td>
                        </tr>
                    </table>
                })}
            </ul>
        </div>
    )
}