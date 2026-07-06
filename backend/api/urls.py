from django.urls import path
from .views import (
    DepartmentListView,
    DoctorListView,
    AppointmentCreateView,
    ContactMessageCreateView,
)

urlpatterns = [
    path("departments/", DepartmentListView.as_view(), name="departments"),
    path("doctors/", DoctorListView.as_view(), name="doctors"),
    path("appointments/", AppointmentCreateView.as_view(), name="appointments"),
    path("contact/", ContactMessageCreateView.as_view(), name="contact"),
]