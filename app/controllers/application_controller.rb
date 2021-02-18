class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(
      :sign_up, keys: %i[
        nickname
        gender_id
        birthday
        profile
        twitter_name
        twitch_name
        mildom_name
      ]
    )
  end
end
