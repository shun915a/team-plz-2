class Api::V1::FriendsController < ApplicationController
  def index
    friends = Friend.all

    render json: {
      friends: friends
    }, status: :ok
  end
end
