from django.core.management.base import BaseCommand
from django.core.management import call_command
from api.models import Department, Doctor


class Command(BaseCommand):
    help = "Load initial departments and doctors"

    def handle(self, *args, **kwargs):
        if Department.objects.exists() or Doctor.objects.exists():
            self.stdout.write(
                self.style.WARNING("Data already exists. Skipping fixture loading.")
            )
            return

        call_command("loaddata", "api/fixtures/hospital_data.json")

        self.stdout.write(
            self.style.SUCCESS("Departments and Doctors loaded successfully.")
        )