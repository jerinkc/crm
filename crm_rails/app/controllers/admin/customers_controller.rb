class Admin::CustomersController < ApplicationController
  before_action :set_customer, only: %i[update destroy]

  def index
    @customers = Customer.all
  end

  def create
    @customer = Customer.new(customer_params)

    if @customer.save
      render :show
    else
      render :error
    end
  end

  def update
    if @customer.update(customer_params)
      render :show
    else
      render :error
    end
  end

  def destroy
    if @customer.destroy
      render :show
    else
      render :error
    end
  end

  private

  def customer_params
    params.require(:customer).permit(:full_name, :email)
  end

  def set_customer
    @customer = Customer.find(params[:id])
  end
end
