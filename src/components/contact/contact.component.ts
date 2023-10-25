import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ThankYouModalComponent } from './thank-you-modal/thank-you-modal.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
})
export class ContactComponent {
  @ViewChild('nameInput') nameInput!: ElementRef | undefined;
  @ViewChild('emailInput') emailInput!: ElementRef | undefined;
  @ViewChild('telInput') telInput!: ElementRef | undefined;
  @ViewChild('messageInput') messageInput!: ElementRef | undefined;
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
  
  contactForm: FormGroup;
  
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
    });
  }


  clearForm() {
    if (this.nameInput) {
      this.nameInput.nativeElement.value = '';
    }
    if (this.emailInput) {
      this.emailInput.nativeElement.value = '';
    }
    if (this.telInput) {
      this.telInput.nativeElement.value = '';
    }

    if (this.messageInput) {
      this.messageInput.nativeElement.value = '';
    }

    this.contactForm.reset();
    this.isNameInvalid = false;
    this.isEmailInvalid = false;
    this.isTelInvalid = false;
  }
  
  submitForm() {
    if (this.isValidForm()) {
      this.isSending = true;
      setTimeout(() => {
        this.isSending = false;
        this.clearForm();
        this.abrirModalAgradecimento();
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

  abrirModalAgradecimento() {
    const dialogRef = this.dialog.open(ThankYouModalComponent, {
      panelClass: 'modal-container'
    });
  }

  handleWhatsAppClick() {
    const phoneNumber = '+555521964108815';
    const message = 'Olá, um instante, por favor';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink);
  }
}
