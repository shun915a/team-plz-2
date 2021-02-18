class Api::V1::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render status: 200, json: @user
    else
      render status: 500, json: {
        status: 500,
        message: 'Internal Server Error'
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :uid,
      :nickname,
      :gender_id,
      :birthday,
      :twitter_name,
      :twitch_name,
      :mildom_name,
      :profile
    )
  end
end
