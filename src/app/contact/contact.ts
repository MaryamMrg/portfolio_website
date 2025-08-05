import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
 contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';

  constructor(private fb: FormBuilder) {
    emailjs.init('gku8x84Q7jp0m9q31'); 
    
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      name: ['', Validators.required] 
    });
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    const formData = this.contactForm.value;

    // EmailJS template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'maryamelouadaa@gmail.com' 
    };

    try {
      await emailjs.send(
        'service_y5kwafj',   
        'template_ahpi2gr',   
        templateParams
      );
      
      this.submitMessage = 'Message sent successfully! I\'ll get back to you soon.';
      this.contactForm.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      this.submitMessage = 'Failed to send message. Please try again or contact me directly.';
    } finally {
      this.isSubmitting = false;
    }
  }

  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }
  get name() { return this.contactForm.get('name'); }
}
