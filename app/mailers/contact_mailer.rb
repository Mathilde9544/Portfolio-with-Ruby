class ContactMailer < ApplicationMailer
  def send_message
    @contact = params[:contact]
    mail(
      to: "renaud.mathilde95@hotmail.fr"
      subject: "New message from #{@contact.name}"
    )
  end
end
