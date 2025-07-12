export interface PatientDetails {
    firstName: string,
    lastName: string,
    phoneNo: string,
    dateTime: string,
    status: string
}

export enum STATUS {
    Open = 'Open',
    Booked = 'Booked',
    Completed = 'Completed'
}