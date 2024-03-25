import { Slot } from "@/model/Slot";
import { rooms } from "./common";

const Room = ({ name }: { name: string }) => {
    const gridColumn = columnFromRoom(name);
    return (
        <div
            className="slot room"
            style={{
                gridColumn,
                gridRow: "1 / 1",
            }}
        >
            <h3>{name}</h3>
        </div>
    );
}

const Hour = ({ slot }: { slot: Slot }) => <div
    className="slot"
    style={{
        gridColumn: "1 / 1",
        gridRow: slotToRow(slot),
    }}
>
    <h3>{slot.start}</h3>
</div>




export const Schedule = () => {
    const slots: Slot[] = [{
        "key": "day-1-open",
        "start": "08:00",
        "type": "opening",
        "display": {
            "row": 1,
            "size": 1
        }
    },
    {
        "key": "day-1-keynote-open",
        "start": "09:00",
        "type": "conference",
        "display": {
            "row": 2,
            "size": 2
        }
    }]
    return (<div>
        <div className={"header-rooms"}></div>

        <div className="schedule-large">
            {rooms.map((room) => (
                <Room key={room} name={room} />
            ))}

        </div>

    </div>)
}

function columnFromRoom(room: string) {
    return rooms.indexOf(room) + 2 + " / " + (rooms.indexOf(room) + 2);
}

function slotToRow(slot: Slot) {
    const firstRow = 1;
    const rowStart = slot.display.row + firstRow;
    const spanRow = slot.display.size;
    return `${rowStart} / span ${spanRow}`;
}