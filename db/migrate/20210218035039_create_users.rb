class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :uid, null: false
      t.string :nickname
      t.integer :gender_id
      t.date :birtthday
      t.text :profile
      t.string :twitter_name
      t.string :twitch_name
      t.string :mildom_name

      t.timestamps null: false

      add_index :users, :email, unique: true
      add_index :users, :uid, unique: true
    end
  end
end
