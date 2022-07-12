import { convertToUnixTime } from "../shared/functions";
import { Patient } from 'src/app/models/Patient.model';
import { AppointmentDetail } from '../models/AppointmentDetail.model';

// mock data for patients
const patientA = new Patient(
    '1',
    'Leanne',
    'Graham',
    '2003-12-31',
    'sincere@april.biz',
    'Kulas Light Apt. 556',
    'Gwenborough',
    'IN',
    '92998',
    '123-321-1234',
    []
);

const patientB = new Patient(
    '2',
    'Ervin',
    'Howell',
    '1992-01-03',
    'shanna@melissa.tv',
    'Victor Plains suite 879',
    'Wisokyburgh',
    'IA',
    '90566',
    '010-692-6593',
    []
);

const patientC = new Patient(
    '3',
    'Clementine',
    'Bauch',
    '1988-03-12',
    'nathan@yesenia.net',
    'Douglas Extension Suite 847',
    'McKenziehaven',
    'OR',
    '59590',
    '463-123-4447',
    []
);

const patientD = new Patient(
    '4',
    'Patricia',
    'Lebsack',
    '1985-04-25',
    'julianne@oconner@kory.org',
    'Hoeger Mall Apt. 692',
    'South Elvis',
    'DE',
    '53919',
    '493-170-9623',
    []
);

const patientE = new Patient(
    '5',
    'Chelsey',
    'Dietrich',
    '2001-08-24',
    'lucio_hettinger@annie.ca',
    'Skiles Walks',
    'Gwenborough',
    'IN',
    '92998',
    '123-321-1234',
    []
);

export let patients: Patient[] = [
    patientA,
    patientB,
    patientC,
    patientD,
    patientE,
]


// mock data for appointments
const now = Date.now();

const appointmentA = new AppointmentDetail(
  'Norberto Crossing Ste. 888',
  new Date(now + convertToUnixTime(0,1,1,1,0,0)),
  'Check-up',
  'Houston',
  '1',
  patientA.email,
  patientA.firstName,
  patientA.lastName,
  patientA.phoneNumber,
  patientA.state,
  patientA.zipCode
);
// add the appointment to the corresponding patient
patientA.appointments.push(appointmentA.appointmentDateTime);

const appointmentB = new AppointmentDetail(
  'Norberto Crossing Ste. 888',
  new Date(now + convertToUnixTime(0,2,1,1,0,0)),
  'Kidney Transplant',
  'Houston',
  '1',
  patientB.email,
  patientB.firstName,
  patientB.lastName,
  patientB.phoneNumber,
  patientB.state,
  patientB.zipCode
);
// add the appointment to the corresponding patient
patientB.appointments.push(appointmentB.appointmentDateTime);

const appointmentC = new AppointmentDetail(
  'Norberto Crossing Ste. 888',
  new Date(now + convertToUnixTime(0,3,1,1,0,0)),
  'Brain Surgery',
  'Houston',
  '1',
  patientC.email,
  patientC.firstName,
  patientC.lastName,
  patientC.phoneNumber,
  patientC.state,
  patientC.zipCode
);
// add the appointment to the corresponding patient
patientC.appointments.push(appointmentC.appointmentDateTime);

const appointmentD = new AppointmentDetail(
  'Norberto Crossing Ste. 888',
  new Date(now + convertToUnixTime(0,0,5,1,0,0)),
  'Vaccination',
  'Houston',
  '1',
  patientD.email,
  patientD.firstName,
  patientD.lastName,
  patientD.phoneNumber,
  patientD.state,
  patientD.zipCode
);
// add the appointment to the corresponding patient
patientD.appointments.push(appointmentD.appointmentDateTime);


const appointmentE = new AppointmentDetail(
  'Norberto Crossing Ste. 888',
  new Date(now + convertToUnixTime(0,1,3,1,0,0)),
  'Check-up',
  'Houston',
  '1',
  patientE.email,
  patientE.firstName,
  patientE.lastName,
  patientE.phoneNumber,
  patientE.state,
  patientE.zipCode
);
// add the appointment to the corresponding patient
patientE.appointments.push(appointmentE.appointmentDateTime);


export let appointments: AppointmentDetail[] = [
  appointmentA,
  appointmentB,
  appointmentC,
  appointmentD,
  appointmentE
]
