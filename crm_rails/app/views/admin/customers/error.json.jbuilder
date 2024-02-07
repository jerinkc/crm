json.data do
  json.extract! @customer, :id, :email, :full_name
end
json.errors @customer.errors.full_messages
