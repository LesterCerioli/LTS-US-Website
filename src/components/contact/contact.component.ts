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

  isNameInvalid: boolean = false;
  isEmailInvalid: boolean = false;
  isTelInvalid: boolean = false;

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
    this.isNameInvalid = !this.formData.dataClient.name;
    this.isEmailInvalid = !this.formData.dataClient.email;
    this.isTelInvalid = !this.validatePhoneNumber(this.formData.dataClient.tel);

    return !this.isNameInvalid && !this.isEmailInvalid && !this.isTelInvalid;
  }

  validatePhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/;
    return phoneRegex.test(phoneNumber);
  }

  abrirModal() {
    // Upcoming modal logic
  }

  setModalIsOpen(isOpen: boolean) {
    // Upcoming modal logic here
  }

  handlePhonePopup() {
    // Upcoming phone popup logic here
  }

  handleWhatsAppClick() {
    const phoneNumber = '+555521964108815';
    const message = 'Olá, um instante, por favor';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink);
  }
}
