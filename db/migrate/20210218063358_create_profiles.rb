class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
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
    end
    add_index :profiles, :email, unique: true
    add_index :profiles, :uid, unique: true
  end
end
