import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["info"]

  showText(event) {
    const project = event.currentTarget.closest(".project");
    const textInfo = project.querySelector(".text-info")

    if (textInfo) {
      textInfo.classList.add("show")
    }

    if (project) {
      project.classList.add("border")
    }
  }

  hideText(event) {
    const project = event.currentTarget.closest(".project");
    const textInfo = project.querySelector(".text-info")

    if (textInfo) {
      textInfo.classList.remove("show")
    }

    if (project) {
      project.classList.remove("border")
    }
  }
}
