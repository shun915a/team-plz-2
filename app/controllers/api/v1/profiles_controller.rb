class Api::V1::ProfilesController < ApplicationController
  def create
    @profile = Profile.new(profile_params)
    if @profile.save
      render status: 200, json: @profile
    else
      render status: 500, json: {
        status: 500,
        message: 'Internal Server Error'
      }
    end
  end

  private

  def profile_params
    params.require(:profile).permit(
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
