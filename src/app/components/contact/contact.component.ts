import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;

  onSubmit(): void {
    this.isSubmitting = true;

    // Aquí iría la lógica para enviar el formulario
    // Por ejemplo, usando un servicio para enviar los datos a un backend

    // Simulamos una respuesta después de 2 segundos
    setTimeout(() => {
      console.log('Formulario enviado:', this.formData);
      this.isSubmitting = false;
      this.resetForm();
      // Aquí podrías mostrar un mensaje de éxito
    }, 2000);
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
}
