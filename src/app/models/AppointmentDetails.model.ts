export class AppointmentDetails {
    address: string;
    appointmentDateTime: Date;
    appointmentType: string;
    city: string;
    clinicId: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    state: string;
    zipCode: string

    constructor(
      address: string,
      appointmentDateTime: Date = new Date(),
      appointmentType: string,
      city: string,
      clinicId: string,
      email: string,
      firstName: string,
      lastName: string,
      phoneNumber: string,
      state: string,
      zipCode: string
    ) {
      this.address = address;
      this.appointmentDateTime = appointmentDateTime;
      this.appointmentType = appointmentType;
      this.city = city;
      this.clinicId = clinicId;
      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;
      this.phoneNumber = phoneNumber;
      this.state = state;
      this.zipCode = zipCode
    }
  }
