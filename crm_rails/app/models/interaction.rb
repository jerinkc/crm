class Interaction < ApplicationRecord
  belongs_to :sender, class_name: 'User', foreign_key: :sender_id
  belongs_to :recipient, class_name: 'User', foreign_key: :recipient_id

  validates :content, presence: true

  validate :ensure_sender_or_recipient_is_an_admin

  private

  def ensure_sender_or_recipient_is_an_admin
    return if recipient_id.nil? || sender_id.nil? || recipient&.admin? || sender&.admin?

    errors.add(:recipient, 'should be an admin')
  end
end
