import style from "./ContactDiv.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactDiv = () => {
  return (
    <>
      <div className={style.main}>
        <div  className={style.calltext}>
          {" "}
          <PhoneIcon className={style.call} />{"  "} 1224-5500-8028
        </div>
        <div className={style.or}>OR</div>
        <div className={style.mailtext}>
          {" "}
          <EmailIcon className={style.mail}/> {"  "} Mail now for <br /> free consultation :
          info@softcadia.com
        </div>
      </div>
    </>
  );
};
export default ContactDiv;
