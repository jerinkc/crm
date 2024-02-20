class AuthenticationsController < ApplicationController
  before_action :authorize_request, except: :login

  def login
    user = User.find_by_email(params[:email])

    if user&.authenticate(login_params[:password])
      token = JsonWebToken.encode(user_id: user.id)
      render json: {
        user: {
          id: user.id,
          email: user.email,
          type: user.type
        },
        token:
      }, status: :accepted
    else
      render json: { message: 'Incorrect Email or Password' }, status: :unauthorized
    end
  end

  private

  def login_params
    params.permit(:email, :password)
  end
end
