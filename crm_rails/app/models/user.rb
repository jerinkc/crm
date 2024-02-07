class User < ApplicationRecord
  validates :email, :full_name, presence: true

  def admin?
    type == 'Admin'
  end
end
