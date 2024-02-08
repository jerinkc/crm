class Customer < User
  validates :email, :full_name, presence: true

  has_one :contact

  accepts_nested_attributes_for :contact
end
