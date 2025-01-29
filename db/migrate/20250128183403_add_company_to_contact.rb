class AddCompanyToContact < ActiveRecord::Migration[7.1]
  def change
    add_column :contacts, :company, :string
  end
end
