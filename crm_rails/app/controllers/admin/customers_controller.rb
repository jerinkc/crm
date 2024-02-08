class Admin::CustomersController < ApplicationController
  def index
    @customers = Customer.all
  end

  def show
    @customer = Customer.find(params[:id])
  end

  def create
    @customer = Customer.new(customer_contact_params)

    if @customer.save
      render :show
    else
      render :error
    end
  end

  def update
    @customer = Customer.find(params[:id])
    @contact = @customer.contact

    @customer.assign_attributes(customer_params)

    if @customer.valid? && @contact.update(contact_params)
      @customer.save
      render :show
    else
      render :error
    end
  end

  def destroy
    @customer = Customer.find(params[:id])


    if @customer.destroy
      render :show
    else
      render :error
    end
  end

  private

  def customer_contact_params
    params.require(:customer).permit(:full_name, :email, contact_attributes: [:phone, :address])
  end

  def customer_params
    params.require(:customer).permit(:full_name, :email)
  end

  def contact_params
    params.require(:customer).require(:contact_attributes).permit(:phone, :address)
  end
end
