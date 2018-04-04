class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :string
      t.string :last_name
      t.string :string
      t.string :email_address
      t.string :string
      t.string :age
      t.string :integer

      t.timestamps null: false
    end
  end
end
