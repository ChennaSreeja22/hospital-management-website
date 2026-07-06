from django.contrib import admin
from .models import Department, Doctor, Appointment, ContactMessage


@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ("id", "name")


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "department",
        "specialization",
        "experience",
        "available",
    )
    list_filter = ("department", "available")


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "patient_name",
        "doctor",
        "appointment_date",
        "appointment_time",
        "status",
    )
    list_filter = ("status",)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "email", "created_at")
