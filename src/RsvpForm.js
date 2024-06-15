import "./RsvpForm.css";
import {useState} from "react";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {postRequest} from "./requestBuilder";
const RsvpForm = (props) => {
    const apiEndpoint = "https://hs-backend-69n7.onrender.com/api/rsvp";

    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [attendanceIndicator, setAttendanceIndicator] = useState("");
    const [diet, setDiet] = useState("");

    const generateAttendanceClassname = (attendanceClassname) => {
        if (attendanceClassname === "attendance-coming") {
            const selectedClassname = attendanceIndicator === "Y" ? " selected" : " not-selected";
            return attendanceClassname + selectedClassname;
        }
        if (attendanceClassname === "attendance-not-coming") {
            const selectedClassname = attendanceIndicator === "N" ? " selected" : " not-selected";
            return attendanceClassname + selectedClassname;
        }
        return "";
    }

    const submitRsvp = async () => {
        await postRequest(apiEndpoint, {
            name: name,
            email: emailAddress,
            attendanceIndicator: attendanceIndicator,
            diet: diet
        });
    }

    return (
        <div className="rsvp-form">
            <div className="form-label-container">
                <span className="form-label">NAME</span>
            </div>
            <input className="input-box" type="text" value={name} onChange={e => setName(e.target.value)}/>
            <div className="form-label-container">
                <span className="form-label">EMAIL ADDRESS</span>
            </div>
            <input className="input-box" type="text" value={emailAddress}
                   onChange={e => setEmailAddress(e.target.value)}/>
            <div className="form-label-container">
                <span className="form-label">ARE YOU COMING?</span>
            </div>
            <div className="input-attendance-row">
                <div className={attendanceIndicator === "Y" ? "attendance-selected" : "attendance-not-selected"}>
                    <IoCheckmark size={50} onClick={() => setAttendanceIndicator("Y")}/>
                </div>
                <div className={attendanceIndicator === "N" ? "attendance-selected" : "attendance-not-selected"}>
                    <RxCross2 size={50} onClick={() => setAttendanceIndicator("N")}/>
                </div>
            </div>
            <div className="form-label-container">
                <span className="form-label">PLEASE LET US KNOW YOUR DIETARY RESTRICTIONS</span>
            </div>
            <input className="input-box" type="text" value={diet} onChange={e => setDiet(e.target.value)}/>
            <button className="submit" onClick={() => submitRsvp()}>Let's go!</button>
        </div>
    );
}

export default RsvpForm;
