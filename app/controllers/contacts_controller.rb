class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    ContactMailer.with(contact: @contact).send_message.deliver_now
    redirect_to contact_path, notice: "Your message has been sent!"
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :company, :email, :message)
  end
end
