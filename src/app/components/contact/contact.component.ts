import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contact } from '../../models/contact';
import { toast } from 'ngx-sonner';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group<Contact>({
    name: this._formBuilder.control('', Validators.required),
    email: this._formBuilder.control('', [
      Validators.email,
      Validators.required,
    ]),
    subject: this._formBuilder.control('', [
      Validators.minLength(3),
      Validators.required
    ]),
    message: this._formBuilder.control('', [
      Validators.minLength(5),
      Validators.required
    ]),
  });

  isSubmitting = signal(false);

  async submit() {
    if (this.form.invalid) return;

    try {
      const { name, email, subject, message } = this.form.value;

      if (!name || !email || !subject || !message) return;

      this.isSubmitting.set(true);

      await emailjs.send(
        'service_aoc965m',
        'template_q78mwzl',
        this.form.value,
        { publicKey: '9n7O4Ix131Q2ZDLPi' }
      );

      toast.success('Correo enviado con éxito!');
      this.form.reset();
    } catch (error) {
      toast.error('Error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
      console.error(
        'Error al crear el usuario:',
        error as EmailJSResponseStatus
      );
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
