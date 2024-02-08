class CreateInteractions < ActiveRecord::Migration[7.0]
  def change
    create_table :interactions do |t|
      t.references :sender, null: false, foreign_key: { to_table: :users, on_delete: :cascade }
      t.references :recipient, null: false, foreign_key: { to_table: :users, on_delete: :cascade }
      t.text :content

      t.timestamps
    end
  end
end
