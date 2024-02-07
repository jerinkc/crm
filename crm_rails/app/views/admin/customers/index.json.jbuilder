json.data @customers do |customer|
  json.extract! customer, :id, :email, :full_name
end
