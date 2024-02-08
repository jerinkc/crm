class Contact < ApplicationRecord
  belongs_to :customer

  validates :phone, presence: true
end
