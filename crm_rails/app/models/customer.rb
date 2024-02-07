class Customer < User
  has_one :contact

  accepts_nested_attributes_for :contact
end
