class AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show, :update, :destroy]
  
  
  def index
    @appointments = Appointment.all

    render json: @appointments
  end

  
  def show
    render json: @appointment
  end

  
  def create
    @appointment = Appointment.new(appointment_params)

    if @appointment.save
      render json: @appointment, status: :created, location: @appointment
      DeleteAppointmentJob.set(wait_until: @appointment.end_date).perform_later(@appointment.id)
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  
  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  
  def destroy
    @appointment.destroy
  end

  private
    
    def set_appointment
      @appointment = Appointment.find(params[:id])
    end

    
    def appointment_params
      params.permit(:start_date, :end_date, :doctor_id, :patient_id, :procedure_id)
    end
end
