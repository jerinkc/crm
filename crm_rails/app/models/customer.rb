class Customer < User
  has_one :contact

  validates :email, :full_name, :contact, presence: true
  validates :email, uniqueness: true

  accepts_nested_attributes_for :contact
end
