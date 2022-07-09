export class Patient {
    patientId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    appointments: Date[]

    constructor(
      patientId: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      email: string,
      address: string,
      city: string,
      state: string,
      zipCode: string,
      phoneNumber: string,
      appointments: Date[]
    ) {
      this.patientId = patientId;
      this.firstName = firstName;
      this.lastName = lastName;
      this.dateOfBirth = dateOfBirth;
      this.email = email;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zipCode = zipCode;
      this.phoneNumber = phoneNumber;
      this.appointments = appointments
    }
  }
