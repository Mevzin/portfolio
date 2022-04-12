import styles from "./styles.module.scss";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function ContactMe() {
  function handleOnSubmit(e:any) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
    e.target.reset();
  }

  return (
    <div id="contactme" className={styles.containerContactMe}>
      <h1>Entre em contato</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="user_name" placeholder="Name"/>
        <input type="text" name="user_email" placeholder="Email"/>
        <textarea name="user_message" placeholder="Message"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
