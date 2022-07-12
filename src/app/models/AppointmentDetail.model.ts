export interface AppointmentDetail {
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
}

export class AppointmentDetail implements AppointmentDetail {

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
      this.address = address; // clinic address
      this.appointmentDateTime = appointmentDateTime;
      this.appointmentType = appointmentType;
      this.city = city; // clinic city
      this.clinicId = clinicId;

      this.email = email; // this point forward is patient's detail
      this.firstName = firstName;
      this.lastName = lastName;
      this.phoneNumber = phoneNumber;
      this.state = state;
      this.zipCode = zipCode
    }
  }
