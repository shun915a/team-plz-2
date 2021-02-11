class Friend < ApplicationRecord
  belongs_to :user

  with_options presence: true do
    validates :title
    validates :game_id
    validates :text
  end
end
