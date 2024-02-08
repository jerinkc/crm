class User < ApplicationRecord
  validates :email, :full_name, presence: true

  has_secure_password validations: false

  def admin?
    type == 'Admin'
  end
end
