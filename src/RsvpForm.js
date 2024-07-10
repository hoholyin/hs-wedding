import "./RsvpForm.css";
import {useState} from "react";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {postRequest} from "./requestBuilder";
import { Audio } from 'react-loader-spinner';
import letsGo from "./assets/lets_go.jpg";

const RsvpForm = (props) => {
    const apiEndpoint = "https://hs-backend-69n7.onrender.com/api/rsvp";

    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [attendanceIndicator, setAttendanceIndicator] = useState("");
    const [diet, setDiet] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [language, setLanguage] = useState("ENG");

    const formText = {
        name: {
            "ENG": "Name",
            "CHN": "姓名"
        },
        email: {
            "ENG": "Email Address",
            "CHN": "电邮地址"
        },
        comeBoolean: {
            "ENG": "You will come hor?",
            "CHN": "希望您能大驾光临"
        },
        dietary1: {
            "ENG": "Dietary Restrictions",
            "CHN": "饮食禁忌"
        },
        dietary2: {
            "ENG": "(Leave blank if you eat anything)",
            "CHN": "(如果您没有对任何食物忌口,请留空)"
        },
    }

    const submitRsvp = async () => {
        setIsLoading(true);
        await postRequest(apiEndpoint, {
            name: name,
            email: emailAddress,
            attendanceIndicator: attendanceIndicator,
            diet: diet
        });
        setIsLoading(false);
        setShowConfirmation(true);
    }

    const canSubmit = () => {
        return name.length > 0
            && emailAddress.length > 0
            && emailAddress.includes("@")
            && attendanceIndicator.length > 0;
    }

    const submitAnother = () => {
        setName("");
        setEmailAddress("");
        setAttendanceIndicator("");
        setDiet("");
        setShowConfirmation(false);
    }

    return showConfirmation
        ? (
            <div className="confirmation-page">
                <span className="confirmation-text">Thank you for confirming your attendance!</span>
                <span className="confirmation-text">We can't wait to see you there.</span>
                <span className="submit-another" onClick={() => submitAnother()}>SUBMIT ANOTHER NAME</span>
            </div>
        )
        : (
            <div className="rsvp-form">
                <div className="language-toggle">
                    <span className={language === "ENG" ? "language-button-selected" : "language-button"}
                          onClick={() => setLanguage("ENG")}>English</span>
                    <span className="language-button-divider">|</span>
                    <span className={language === "CHN" ? "language-button-selected" : "language-button"}
                        onClick={() => setLanguage("CHN")}>中文</span>
                </div>
                <div className="form-label-container">
                <span className="form-label">{formText["name"][language]}</span>
                </div>
                <input className="input-box" type="text" value={name} onChange={e => setName(e.target.value)}/>
                <div className="form-label-container">
                    <span className="form-label">{formText["email"][language]}</span>
                </div>
                <input className="input-box" type="text" value={emailAddress}
                       onChange={e => setEmailAddress(e.target.value)}/>
                <div className="form-label-container">
                    <span className="form-label">{formText["comeBoolean"][language]}</span>
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
                    <span className="form-label">{formText["dietary1"][language]}</span>
                    <span className="form-label">{formText["dietary2"][language]}</span>
                </div>
                <input className="input-box" type="text" value={diet} onChange={e => setDiet(e.target.value)}/>
                {isLoading
                    ? <Audio height={20}/>
                    : <div className={!canSubmit() ? "submit-disabled" : "submit"}
                              onClick={() => isLoading || !canSubmit() ? null : submitRsvp()}>
                        <img className="lets-go-button" src={letsGo}/>
                    </div>
                }
            </div>
        );
}

export default RsvpForm;
