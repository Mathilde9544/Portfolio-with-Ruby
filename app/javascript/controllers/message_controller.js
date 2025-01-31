import { Controller } from "@hotwired/stimulus";


export default class extends Controller {
  static targets = ["name", "email", "company", "textmessage"]

  connect() {
    const emailjsKey = "hqTXP7fTiXTLwOf_l"
    console.log(emailjsKey)
  }

  async sendEmail(event) {
    event.preventDefault()

    const name = this.nameTarget.value;
    const email = this.emailTarget.value;
    const company = this.companyTarget.value;
    const message = this.textmessageTarget.value;

    const templateParams = {
      name: name,
      email: email,
      company: company,
      message: message
    }

    try {
      const response = await emailjs.send (
        "service_6wpbuxe",
        "template_u0lz2rm",
        templateParams,
        "hqTXP7fTiXTLwOf_l"
      )

      alert("Message sent, thank you!")
      this.element.reset();
      window.location.reload();

    } catch (error) {
      console.error("oups:", error)
    }
  }
}
