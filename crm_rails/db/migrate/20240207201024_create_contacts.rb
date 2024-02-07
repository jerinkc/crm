class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :phone
      t.text :address
      t.references :customer, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
