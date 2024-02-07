json.data do
  json.extract! @customer, :id, :email, :full_name
end
