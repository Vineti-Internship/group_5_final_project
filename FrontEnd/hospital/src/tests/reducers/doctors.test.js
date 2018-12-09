import * as actions from '../../actions/doctors';
import { doctors } from '../../reducers/doctors';


describe("Doctors reducer should correctly manipulate store", () => {
    const doctor = {
        doctorId: 23,
        fname: 'Some',
        lname: 'Name',
        specialization: 'srtaban',
        appointments: []
    };
    describe("Add new doctor with already existing specialization", () => {
        test("Should add a doctor to the store", () => {
            expect(doctors({srtaban: {}}, actions.addDoctor(doctor))).toEqual({
                srtaban: {
                    23: {
                        doctorId: 23,
                        fname: 'Some',
                        lname: 'Name',
                        specialization: 'srtaban',
                        appointments: []
                    }
                }
            })
        })
    })

    describe("Add new doctor with new specialization", () => {
        test("Should add a doctor to the store", () => {
            expect(doctors({}, actions.addDoctor(doctor))).toEqual({
                srtaban: {
                    23: {
                        doctorId: 23,
                        fname: 'Some',
                        lname: 'Name',
                        specialization: 'srtaban',
                        appointments: []
                    }
                }
            })
        })
    })
})