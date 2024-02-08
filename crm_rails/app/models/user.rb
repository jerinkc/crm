class User < ApplicationRecord
  has_many :interactions, foreign_key: :sender_id, dependent: :destroy
  has_many :interactions, foreign_key: :recipient_id, dependent: :destroy

  validates :email, :full_name, presence: true

  has_secure_password validations: false

  def admin?
    type == 'Admin'
  end
end
