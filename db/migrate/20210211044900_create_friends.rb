class CreateFriends < ActiveRecord::Migration[6.0]
  def change
    create_table :friends do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title, null: false
      t.string :game_id, null: false
      t.text :text, null: false
    end
  end
end
