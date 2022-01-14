import { task } from "./task";

export const segment = ({ taskInfoList }) => {
    return (
        <div className="segment">
            {
                taskInfoList.forEach((info, idx) => {
                    return <task key={`task-${idx}`} {...info}></task>
                })
            }
        </div>
    )
}