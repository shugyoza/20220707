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
    appointments: any[]

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
      appointments: any[]
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

const a = new Patient(
    '1',
    'Leanne',
    'Graham',
    '12/31/2003',
    'sincere@april.biz',
    'Kulas Light Apt. 556',
    'Gwenborough',
    'IN',
    '92998',
    '123-321-1234',
    []
);

const b = new Patient(
    '2',
    'Ervin',
    'Howell',
    '01/03/1992',
    'shanna@melissa.tv',
    'Victor Plains suite 879',
    'Wisokyburgh',
    'IA',
    '90566',
    '010-692-6593',
    []
);

const c = new Patient(
    '3',
    'Clementine',
    'Bauch',
    '03/12/1988',
    'nathan@yesenia.net',
    'Douglas Extension Suite 847',
    'McKenziehaven',
    'OR',
    '59590',
    '463-123-4447',
    []
);

const d = new Patient(
    '4',
    'Patricia',
    'Lebsack',
    '04/25/1985',
    'julianne@oconner@kory.org',
    'Hoeger Mall Apt. 692',
    'South Elvis',
    'DE',
    '53919',
    '493-170-9623',
    []
);

const e = new Patient(
    '5',
    'Chelsey',
    'Dietrich',
    '08/24/2001',
    'lucio_hettinger@annie.ca',
    'Skiles Walks',
    'Gwenborough',
    'IN',
    '92998',
    '123-321-1234',
    []
);


export let patients = [
    a,
    b,
    c,
    d,
    e,
]
