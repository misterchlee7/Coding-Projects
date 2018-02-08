class Patient(object):
    def __init__(self, id, name, allergies, bed_num="none"):
        self.id = id
        self.name = name
        self.allergies = allergies
        self.bed_num = bed_num

    def display(self):
        print self.id, self.name, self.allergies, self.bed_num

class Hospital(object):
    def __init__(self, name, capacity):
        self.patients = []
        self.name = name
        self.capacity = capacity

    def admit(self, patient, bed_num):
        if len(self.patients) < self.capacity:
            patient.bed_num = bed_num
            self.patients.append(patient)
        else:
            print "Hospital is full. We can't admit patient!"
        return self

    def discharge(self, name):
        for patient in self.patients:
            if patient.name == name:
                self.patients.remove(patient)
                patient.bed_num = "none" 
        return self

    def display(self):
        for patient in self.patients:
            print "Patient name: {} - ID #{} - Bed Number: {} - Known Allergies: {}".format(patient.name, patient.id, patient.bed_num, patient.allergies)

patient1 = Patient(111, "Adam", "Nuts")
patient2 = Patient(222, "Beth", "Water")
patient3 = Patient(333, "Cory", "Air")
patient4 = Patient(444, "Deshaun", "Fun")

hospital1 = Hospital("Saving Grace", 10)

hospital1.admit(patient1,1).admit(patient2,2).admit(patient3,3).admit(patient4,4).discharge("Cory").display()