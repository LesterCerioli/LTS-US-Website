import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData: any = {
    dataClient: {
      name: '',
      email: '',
      tel: '',
    },
  };
  isSending: boolean = false;
  showRequiredErrors: boolean = false;
  phoneNumber: string = '+552130425441';

  constructor() {}

  submitForm() {
    if (this.isValidForm()) {
      this.abrirModal();
      this.isSending = true;
      setTimeout(() => {
        this.setModalIsOpen(false);
        this.isSending = false;
      }, 2000);
    } else {
      this.showRequiredErrors = true;
    }
  }

  isValidForm() {
    return (
      !!this.formData.dataClient.name &&
      !!this.formData.dataClient.email &&
      this.validatePhoneNumber(this.formData.dataClient.tel)
    );
  }

  validatePhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/;
    return phoneRegex.test(phoneNumber);
  }

  abrirModal() {
    // Implement your modal logic here
  }

  setModalIsOpen(isOpen: boolean) {
    // Implement your modal logic here
  }

  handlePhonePopup() {
    // Implement your phone popup logic here
  }

  handleWhatsAppClick() {
    const phoneNumber = '+555521964108815';
    const message = 'Olá, um instante, por favor';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink);
  }
}
